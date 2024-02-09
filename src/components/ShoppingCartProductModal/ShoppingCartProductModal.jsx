import { Card, Button } from "react-bootstrap"
import { useProducts } from '../../contexts/ProductContext'
import { currencyFormatter } from "../../utilities/currencyFormatter"

export default function ShoppinCartProductModal({name, image, price, quantity, productId, userId, stock}) {
  const { updateCart, deleteProduct, updateProductStock } = useProducts()
  const formattedPrice = currencyFormatter.format(price)

  const handleAdd = () => {    
    if (stock > 0) {
      updateCart(productId, quantity + 1, userId)
      updateProductStock(productId, stock - 1)
    } else {
      alert('No More Stock')
    }
  }

  const handleSubtract = () => {
    if (quantity > 1) {
      updateCart(productId, quantity - 1, userId)
      updateProductStock(productId, stock + 1)
    }
  }

  const handleDelete = () => {
    updateProductStock(productId, stock + quantity)
    deleteProduct(productId, userId)
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
        <Card.Text>Amount: {quantity}</Card.Text>
        <Button variant="outline-secondary" onClick={handleSubtract}>-</Button> &nbsp;
        <Button variant="outline-secondary" onClick={handleAdd}>+</Button> &nbsp;
      <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
      </Card.Footer>
    </Card>
  )
}










