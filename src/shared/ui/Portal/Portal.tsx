import { createPortal } from 'react-dom';

interface PortalProps {
  children?: React.ReactNode;
  element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = (props: PortalProps) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};
