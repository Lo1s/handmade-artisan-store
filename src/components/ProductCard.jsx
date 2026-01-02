import { Heart, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product, onAddToCart }) => {
  const { t, i18n } = useTranslation();
  
  const formatPrice = () => {
    const currency = t('products.currency');
    if (i18n.language === 'cs') {
      return `${product.price} ${currency}`;
    } else {
      return `${currency}${product.price}`;
    }
  };
  
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
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
      
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm text-emerald-600 font-medium mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2l font-bold text-gray-900">{formatPrice()}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-emerald-600 text-white px-3 py-2 rounded-full hover:bg-emerald-700 transition flex items-center space-x-1 whitespace-nowrap text-sm"
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