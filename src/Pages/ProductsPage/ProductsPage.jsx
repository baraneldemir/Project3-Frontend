import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Stack } from "react-bootstrap";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { Form, Button} from "react-bootstrap";
import { useState } from "react";

export default function ProductsPage({user, setUser}) {

  const [search, setSearch] = useState("");
  const { products, getProducts, searchBar, result } = useProducts();

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    
  }
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    searchBar(search);
  };



  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <Form className="d-flex" onSubmit={handleSearchSubmit}>
        <Form.Control
          style={{ width: "5" }}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={handleSearchChange}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url("https://stsci-opo.org/STScI-01GA6KNV1S3TP2JBPCDT8G826T.png")`, backgroundSize: 'cover', minHeight: '100vh'}}>
      
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto" style={{color: "white"}}>Products</h1>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {result.length > 0 ? 
          
            result.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  user={user}
                />
              ))
            : products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  user={user}
                />
              ))}
        </div>
      </Container>
      </div>
    </>
  );
}