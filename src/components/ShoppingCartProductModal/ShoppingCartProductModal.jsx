import { Card, Button } from "react-bootstrap"
import { useProducts } from '../../contexts/ProductContext'
import { currencyFormatter } from "../../utilities/currencyFormatter"

export default function ShoppinCartProductModal({name, image, price, quantity, productId, userId, setShoppingCart}) {
  const { updateCart, deleteProduct } = useProducts()
  const formattedPrice = currencyFormatter.format(price)

  const handleAdd = () => {    
    updateCart(productId, quantity + 1, userId)
    
  }

  const handleSubtract = () => {
    if (quantity > 1) {
      updateCart(productId, quantity - 1, userId)
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
        <Card.Text>Amount: {quantity}</Card.Text>
        <Button variant="outline-secondary" onClick={handleSubtract}>-</Button>
        <Button variant="outline-secondary" onClick={handleAdd}>+</Button>
      <Button variant="outline-danger" onClick={() => deleteProduct(productId, userId)}>Delete</Button>
      </Card.Footer>
    </Card>
  )
}










