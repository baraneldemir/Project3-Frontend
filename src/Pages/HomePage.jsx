import Slide from "../components/Slide/Slide"
import "./HomePage.css"
import ProductsList from "../pages/ProductsList/ProductList"
import "./HomePage.css"
import HomePageAnimation from "../components/Animation/HomePageAnimation"

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="slide-container" >
        <Slide />
      </div>
      <div className="product-container" style={{ position: "relative" }}>
        <ProductsList />

        <div style={{
          transform: "scale(0.3)",
          position: "absolute",
          bottom: "15%", 
          right: "8%" 
        }}>
          <HomePageAnimation/>
        </div> 
        <div style={{
          transform: "scale(0.3)",
          position: "absolute",
          bottom: "20%", 
          
        }}>
          <HomePageAnimation/>
        </div>
        <div style={{
          transform: "scale(0.3)",
          position: "absolute",
          bottom: "15%", 
          left: "34%"
        }}>
          <HomePageAnimation/>
        </div>       
      </div>
    </div>
  )
}
