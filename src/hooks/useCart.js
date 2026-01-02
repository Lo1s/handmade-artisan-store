import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => 
      item.id === id ? {...item, quantity: Math.max(0, item.quantity + delta)} : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartCount
  };
};