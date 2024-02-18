import ProductCard from "../../components/ProductCard/ProductCard";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { Alert, Button } from "react-bootstrap";
import "../HomePage.css"

export default function ProductsPage({user}) {
  const { products, getProducts} = useProducts();
  const [randomProducts, setRandomProducts] = useState([]);
  const [productCount, setProductCount] = useState(calculateProductCount());
  const [showAddedAlert, setShowAddedAlert] = useState(false);
  const [showStockAlert, setShowStockAlert] = useState(false);


  function handleAlertAddedChange() {
    setShowAddedAlert(true)
  }
  function handleAlertStockChange() {
    setShowStockAlert(true)
  }


  useEffect(() => {
    // clearTimeout(timeIdList)
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setRandomProducts(getRandomProducts(products, productCount));
    const intervalId = setInterval(() => {
      setRandomProducts(getRandomProducts(products, productCount));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [products, productCount]);

  function getRandomProducts(products, count) {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  }

  function calculateProductCount() {
    if (window.innerWidth < 770) {
      return 1;
    } else if (window.innerWidth < 990) {
      return 2; 
    } else if (window.innerWidth < 1400) {
      return 3; 
    } else { return 4 }
  }

  // const timeIdList = setTimeout(() => {
  //   // After 3 seconds set the show value to false
  //   setShowAddedAlert(false)
  //   setShowStockAlert(false)
  // }, 2000)

  useEffect(() => {
   
    
    function handleResize() {
      const count = calculateProductCount()
      setProductCount(count)
      setRandomProducts(getRandomProducts(products, count));
    }
    
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [products]);


  return (
    <>
 
      
      <Container className="subContainer" >
        <div  className="singleProduct fade-in" style={{            
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",}}>
            {randomProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  user={user}
                  handleAlertAddedChange={handleAlertAddedChange}
                  handleAlertStockChange={handleAlertStockChange}
                />
              ))}
        </div>
      </Container>
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
      {/* <Button onClick={() => setShowAddedAlert(false)} variant="outline-success">
        Close me
      </Button> */}
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
     
    </>
  );
}