import { Heart, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product, onAddToCart }) => {
  const { t } = useTranslation();
  
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white/90 rounded-full hover:bg-emerald-100 transition">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-sm text-emerald-600 font-medium mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{t('products.addToCart')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;