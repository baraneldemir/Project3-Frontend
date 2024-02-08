import { Container, Stack } from "react-bootstrap";
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
        <div style={{backgroundImage: `url("https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/09/Cosmic_Shear_1200_Social.jpg")`, backgroundAttachment: 'fixed', backgroundSize: 'cover', minHeight: '100vh'}}>
          <Container>
            <Stack direction="vertical" gap="2" className="mb-4">
              <h1 className='me-auto pt-3' style={{color: 'white'}}>Shopping Cart of {user.name}</h1>
            </Stack>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
              alignItems: "flex-start"
            }}>
              {cart?.products?.map(product => (
                <ShoppingCartProductModal
                  key={product.productId._id}
                  name={product.productId.name}
                  image={product.productId.image}
                  price={product.productId.price}
                  stock={product.productId.stock}
                  productId={product.productId._id}
                  quantity={product.quantity}
                  userId = {cart.userId}
                />
              ))}
            </div>
            &nbsp;
            &nbsp;
         <TotalPaymentModal
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
          
          />
            
          </Container>
          
        </div>
      )
      
}