import { useState, createContext } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export const CartItemsContext = createContext(null);

export default function Layout() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    
    setCartItems((prevItems) => prevItems.some(cartItem => cartItem.id === item.id) ? prevItems : [...prevItems, item]);
  }

  function removeFromCart(item){
    setCartItems((prevItems) => {
        const newItems = prevItems.filter((prevItem) => prevItem.id !== item.id )
        return newItems
    });
  }

  

  return (
    <>
      
      <CartItemsContext.Provider value={{ cartItems, addToCart: addToCart, removeFromCart: removeFromCart }}>
      <Header />
      <Outlet />
      </CartItemsContext.Provider>
      
      <Footer />
    </>
  );
}
