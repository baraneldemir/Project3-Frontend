import { Button, Form, Modal } from "react-bootstrap"


export default function LoginFormModal({show, handleClose}) {

    async function handleSubmit(e) {
        
        e.preventDefault()
        
    }
  return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Email</Form.Label>
                    <Form.Control  type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" type="submit">Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}


