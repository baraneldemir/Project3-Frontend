import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LoginForm from './LoginForm/LoginForm.jsx';
import SignUpForm from './SignUpForm/SignUpForm.jsx';
import { Button } from 'react-bootstrap';

export default function NavBar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Cosmic Collectibles</Navbar.Brand>
          <Navbar.Toggle />
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="primary" onClick={() => setShowLoginForm(true)}>Login</Button>
              <Button variant="primary" onClick={() => setShowSignUpForm(true)}>Sign Up</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showLoginForm && (
        <LoginForm handleClose={() => setShowLoginForm(false)} show={showLoginForm} />
      )}
      {showSignUpForm && (
        <SignUpForm handleClose={() => setShowSignUpForm(false)} show={showSignUpForm} />
      )}


    </>
  );
}
