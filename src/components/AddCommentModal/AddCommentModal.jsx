import { Button, Form, Modal } from "react-bootstrap"
import { useRef } from "react"
import { useProducts } from "../context/BudgetContext"

export default function AddCommentModal({show, handleClose }) {
    const titleRef = useRef()
    const textRef = useRef()
    const productIdRef = useRef()

    const { addComment, getComments } = useProducts()

    async function handleSubmit(e) {
        e.preventDefault()
        await addComment({
            title: titleRef.current.value,
            text: textRef.current.value, 
            productId: productIdRef.current.value
        })
        handleClose()
        getComments()

    }
  return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>New Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={titleRef} type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Text</Form.Label>
                    <Form.Control ref={textRef} type="text" required />
                </Form.Group>
                <Modal.Footer>
                    <Button variant="primary" type="submit">Add</Button>
                </Modal.Footer>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
