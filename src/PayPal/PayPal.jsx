import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PayPal.css"



export default function PayPal() {

  // const initialOptions = {
  //   "client-id": "test",
  //   "enable-funding": "",
  //   "disable-funding": "paylater,venmo,card",
  //   "data-sdk-integration-source": "integrationbuilder_sc",
  // };
  

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