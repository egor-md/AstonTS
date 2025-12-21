import { createPortal } from 'react-dom';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface ModalComponentProps {
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="wrap" onClick={handleBackgroundClick}>
      <div className="myModal">{children}</div>
    </div>,
    modalRoot
  );  
}

Modal.Header = ({ children }: ModalComponentProps) => (
  <div className="modalHeader">{children}</div>
);

Modal.Body = ({ children }: ModalComponentProps) => (
  <div className="modalBody">{children}</div>
);

Modal.Footer = ({ children }: ModalComponentProps) => (
  <div className="modalFooter">{children}</div>
);
