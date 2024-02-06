import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { currencyFormatter } from "../../utilities/currencyFormatter"

export default function ProductCard({id, name, image, price}) {
  const formattedPrice = currencyFormatter.format(price)
  

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
        <Button variant="secondary">Add To Shoppin Card</Button>
        &nbsp;
        &nbsp;
       <Link to={`/products/${id}`} ><Button variant="secondary">Info</Button></Link>
      </Card.Footer>
    </Card>
  )
}
