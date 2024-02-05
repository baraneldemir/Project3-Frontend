import { Button, Form, Modal } from "react-bootstrap";
import { useState, useRef } from "react";
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({ setUser, show, handleClose }) {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const userFormData = {
        name: fullNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      const user = await signUp(userFormData);
      setUser(user);
      handleClose(); // Close the modal after successful sign-up
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" ref={fullNameRef} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" type="submit">
              Sign Up
            </Button>
          </div>
        </Modal.Body>
      </Form>
      <p className="error-message">&nbsp;{error}</p>
    </Modal>
  );
}