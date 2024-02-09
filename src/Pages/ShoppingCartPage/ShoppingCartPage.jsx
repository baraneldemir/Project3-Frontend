import { Container, Stack, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import ShoppingCartProductModal from "../../components/ShoppingCartProductModal/ShoppingCartProductModal";
import TotalPaymentModal from "../../components/TotalPaymentModal/TotalPaymentModal";


export default function ShoppingCartPage({ user }) {

  const [shoppingCart, setShoppingCart] = useState() //ADDED


  const {cart, getShoppingCartProducts} = useProducts()
  const {isUpdated, setIsUpdated} = useProducts()


    useEffect(() => {
      getShoppingCartProducts(user._id)
      setShoppingCart(true)
      setIsUpdated(false)
      console.log(shoppingCart)
      
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isUpdated])

      let totalPrice = 0;
      let totalQuantity = 0;
      cart?.products?.forEach((product) => {
        totalPrice += product.productId.price * product.quantity;
        totalQuantity += product.quantity;
      }); 

      return (
        <div
          style={{
            backgroundAttachment: "fixed",
            backgroundImage: `url("https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/09/Cosmic_Shear_1200_Social.jpg")`,
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <Container>
            <Stack direction="vertical" gap="2" className="mb-4">
              <h1 className="me-auto pt-3" style={{ color: "white" }}>
                {user.name}'s Shopping Cart
              </h1>
            </Stack>
            <Row>
              <Col xs={12} md={8}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  {cart?.products?.map((product, index) => (
                    <div key={product.productId._id} style={{ marginBottom: index === cart.products.length - 1 ? '2rem' : 0 }}>
                    <ShoppingCartProductModal
                      key={product.productId._id}
                      name={product.productId.name}
                      image={product.productId.image}
                      price={product.productId.price}
                      stock={product.productId.stock}
                      productId={product.productId._id}
                      quantity={product.quantity}
                      userId={cart.userId}
                    />
                    </div>
                  ))}
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div
                  style={{
                    position: "sticky",
                    top: "8.5%",
                    right: 0,
                    padding: "20px",
                    background: "white",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    zIndex: 999,
                    overflowY: "auto",
                    height: "calc(100vh - 80px)", // Adjust the height
                  }}
                >
                  <TotalPaymentModal
                    totalPrice={totalPrice}
                    totalQuantity={totalQuantity}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }