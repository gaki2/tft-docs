import React, { forwardRef } from 'react';
import { Portal } from '../portal/Portal';
import { WithPrimitive } from '../../types/primitive';
import { usePopup } from './usePopup';

export type PopupProps = WithPrimitive<
  React.PropsWithChildren<{
    show: boolean;
    onClose: () => void;
    left: number;
    top: number;
    ref: React.RefObject<HTMLDivElement>;
    overlayColor?: string;
    /**
     * @default true
     */
    closeOnEsc?: boolean;
  }>
>;

// 눈에 보이지 않는 Overlay 를 렌더링하며, Overlay 를 클릭할 경우 팝업이 꺼진다.
export const Popup = forwardRef<HTMLDivElement, PopupProps>((props, ref) => {
  const { show, onClose, className, style, children } = props;
  const { getOverlayProps, getPopupProps } = usePopup(props);

  if (!show) return null;

  return (
    <Portal>
      <div role='overlay' onClick={onClose} {...getOverlayProps()} />
      <div role='popup' {...getPopupProps(style)} className={className}>
        {children}
      </div>
    </Portal>
  );
});

Popup.displayName = 'POPUP';
