import ProductCard from "../../components/ProductCard/ProductCard";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import "../HomePage.css"

export default function ProductsPage({user}) {
  const { products, getProducts} = useProducts();
  const [randomProducts, setRandomProducts] = useState([]);



  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setRandomProducts(getRandomProducts(products, 4));
    const intervalId = setInterval(() => {
      setRandomProducts(getRandomProducts(products, 4));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [products]);

  function getRandomProducts(products, count) {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  }


  return (
    <>
 
      
      <Container className="subContainer" >
        <div  className="singleProduct" style={{            
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",}}>
            {randomProducts.map((product) => (
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
