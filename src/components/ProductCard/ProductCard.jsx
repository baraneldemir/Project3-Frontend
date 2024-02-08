import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { currencyFormatter } from "../../utilities/currencyFormatter"
import { useProducts } from '../../contexts/ProductContext'
import { useState, useEffect } from 'react'



export default function ProductCard({id, name, image, price, user, stock, handleAlertAddedChange, handleAlertStockChange}) {
  const formattedPrice = currencyFormatter.format(price)
  const { product, addToCart, updateProductStock, isUpdated, setIsUpdated, getSingleProduct } = useProducts()
  const [localStock, setLocalStock] = useState(stock)

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
        {stock > 0 ? <Button variant="outline-light" onClick={() => {
          handleAddToCart()
          handleAlertAddedChange()
          }}>Add To Shopping Cart</Button> : <Button variant="outline-danger" onClick={handleAlertStockChange}>Out of Stock</Button>}
        &nbsp;
        &nbsp;
       <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}><Button variant="outline-light">Info</Button></Link>          
       </>
        :
        <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}><Button variant="outline-light">Info</Button></Link>     
      }
      </Card.Footer>
    </Card>
  )
}