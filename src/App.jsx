import PayPal from "./PayPal/PayPal";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

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


 