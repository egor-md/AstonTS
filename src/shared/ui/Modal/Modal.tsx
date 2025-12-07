import { Children } from 'react';
import './Modal.css'
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
}

interface ModalConponentProps {
    children: React.ReactNode
}

export const Modal = {

    Root: ({ isOpen, onClose, children }: ModalProps) => {
        if (!isOpen) return null;

        const modalRoot = document.getElementById("modal-root") as HTMLElement;

        const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target === e.currentTarget) onClose();
        };

        return createPortal(
            <div className="wrap" onClick={handleBackgroundClick}>
                <div className="myModal">
                    {children}
                </div>
            </div>,
            modalRoot
        );
    },
    Header: ({ children }: ModalConponentProps) => <div className="modalHeader">{children}</div>,
    Body: ({ children }: ModalConponentProps) => <div className="modalBody">{children}</div>,
    Footer: ({ children }: ModalConponentProps) => <div className="modalFooter">{children}</div>,
};