import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PayPal.css"



export default function PayPal() {
  return (
    <div className="payPal" >
      <PayPalScriptProvider >
        <PayPalButtons
          style={{
            shape: "pill",
            layout: "vertical",
          }}
          
        />
      </PayPalScriptProvider>
      
    </div>
  );
}

