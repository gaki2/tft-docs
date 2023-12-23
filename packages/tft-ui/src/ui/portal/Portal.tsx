import { createPortal } from 'react-dom';
import { type ReactNode, useEffect, useRef, useState } from 'react';

export interface PortalProps {
  defaultNode?: HTMLElement;
  children: ReactNode;
}

// 레퍼런스: https://github.com/tajo/react-portal/blob/master/src/Portal.js
export const Portal = (props: PortalProps) => {
  const { defaultNode, children } = props;

  const createdNodeRef = useRef<HTMLElement | null>(null);
  const [isPortalMounted, setIsPortalMounted] = useState(false);

  useEffect(() => {
    if (!defaultNode) {
      const node = document.createElement('div');
      document.body.appendChild(node);
      createdNodeRef.current = node;
    }
    setIsPortalMounted(true);
  }, []);

  if (!isPortalMounted) return null;
  if (!createdNodeRef.current && !defaultNode) return null;

  // 포탈 생성
  return createPortal(children, defaultNode! || createdNodeRef.current);
};
