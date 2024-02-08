import ProductCard from "../../components/ProductCard/ProductCard";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { Form, Button} from "react-bootstrap";
import { useState } from "react";
import { Navbar, Nav, NavDropdown  } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';


export default function ProductsPage({user, setUser}) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("")
  const { products, getProducts, searchBar, result} = useProducts();

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    searchBar(search);
  }

  function handleAlertChange() {
    setShow(true)
  }
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const filteredProducts = selectedCategory
  ? products.filter((product) => product.category === selectedCategory)
  : products;

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <Navbar className="bg-body-tertiary"  data-bs-theme="dark">
      <Container >
        <Navbar.Brand >Categories</Navbar.Brand>
        
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="List of Products" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleCategoryChange("")}>All</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleCategoryChange("Telescope")}>Telescopes </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleCategoryChange("Clothes")}>Clothes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleCategoryChange("Educational")}>Educational</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleCategoryChange("Collector's Item")}>Collector's Item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleCategoryChange("Food")}>Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleCategoryChange("Space Rocks")}>Space Rocks</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={handleSearchChange}
              value={search}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
       
      </Container>
    </Navbar>
    <div className="alert-container" style={{ 
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "999"}}>
  <Alert show={show} variant="success">
    <img
      variant="top"
      alt="cartpng"
      src="https://www.shareicon.net/data/2016/02/07/281223_cart_512x512.png"
      style={{ objectFit: "contain", height: "10vh" }}
    />
    <p> had been added to the shopping cart.</p>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={() => setShow(false)} variant="outline-success">
        Close me
      </Button>
    </div>
  </Alert>
</div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundAttachment: "fixed", backgroundImage: `url("https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png")`, backgroundSize: 'cover', minHeight: '100vh'}}>
      
      <Container className="my-4">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          { result ? 
          
            result.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  stock={product.stock}
                  user={user}
                  handleAlertChange={handleAlertChange}
                />
              ))
            : filteredProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  stock={product.stock}
                  user={user}
                  handleAlertChange={handleAlertChange}
                />
              ))}
        </div>
      </Container>
      
      </div>
    </>
  );
}