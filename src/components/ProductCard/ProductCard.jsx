import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { currencyFormatter } from "../../utilities/currencyFormatter"
import { useProducts } from '../../contexts/ProductContext'
import { useState } from 'react'

export default function ProductCard({id, name, image, price, user, stock}) {
  const formattedPrice = currencyFormatter.format(price)
  const { addToCart, updateProductStock } = useProducts()
  const [localStock, setLocalStock] = useState(stock)

  const handleAddToCart = () => {
    if (localStock > 0) {
      addToCart(id, 1, user._id)
      const updatedStock = localStock - 1
      updateProductStock(id, updatedStock, setLocalStock)
    } else {
      alert('No More Stock')
    }
  }


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
        {stock > 0 ? <Button variant="secondary" onClick={handleAddToCart}>Add To Shopping Cart</Button> : <Button variant="danger">Out of Stock</Button>}
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