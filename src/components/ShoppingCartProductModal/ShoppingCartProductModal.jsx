import { Card, Button } from "react-bootstrap"
import { useProducts } from "../../contexts/ProductContext";

export default function ShoppinCartProductModal({name, image, price, productId, userId}) {
  const {  deleteProduct} = useProducts();
  

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
      <Card.Footer >
      <Button variant="outline-danger" onClick={() => deleteProduct(productId, userId)}>Delete</Button>
      </Card.Footer>
    </Card>
  )
}










