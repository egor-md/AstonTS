import './Modal.css'
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {

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
};