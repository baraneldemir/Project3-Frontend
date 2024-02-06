import PayPal from "../../PayPal/PayPal";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { useParams } from "react-router-dom";

export default function SingleProductPage() {
    const {product, getSingleProduct} = useProducts()
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
      getSingleProduct(id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
    <div>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      )}
    </div>
    <div>
        <PayPal/>    
      </div>
    </>
  )
}
