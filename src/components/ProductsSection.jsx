import ProductCard from './ProductCard';
import { useTranslation } from 'react-i18next';

const ProductsSection = ({ products, onAddToCart }) => {
  const { t } = useTranslation();

  return (
    <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
        {t('products.title')}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;