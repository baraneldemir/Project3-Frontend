import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { currencyFormatter } from "../../utilities/currencyFormatter"
import { useProducts } from '../../contexts/ProductContext'
import { useState, useEffect } from 'react'
import LoginFormModal from "../LoginFormModal/LoginFormModal"
import { Alert } from "react-bootstrap"





export default function ProductCard({id, name, image, price, user, stock, setUser}) {
  const formattedPrice = currencyFormatter.format(price)
  const { product, addToCart, updateProductStock, isUpdated, setIsUpdated, getSingleProduct } = useProducts()
  const [localStock, setLocalStock] = useState(stock)
  const [showLoginFormModal, setShowLoginFormModal] = useState(false);
  const [showAddedAlert, setShowAddedAlert] = useState(false);
  const [showStockAlert, setShowStockAlert] = useState(false);


  function handleAlertAddedChange() {
    setShowAddedAlert(true)
  }
  function handleAlertStockChange() {
    setShowStockAlert(true)
  }
  

  const handleAddToCart = () => {
    if (localStock > 0) {
      addToCart(id, 1, user._id)
      const updatedStock = localStock - 1
      updateProductStock(id, updatedStock, setLocalStock)
      setLocalStock(updatedStock)
      getSingleProduct(id)
    } else {
      alert('No More Stock')
    }
  }

  useEffect(() => {
    getSingleProduct(id)
    setIsUpdated(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated])

  useEffect(() => {
    if (product) {
      setLocalStock(stock);
      setIsUpdated(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);




  return (
    <>
    <Card style={{ border: "2px solid #001F3F", borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s"}}>
      <div style={{ height: "22vh", overflow: "hidden"}}>
        <Card.Img variant="top" src={image} style={{ objectFit: "contain", height: "100%", background: 'url(https://wallpapers.com/images/featured/cosmic-background-tr6ptidf81on0l2b.webp)'}}/>
      </div>
      <Card.Body style={{ backgroundColor: "#001F3F", color: "#FFFFFF" }}>
        <Card.Title style={{ fontFamily: "Arial, sans-serif" }}>{name}</Card.Title>
        <Card.Text>{formattedPrice}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: "#001F3F", borderTop: "1px solid #E6E6E6" }}>
        {user ?
        <>
        {stock > 0 ? <Button disabled={showAddedAlert} variant="outline-light" onClick={() => {
          handleAddToCart()
          handleAlertAddedChange()
          }}><img style={{height: "3vh", paddingRight: "1vh", marginTop: "-0.9vh"}} src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="logo"/>Add to Bag</Button> : <Button disabled={showStockAlert} variant="outline-danger" onClick={handleAlertStockChange}><img style={{height: "3vh", paddingRight: "1vh", marginTop: "-0.9vh"}} src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="logo"/>Out of Stock</Button>}
        &nbsp;
        &nbsp;
       <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}><Button variant="outline-light">Info</Button></Link>          
       </>
        :
        <>
        {stock > 0 ? <Button  disabled={showAddedAlert} variant="outline-light" onClick={() => {
          setShowLoginFormModal(true)
          }}> <img style={{height: "3vh", paddingRight: "1vh", marginTop: "-0.9vh"}} src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="logo"/> Add to Bag</Button> : <Button disabled={showStockAlert} variant="outline-danger" onClick={handleAlertStockChange}><img style={{height: "3vh", paddingRight: "1vh", marginTop: "-0.9vh"}} src="https://cdn-icons-png.flaticon.com/512/468/468209.png" alt="logo"/>Out of Stock</Button>}
        &nbsp;
        &nbsp;
        <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}><Button variant="outline-light">Info</Button></Link> 
        </>    
      }
      </Card.Footer>
    </Card>
    <LoginFormModal show={showLoginFormModal} handleClose={() => setShowLoginFormModal(false)} setUser={setUser} />
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
    </>
  )
}