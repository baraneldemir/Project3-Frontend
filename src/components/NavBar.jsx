
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    
    return (
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
                Signed in as: Baran
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  

