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
  }>
>;

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
