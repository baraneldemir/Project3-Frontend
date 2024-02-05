import { Button, Form, Modal } from "react-bootstrap"
import axios from "axios";
import { useRef } from "react"



export default function LoginFormModal({show, handleClose}) {
    const fullNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function addLogIn(user) {
        console.log(user)
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/users/`,
            user
          );
          console.log(response)
        } catch (e) {
          console.error("Error adding SignIn", e);
        }
      }

    async function handleSubmit(e) {
        const user = {
        fullname: fullNameRef.current.value, 
        email: emailRef.current.value, 
        password: passwordRef.current.value
        }        
        e.preventDefault()  
        addLogIn(user) 
        handleClose()   
        
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
                    <Form.Control type="password" required />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" type="submit">Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}


