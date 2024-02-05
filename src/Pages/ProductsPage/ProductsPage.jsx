import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Stack } from "react-bootstrap";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";

export default function ProductsPage() {

  const {products, getProducts} = useProducts()

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className='my-4'>
      <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className='me-auto'>Products</h1>
      </Stack>
      <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
              alignItems: "flex-start"
              }}
      >{products.map( product => {
        return (
          <ProductCard 
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
