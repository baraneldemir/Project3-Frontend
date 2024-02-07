import { Card, Button } from "react-bootstrap"
import { useProducts } from "../../contexts/ProductContext";
import { currencyFormatter } from "../../utilities/currencyFormatter";

export default function ShoppinCartProductModal({name, image, price, productId, userId}) {
  const formattedPrice = currencyFormatter.format(price)
  const {  deleteProduct} = useProducts();
  

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
      <Button variant="outline-danger" onClick={() => deleteProduct(productId, userId)}>Delete</Button>
      </Card.Footer>
    </Card>
  )
}










