import ProductCard from "../../components/ProductCard/ProductCard";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { Form, Button} from "react-bootstrap";
import { useState } from "react";
import { Navbar, Nav, NavDropdown  } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import './ProductsPage.css'


export default function ProductsPage({user, setUser}) {
  const [showAddedAlert, setShowAddedAlert] = useState(false);
  const [showStockAlert, setShowStockAlert] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("")
  const { products, getProducts, searchBar, result, setResult, isUpdated} = useProducts();
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  

  function handleClick() {
    setResult(false)
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    searchBar(search);
  }

  function handleAlertAddedChange() {
    setShowAddedAlert(true)
  }
  function handleAlertStockChange() {
    setShowStockAlert(true)
  }
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  function checkScreenSize() {
    setIsSmallScreen(window.innerWidth < 768);
  }

  const filteredProducts = selectedCategory
  ? products.filter((product) => product.category === selectedCategory)
  : products;

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated])


  window.addEventListener('resize', checkScreenSize);

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
              <NavDropdown.Item onClick={() => { 
                handleClick() 
                handleCategoryChange("")}}>All</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                handleClick() 
                handleCategoryChange("Telescope")}}>Telescopes </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                handleClick() 
                handleCategoryChange("Clothes")}}>Clothes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                handleClick() 
                handleCategoryChange("Educational")}}>Educational</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                handleClick() 
                handleCategoryChange("Collector's Item")}}>Collector's Item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() =>{ 
                handleClick()
                handleCategoryChange("Food")}}>Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                handleClick()
                handleCategoryChange("Space Rocks")}}>Space Rocks</NavDropdown.Item>
              
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
            {isSmallScreen ? 
            <></>
            :
            <Button variant="outline-success">Search</Button>
            }
          </Form>
       
      </Container>
    </Navbar>
    <div className="alert-container" style={{ 
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "999"}}>
  <Alert show={showAddedAlert} variant="success">
    <img
      variant="top"
      alt="cartpng"
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Check-mark.png"
      style={{ objectFit: "contain", height: "15vh", display: "block", margin: "0 auto" }}
    />
    <p> Item has been added to the shopping cart.</p>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={() => setShowAddedAlert(false)} variant="outline-success">
        Close me
      </Button>
    </div>
  </Alert>
</div>
<div className="alert-container" style={{ 
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "999"}}>
  <Alert show={showStockAlert} variant="danger">
    <img
      variant="top"
      alt="cartpng"
      src="https://static.vecteezy.com/system/resources/previews/017/178/032/original/round-cross-mark-symbol-with-transparent-background-free-png.png"
      style={{ objectFit: "contain", height: "15vh", display: "block", margin: "0 auto" }}
    />
    <p> The item is currently out of stock.</p>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={() => setShowStockAlert(false)} variant="outline-danger">
        Close me
      </Button>
    </div>
  </Alert>
</div>
    <div style={{ display: 'flex', justifyContent: 'center', backgroundAttachment: "fixed", backgroundImage: `url("https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png")`, backgroundSize: 'cover', minHeight: '100vh'}}>
      
      <Container className="my-4 fade-in">
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
                  handleAlertAddedChange={handleAlertAddedChange}
                  handleAlertStockChange={handleAlertStockChange}
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
                  handleAlertAddedChange={handleAlertAddedChange}
                  handleAlertStockChange={handleAlertStockChange}
                />
              ))}
        </div>
      </Container>
      
      </div>
    </>
  );
}