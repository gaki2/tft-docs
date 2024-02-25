import React, { createElement, ReactDOM, useEffect, useMemo, useState } from 'react';
// import { parseMarkdown } from './parser';
import styled from 'styled-components';
import { Popup } from '../../ui/popup/Popup';
import { ComboBox, ComboBoxProps } from './comboBox/ComboBox';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { ChampionBadge10 } from '../badge';
import { compile, evaluateSync, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { reporter } from 'vfile-reporter';
import { MDXModule } from '@mdx-js/mdx/lib/run';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import * as prod from 'react/jsx-runtime';

type MarkDownViewerProps = {
  text: string;
};

async function parseMarkdown(text: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(text);
  return result;
}

export { parseMarkdown };
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

export const MarkDownViewer = ({ text }: MarkDownViewerProps) => {
  const [html, setHtml] = useState('');
  const [mdx, setMdx] = useState<MDXModule | null>(null);
  const [isError, setIsError] = useState(false);
  const [temp, setTemp] = useState<any>(null);

  // 이 방법으로 하면 #, ## 같은 기본 마크다운 문법이 작동하지 않음..
  // useEffect(() => {
  //   unified()
  //     .use(rehypeParse, { fragment: true })
  //     .use(rehypeReact, {
  //       Fragment: prod.Fragment,
  //       jsx: prod.jsx,
  //       jsxs: prod.jsxs,
  //       components: {
  //         championbadge10: ChampionBadge10,
  //       },
  //     })
  //     .process(text)
  //     .then((file) => {
  //       console.log(file.result);
  //       setTemp(file.result);
  //     });
  // }, [text]);

  // const temp = useMemo(() => {
  //   try {
  //   }
  // }, [text]);

  //
  // const mdx = evaluateSync(text, {
  //   ...(runtime as any),
  //   remarkPlugins: [remarkParse, remarkBreaks, remarkGfm],
  // }).default;

  useEffect(() => {
    try {
      const mdxContent = evaluateSync(text, {
        ...(runtime as any),
        remarkPlugins: [remarkParse, remarkBreaks, remarkGfm],
      });
      setMdx(mdxContent);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  }, [text]);

  // useEffect(() => {
  //   parseMarkdown(text).then((res) => {
  //     setHtml(res.toString());
  //   });
  // }, [text]);

  return (
    <ViewerWrapper contentEditable={false}>
      {mdx?.default({
        components: {
          ChampionBadge10: ChampionBadge10,
        },
      })}
      {/*{temp}*/}
    </ViewerWrapper>
  );
};

const ViewerWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

type MarkDownEditorPopupProps = {
  top: number;
  left: number;
  replace: (value: string) => void;
  close: () => void;
  triggerKey: string;
};

type SelectionPosition = {
  top: number;
  left: number;
  height: number;
};

const POPUP_TRIGGER_KEY = '/';

let savedRange: Range | null = null;

export const MarkDownEditor = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectionPos, setSelectionPos] = useState<SelectionPosition>({
    top: 0,
    height: 0,
    left: 0,
  });
  const [textInput, setTextInput] = useState('');
  const contentEditableRef = React.useRef<HTMLDivElement>(null);

  const restoreSelection = (insertText?: string) => {
    const sel = window.getSelection();
    if (!sel) {
      console.error(`Selection is NULL!! ${sel} is not defined.`);
      return;
    }

    if (insertText) {
      // 기존에 입력되었던 TRIGGER_KEY 를 지워준다.
      savedRange?.setStart(savedRange.startContainer, savedRange.startOffset - 1);
      savedRange?.deleteContents();

      const textNode = document.createTextNode(insertText);
      // const span = document.createElement('span');
      // const root = createRoot(span);
      // root.render(<ChampionBadge10 name={'Ahri'} />);

      savedRange?.insertNode(textNode);
      savedRange?.setStartAfter(textNode);
      savedRange?.collapse(true);
    }

    sel.removeAllRanges();
    sel.addRange(savedRange!);
  };

  const onClosePopup = () => {
    setShowPopup(false);
    const sel = window.getSelection();
    if (!sel) {
      console.error(`Selection is NULL!! ${sel} is not defined.`);
      return;
    }
  };

  const onPressedPopupTriggerKey = () => {
    const selection = window.getSelection();

    if (!selection) {
      console.error(`Selection is NULL!! ${selection} is not defined.`);
      return;
    }
    setShowPopup(true);
    const { left, top, height } = selection.getRangeAt(0).getBoundingClientRect();
    setSelectionPos({
      top: top,
      height: height,
      left: left,
    });

    // 팝업이 닫혔을때 caret 의 위치를 원래 위치로 되돌리기 위해서 현재 caret 의 위치를 기억해둔다.
    savedRange = selection.getRangeAt(0).cloneRange();
  };

  const onInput = (e: React.FormEvent<HTMLDivElement>) => {
    const pressedKey = (e.nativeEvent as InputEvent).data;

    if (pressedKey === POPUP_TRIGGER_KEY) {
      onPressedPopupTriggerKey();
    }
    setTextInput((e.target as HTMLDivElement).innerText);
  };

  const onComboBoxKeyDown = (e: KeyboardEvent) => {
    if (
      ((e.key === 'Backspace' || e.key === '/') &&
        (e.target as HTMLInputElement).value.length === 0) ||
      e.key === 'Escape'
    ) {
      e.preventDefault();
      onClosePopup();
      restoreSelection();
    }
  };

  const createCode = (type: string, value: string) => {
    if (type === 'champion') {
      return `<ChampionBadge10 name="${value}" />`;
    } else if (type === 'item') {
      return `<ItemBadge10 name="${value}" />`;
    }
  };

  const onSelect: ComboBoxProps['onSelect'] = ({ type, value }) => {
    onClosePopup();
    restoreSelection(createCode(type, value));
  };

  return (
    <Wrapper>
      <TextArea
        ref={contentEditableRef}
        aria-label='lolchess and tft editor'
        contentEditable={true}
        onInput={onInput}></TextArea>
      <MarkDownViewer text={textInput} />
      <Popup
        show={showPopup}
        onClose={onClosePopup}
        left={selectionPos.left}
        top={selectionPos.top + selectionPos.height}
        closeOnEsc={false}>
        <ComboBox onKeyDown={onComboBoxKeyDown} onSelect={onSelect} />
      </Popup>
      <PseudoCaret
        hidden={!showPopup}
        top={selectionPos.top}
        left={selectionPos.left}
        height={selectionPos.height}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;
`;

const TextArea = styled.div`
  width: 50%;
  height: 100%;

  :focus {
    outline: none;
  }
`;

const PseudoCaret = styled.div<{ top: number; left: number; height: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  transform: translate(${(props) => props.left}px, ${(props) => props.top}px);
  height: ${(props) => props.height}px;
  background-color: black;
  pointer-events: none;
`;

//
// <------------ Best Practice ------------>
//
// <MarkDownEditor>
//   {({replace, keyCode, close}) => {
//     if (keyCode === '/') {
//       return <ToolBox close={close} replace={replace} />
//     }
//   }}
// </MarkDownEditor>
//
// <MarkDownViewer components={{
//   Board: Board10,
//   ChampionBadge10: ChampionBadge10,
// }}>
// </MarkDownViewer>
