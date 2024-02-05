import PayPal from "./PayPal/PayPal";
import HomePage from "../src/Pages/HomePage.jsx"
import NavBar from "./components/NavBar.jsx";
function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <div>
      <PayPal/>    
      </div>
    </>
  )
    
}

export default App;


 