import { Button, Form, Modal } from "react-bootstrap"
import { useRef } from "react"

export default function SignUpFormModal({show, handleClose}) {
    const fullNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e) {
        
        e.preventDefault()
        
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control ref={fullNameRef} type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="text" required />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" type="submit">Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
