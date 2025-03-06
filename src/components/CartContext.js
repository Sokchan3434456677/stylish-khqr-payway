

import React, { createContext, useState, useContext } from 'react';

// Create the cart context
const CartContext = createContext();

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State to store cart items

  // Add product to cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.title === product.title);
    
    // If product exists, increase its quantity, otherwise add it to the cart
    if (existingProduct) {
      setCart(cart.map(item => 
        item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]); // Add new product with quantity 1
    }
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.title !== product.title)); // Remove product by title
  };

  // Get the total number of items in the cart (including quantities)
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate the total price of all items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
