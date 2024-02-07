import { Card, Button } from "react-bootstrap"
import { useProducts } from '../../contexts/ProductContext'

export default function ShoppinCartProductModal({name, image, price, quantity, productId, userId, setShoppingCart}) {
  const { updateCart, getShoppingCartProducts } = useProducts()

  const handleAdd = () => {
    updateCart(productId, quantity + 1, userId)
    setShoppingCart(true)
    getShoppingCartProducts(userId)
  }

  const handleSubtract = () => {
    if (quantity > 1) {
      updateCart(productId, quantity - 1, userId)
      setShoppingCart(true)
      getShoppingCartProducts(userId)
    }
  }

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
      <Card.Footer >
        <Card.Text>Amount: {quantity}</Card.Text>
        <Button variant="outline-secondary" onClick={handleSubtract}>-</Button>
        <Button variant="outline-secondary" onClick={handleAdd}>+</Button>
      </Card.Footer>
    </Card>
  )
}










