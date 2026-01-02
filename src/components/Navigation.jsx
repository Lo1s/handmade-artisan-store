import { ShoppingCart, Menu, X } from 'lucide-react';
import logo from '/images/logo.jpg';

const Navigation = ({ cartCount, onCartClick, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <img src={logo} alt="Artisan Haven" className="h-24 object-contain" />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#shop" className="text-gray-700 hover:text-rose-900 transition">Shop</a>
            <a href="#about" className="text-gray-700 hover:text-rose-900 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-900 transition">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-rose-100 rounded-full transition"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <a href="#shop" className="block text-gray-700 hover:text-rose-900">Shop</a>
            <a href="#about" className="block text-gray-700 hover:text-rose-900">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-rose-900">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;