import { Card, Button } from 'react-bootstrap'

export default function ProductsPage() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Product 1</Card.Title>
        <Card.Text>Price: 100</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Go somewhere</Button>
      </Card.Footer>
    </Card>
  )
}
