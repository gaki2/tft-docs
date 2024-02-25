import { CSSProperties, HTMLAttributes, useCallback, useEffect } from 'react';
import { PopupProps } from './Popup';

export const usePopup = (props: PopupProps) => {
  const { onClose, overlayColor, left, top, closeOnEsc } = props;

  const getOverlayProps = useCallback<() => HTMLAttributes<HTMLDivElement>>(() => {
    return {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: overlayColor ?? 'transparent',
      },
    };
  }, [overlayColor]);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [onClose]);

  const getPopupProps = useCallback<(style?: CSSProperties) => HTMLAttributes<HTMLDivElement>>(
    (style) => {
      return {
        style: {
          position: 'absolute',
          top: top,
          left: left,
          ...style,
        },
      };
    },
    [left, top]
  );

  return {
    getOverlayProps,
    getPopupProps,
  };
};
