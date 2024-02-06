import { Container, Stack } from "react-bootstrap";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import ShoppingCartProductModal from "../../components/ShoppingCartProductModal/ShoppingCartProductModal";

export default function ShoppingCartPage({ user }) {

    const {products, getShoppingCartProducts} = useProducts()

    useEffect(() => {
        getShoppingCartProducts(user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

  return (
    <Container className='my-4'>
      <Stack direction="vertical" gap="2" className="mb-4">
      <h1 className='me-auto'>Shopping Cart of {user.name}</h1>
      </Stack>
      <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
              alignItems: "flex-start"
              }}
      >{products.map( product => {
        return (
          <ShoppingCartProductModal
          key={product._id}
          name={product.name}
          image={product.image}
          price={product.price}
          />
        )
      })}</div>

    </Container>
  )
}
