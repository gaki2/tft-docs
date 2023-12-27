import { Key, ReactNode, useState } from 'react';
import { parseMarkdown } from './parser';
import styled from 'styled-components';
import { Popup } from '../../ui/popup/Popup';

type MarkDownViewerProps = {
  html: string;
};

export const MarkDownViewer = ({ html }: MarkDownViewerProps) => {
  return <ViewerWrapper dangerouslySetInnerHTML={{ __html: html }}></ViewerWrapper>;
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

type MarkDownEditorType = {
  popup?: {
    triggerKey: string;
    // 이 ReactNode 안으로 top, left, replace, close, keyCode 를 주입한다.
    content: ReactNode;
  };
};

export const MarkDownEditor = (props: MarkDownEditorType) => {
  const { popup } = props;
  const [show, setShow] = useState(false);
  const [popupTop, setPopupTop] = useState(0);
  const [popupLeft, setPopupLeft] = useState(0);

  const [html, setHtml] = useState('');

  const onKeydown = (e: KeyboardEvent) => {
    const triggerKey = popup?.triggerKey;
    const nowPressedKey = e.key;
    const selection = window.getSelection();

    if ('/' === nowPressedKey) {
      setShow(true);

      const { left, bottom } = selection.getRangeAt(0).getBoundingClientRect();
      //
      // // bug) 엔터를 친 후 처음 글을 쓸때는 x, y, height 가 0으로 나온다.
      // if (x === 0 && y === 0 && height === 0) {
      console.log(e);
      setPopupTop(bottom);
      setPopupLeft(left);
    }

    parseMarkdown(e.target.innerText).then((res) => {
      setHtml(res);
    });
  };

  return (
    <Wrapper>
      <TextArea contentEditable={true} onKeyDown={onKeydown}></TextArea>
      <MarkDownViewer html={html} />
      <Popup show={show} onClose={() => setShow(false)} left={popupLeft} top={popupTop}>
        <h1>ㅎㅇ</h1>
      </Popup>
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
