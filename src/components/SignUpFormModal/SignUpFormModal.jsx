import { Button, Form, Modal } from "react-bootstrap"
import { useRef } from "react"
import axios from "axios"

export default function SignUpFormModal({show, handleClose}) {
    const fullNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function addSignUp(newUser) {
        console.log(newUser)
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/users/new`,
            newUser
          );
          console.log(response)
        } catch (e) {
          console.error("Error adding SignUp", e);
        }
      }

    async function handleSubmit(e) {
        const newUser = {
        fullname: fullNameRef.current.value, 
        email: emailRef.current.value, 
        password: passwordRef.current.value
        }        
        e.preventDefault()  
        addSignUp(newUser) 
        handleClose()   
        
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
