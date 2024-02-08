import ProductCard from "../../components/ProductCard/ProductCard";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import "../HomePage.css"

export default function ProductsPage({user}) {
  const { products, getProducts} = useProducts();
  const [randomProducts, setRandomProducts] = useState([]);
  const [productCount, setProductCount] = useState(calculateProductCount());



  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setRandomProducts(getRandomProducts(products, productCount));
    const intervalId = setInterval(() => {
      setRandomProducts(getRandomProducts(products, productCount));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [products, productCount]);

  function getRandomProducts(products, count) {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  }

  function calculateProductCount() {
    if (window.innerWidth < 770) {
      return 1;
    } else if (window.innerWidth < 990) {
      return 2; 
    } else if (window.innerWidth < 1400) {
      return 3; 
    } else { return 4 }
  }

  useEffect(() => {
    function handleResize() {
      const count = calculateProductCount()
      setProductCount(count)
      setRandomProducts(getRandomProducts(products, count));
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [products]);


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
