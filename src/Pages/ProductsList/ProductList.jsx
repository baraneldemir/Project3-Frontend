import ProductCard from "../../components/ProductCard/ProductCard";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import "../HomePage.css"

export default function ProductsPage({user}) {
  const { products, getProducts, result} = useProducts();



  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
 
      
      <Container className="subContainer" >
        <div  className="singleProduct">
          { result ? 
            result.slice(0, 4).map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  user={user}
                />
              ))
            : products.slice(12, 18).map((product) => (
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
     
    </>
  );
}
