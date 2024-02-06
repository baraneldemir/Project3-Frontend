import { useContext, createContext, useState } from "react"
import axios from "axios"

const ProductContext = createContext()

export function useProducts() {
    return useContext(ProductContext)
}

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])



    function getShoppingCartProducts(user) {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart/${user._id}`)
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => console.error("Error fetching cart products", error))
    }


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
            getProducts,
            getShoppingCartProducts
        }}>
            {children}
        </ProductContext.Provider>
    )


}
