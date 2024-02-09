import { Routes, Route } from 'react-router-dom';
import HomePage from "../src/pages/HomePage.jsx"
import NavBar from "./components/NavBar.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import AboutusPage from "./pages/AboutusPage/AboutusPage.jsx";
import ContactusPage from "./pages/ContacusPage/ContactusPage.jsx";
import { useState } from "react";
import { getUser } from './utilities/users-service.js'
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage.jsx";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage.jsx";



function App() {
  const [user, setUser] = useState(getUser())
  // console.log(user)

  return (
    <>
      <NavBar user={user} setUser={setUser} />
        <Routes>
            <Route path="/" element={ <HomePage />}/>
            <Route path="/products/:id" element={ <SingleProductPage user={user} setUser={setUser}/>}/>
            <Route path="/products" element={ <ProductsPage user={user} setUser={setUser}/> }/>
            <Route path="/aboutus" element={ <AboutusPage /> }/>
            <Route path="/contactus" element={ <ContactusPage /> }/>
            <Route path="/cart" element={ <ShoppingCartPage user={user} setUser={setUser} /> }/>
        </Routes>
    </>
  )
}

export default App;


 
