import { useState } from 'react'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import { Modal } from '../../shared/ui/Modal/Modal'
import './Header.css'
import { Button } from '../../shared/ui/Button/Button'




export function Header() {

    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <header>
            <h3>Header</h3>
            <ThemeSwitcher />
            <Button className={'themeSwitcher'} onClick={openModal}>О проекте</Button>
            <Modal isOpen={open} onClose={closeModal}>
                <Modal.Header>
                    <h2>О проекте</h2>
                </Modal.Header>
                <Modal.Body>
                    <p>homework-2</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className={'closeButton'} onClick={closeModal}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        </header>
    )
}