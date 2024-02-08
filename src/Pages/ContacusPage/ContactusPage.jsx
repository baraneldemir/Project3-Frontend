import { Button, Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';

export default function ContactusPage() {
  const [showSubmitAlert, setShowSubmitAlert] = useState(false);
  const formRef = useRef(null);

  function handleAlert() {
    setShowSubmitAlert(true);
  }

  function handleCloseAlert() {
    setShowSubmitAlert(false);
    // Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <>
      <Form
        ref={formRef}
        style={{
          display: "grid",
          justifyContent: "start",
          justifyItems: "stretch",
          marginTop: "50px",
          marginLeft: "120px"
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button onClick={handleAlert}>Submit</Button>
      </Form>
      <div
        className="alert-container"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "999"
        }}
      >
        <Alert show={showSubmitAlert} variant="outline-success">
          <img
            variant="top"
            alt="cartpng"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Check-mark.png"
            style={{ objectFit: "contain", height: "15vh", display: "block", margin: "0 auto" }}
          />
          <p>Your message has been submitted</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleCloseAlert} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>
      </div>
    </>
  );
}
