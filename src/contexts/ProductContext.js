import { useContext, createContext, useState } from "react"
import axios from "axios"

const ProductContext = createContext()

export function useProducts() {
    return useContext(ProductContext)
}

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [cart, setCart] = useState()
    const [isUpdated, setIsUpdated] = useState()
    const [result, setResult] = useState([])


    function searchBar(search) {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/search?query=${search}`)
        .then(response => {
            setResult(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.error("error searching products", error)
        })
    }

    function getShoppingCartProducts(userId) {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart?userId=${userId}`)
        .then(response => {
            console.log(response.data)
            setCart(response.data)
        })
        .catch(error => console.error("Error fetching cart products", error))
    }
    
    function addToCart(productId, quantity, userId) {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/cart/add`, {
            productId: productId,
            quantity: quantity,
            userId: userId
        })
        .then(response => {
            console.log("Product add to cart", response.data)
            setCart(response.data)
             
        })
        .catch(error => console.error("Error adding product to cart", error))
    }


    function getProducts() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => console.error("Error fetching products", error))
    }

    function getSingleProduct(productId) {
        console.log(productId)
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${productId}`)
        .then(response => { 
            setProduct(response.data)
        })
        .catch(error => console.error("Error fetching single product", error))
    }

    function updateCart(productId, quantity, userId) {
        setCart(false)
        console.log(productId, userId)
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/cart/update/${productId}?userId=${userId}`, {quantity})
        .then(response => {
            console.log('Cart Updated', response.data)
            setCart(response.data)
            setIsUpdated(true)
        })
        .catch(error => {
            console.error('Error updating cart:', error)
        })
    }
    function deleteProduct(productId, userId) {
        console.log(productId)
        axios
          .delete(`${process.env.REACT_APP_BACKEND_URL}/cart/remove/${productId}?userId=${userId}`)
          .then(() => {
            // setProducts(products.filter((product) => product._id !== productId));
            setCart()
            setIsUpdated(true)
            // getProducts();
            
          })
          .catch((error) => console.error("Error deleting product:", error));
      }

    return (
        <ProductContext.Provider value={{
            product,
            products,
            cart,
            getProducts,
            getSingleProduct,
            getShoppingCartProducts,
            addToCart,
            searchBar,
            result,
            updateCart,
            deleteProduct,
            isUpdated,
            setIsUpdated

        }}>
            {children}
        </ProductContext.Provider>
    )


}