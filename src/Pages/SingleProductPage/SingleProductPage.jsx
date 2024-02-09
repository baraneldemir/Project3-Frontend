import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { currencyFormatter } from "../../utilities/currencyFormatter"


export default function SingleProductPage({user, setUser}) {
    const {product, getSingleProduct, addToCart, updateProductStock, isUpdated, setIsUpdated} = useProducts()
    const { id } = useParams()
    const formattedPrice = currencyFormatter.format(product.price)
    const [productStock, setProductStock] = useState(product.stock)

    const handleAddToCart = () => {
      if (productStock > 0) {
        addToCart(id, 1, user._id)
        const updatedStock = productStock - 1
        updateProductStock(product._id, updatedStock, setProductStock)
        setProductStock(updatedStock)
      } else {
        alert('No More Stock')
      }
      
    }

    useEffect(() => {
      getSingleProduct(id)
      setIsUpdated(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdated])

    useEffect(() => {
      if (product) {
        setProductStock(product.stock);
        setIsUpdated(false)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product]);

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundAttachment: "fixed",backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/background/20230722/pngtree-the-vast-expanse-of-the-cosmos-a-3d-rendering-of-celestial-image_3851057.jpg")`, backgroundSize: 'cover', minHeight: '100vh'}}>
        <Container>
            {product && (
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <Card>
                          <div style={{height: "500px", overflow: "hidden"}}>
                            <Card.Img variant="top" src={product.image} alt={product.name} style={{ objectFit: "contain", height: "100%", background: 'url(https://wallpapers.com/images/featured/cosmic-background-tr6ptidf81on0l2b.webp)'}} />
                          </div>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: {formattedPrice}</Card.Text>
                                <Card.Text>Stock Left: {product.stock}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            {user ? 
                             productStock > 0 ? <Button variant="primary" onClick={handleAddToCart}>Add To Shopping Cart</Button> : <Alert variant="danger">Out of Stock</Alert>
                              :
                              <></>
                            }
                            &nbsp;
                            <Link to={'/products'} ><Button variant="secondary" >Back to Products</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>        
      </div>
  );
}