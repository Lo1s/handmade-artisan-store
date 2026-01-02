import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CartSidebar from './components/CartSidebar';
import products from './data/products';
import { useCart } from './hooks/useCart';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, addToCart, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <Navigation 
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <HeroSection />
      
      <ProductsSection 
        products={products}
        onAddToCart={addToCart}
      />
      
      <AboutSection />
      
      <ContactSection />
      
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;