import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LoginFormModal from './LoginFormModal/LoginFormModal'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SignUpFormModal from './SignUpFormModal/SignUpFormModal';


export default function NavBar() {

  const [showLoginFormModal, setShowLoginFormModal] = useState(false)
  const [showSignupFormModal, setShowSignupFormModal] = useState(false)
    
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand >Cosmic Collectables</Navbar.Brand>
            <Navbar.Toggle />
                <Nav>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                </Nav>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="/yourCart">
                        <img
                            src="https://www.shareicon.net/data/2016/02/07/281223_cart_512x512.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Shopping cart logo"
                        />
            </Navbar.Brand>
            <Navbar.Brand href="/likedItems">
                        <img
                            src="https://i.imgur.com/EALzAZ0.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Shopping cart logo"
                        />
            </Navbar.Brand>
              <Navbar.Text>
                <Button variant="secondary" onClick={() => setShowLoginFormModal(true)}>Log in</Button>
                &nbsp;
                &nbsp;
                <Button variant="secondary" onClick={() => setShowSignupFormModal(true)}>Sign up</Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <LoginFormModal show={showLoginFormModal} handleClose={() => setShowLoginFormModal(false)} />
        <SignUpFormModal show={showSignupFormModal} handleClose={() => setShowSignupFormModal(false)}/>
        </>
      );
    }
  

