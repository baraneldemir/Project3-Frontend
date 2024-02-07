import { Card, Button } from "react-bootstrap"
import { currencyFormatter } from "../../utilities/currencyFormatter"
import { useProducts } from '../../contexts/ProductContext'

export default function ShoppinCartProductModal({id, name, image, price, user}) {

  const formattedPrice = currencyFormatter.format(price)
  const { deleteFromCart } = useProducts()

  function handleDeleteFromCart() {
    deleteFromCart(id, user._id)
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
        <Button variant="danger" onClick={handleDeleteFromCart}>Delete</Button>
      </Card.Footer>
    </Card>
  )
}










