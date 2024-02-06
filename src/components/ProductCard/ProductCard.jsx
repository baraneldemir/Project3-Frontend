import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { currencyFormatter } from "../../utilities/currencyFormatter"
import { useProducts } from '../../contexts/ProductContext'

export default function ProductCard({id, name, image, price, user}) {
  const formattedPrice = currencyFormatter.format(price)
  const { addToCart } = useProducts()

  const handleAddToCart = () => {
    addToCart(id, 1, user._id)
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
        {user ?
        <>
        <Button variant="secondary" onClick={handleAddToCart}>Add To Shopping Cart</Button>
        &nbsp;
        &nbsp;
       <Link to={`/products/${id}`} ><Button variant="secondary">Info</Button></Link>
       </>
        :
        <Link to={`/products/${id}`} ><Button variant="secondary">Info</Button></Link>     
}
      </Card.Footer>
    </Card>
  )
}
