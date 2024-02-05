import { Card, Button } from "react-bootstrap"

export default function ProductCard({name, image, price}) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
      <Card.Footer >
        <Button variant="secondary">Add To Shoppin Card</Button>
        &nbsp;
        &nbsp;
        <Button variant="secondary">Info</Button>
      </Card.Footer>
    </Card>
  )
}
