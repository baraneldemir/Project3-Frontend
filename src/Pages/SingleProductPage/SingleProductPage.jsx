import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { currencyFormatter } from "../../utilities/currencyFormatter"


export default function SingleProductPage() {

    const {product, getSingleProduct } = useProducts()
    const { id } = useParams()
    const formattedPrice = currencyFormatter.format(product.price)

    
    useEffect(() => {
      getSingleProduct(id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundAttachment: "fixed",backgroundImage: `url("https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png")`, backgroundSize: 'cover', minHeight: '100vh'}}>
        <Container>
            {product && (
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <Card>
                          <div style={{height: "500px", overflow: "hidden"}}>
                            <Card.Img variant="top" src={product.image} alt={product.name} style={{objectFit: "contain", height: "100%"}} />
                          </div>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: {formattedPrice}</Card.Text>
                                <Card.Text>Stock Left: {product.stock}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                              <Button variant="primary">Add To Shopping Cart</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>        
      </div>
  );
}