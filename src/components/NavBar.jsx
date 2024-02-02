
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    
    return (
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
                Signed in as: Baran
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  

