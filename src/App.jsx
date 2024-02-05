import PayPal from "./PayPal/PayPal";
import { Routes, Route } from 'react-router-dom';
import HomePage from "../src/pages/HomePage.jsx"
import NavBar from "./components/NavBar.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import AboutusPage from "./pages/AboutusPage/AboutusPage.jsx";
import ContactusPage from "./pages/ContacusPage/ContactusPage.jsx";
import { useState } from "react";
import { getUser } from './utilities/users-service.js'




function App() {
  const [user, setUser] = useState(getUser())

  return (
    <>
      <NavBar user={user} setUser={setUser} />
        <Routes>
            <Route path="/" element={ <HomePage />}/>
            <Route path="/products" element={ <ProductsPage /> }/>
            <Route path="/aboutus" element={ <AboutusPage /> }/>
            <Route path="/contactus" element={ <ContactusPage /> }/>
        </Routes>
      <div>
        <PayPal/>    
      </div>
    </>
  )
}

export default App;


 