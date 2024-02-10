import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import * as usersService from '../../utilities/users-service';

export default function LoginFormModal({ user, setUser, show, handleClose }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      console.log('Login successful. User:', user);
      setUser(user);
      handleClose()
    } catch {
      console.error('Login failed. Error:', error);
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" type="submit">
              Log In
            </Button>
          </div>
        </Modal.Body>
      </Form>
      <p className="error-message">&nbsp;{error}</p>
    </Modal>
  );
}