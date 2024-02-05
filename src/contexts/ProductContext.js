import { useContext, createContext, useState } from "react"
import axios from "axios"

const ProductContext = createContext()

export function useProducts() {
    return useContext(ProductContext)
}

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])


    function getProducts() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => console.error("Error fetching products", error))
    }

    return (
        <ProductContext.Provider value={{
            products,
            getProducts
        }}>
            {children}
        </ProductContext.Provider>
    )


}
