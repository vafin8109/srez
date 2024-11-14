import s from './OrderModal.module.css'
import Modal from "react-modal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function OrderModal({ modalIsOpen, setModalIsOpen }) {
    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Введите ваш Email:</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>ФИО</Form.Label>
                        <Form.Control type="text" className='fio' placeholder="Кузнецов Иван Янович" />
                    </Form.Group>
                    <Button variant="outline-success" href="/catalog">Отправить</Button>
                </Form>
                
                <img onClick={closeModal} className={s.close} src="./close.jpg" alt="close" />
            </Modal>
        </>
    )
}