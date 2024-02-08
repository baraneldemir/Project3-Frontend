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
    <Card>
      <div style={{ height: "200px", overflow: "hidden"}}>
        <Card.Img variant="top" src={image} style={{ objectFit: "contain", height: "100%" }}/>
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{formattedPrice}</Card.Text>
      </Card.Body>
      <Card.Footer >
        {user ?
        <>
        {stock > 0 ? <Button variant="secondary" onClick={() => {
          handleAddToCart()
          handleAlertAddedChange()
          }}>Add To Shopping Cart</Button> : <Button variant="danger" onClick={handleAlertStockChange}>Out of Stock</Button>}
        &nbsp;
        &nbsp;
       <Link to={`/products/${id}`} ><Button variant="secondary">Info</Button></Link>
       </>
        :
        <Link to={`/products/${id}`} ><Button variant="secondary">Info</Button></Link>     
      }
      </Card.Footer>
    </Card>
  )
}