import { Card, Button } from "react-bootstrap"

export default function ShoppinCartProductModal({name, image, price}) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
      <Card.Footer >
        <Button variant="secondary">Buy It Now</Button>
      </Card.Footer>
    </Card>
  )
}










// import { Card, Button } from "react-bootstrap"

// export default function ShoppinCartProductModal({name, image, price}) {
//   return (
//     <Card>
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>{price}</Card.Text>
//       </Card.Body>
//       <Card.Footer >
//         <Button variant="secondary">Buy It Now</Button>
//       </Card.Footer>
//     </Card>
//   )
// }
