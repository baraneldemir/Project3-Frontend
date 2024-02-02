import { Button, Form, Modal } from "react-bootstrap"

export default function SignUpForm({ handleClose, show }) {

  return (
    <Modal show={show} onHide={handleClose} style={{ color: "Red" }}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
