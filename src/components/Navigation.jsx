import { ShoppingCart, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '/images/logo.jpg';

const Navigation = ({ cartCount, onCartClick, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'cs' ? 'en' : 'cs';
    i18n.changeLanguage(newLang);
  };
  
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <img src={logo} alt="Nuna Arte" className="h-24 object-contain" />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#shop" className="text-gray-700 hover:text-emerald-700 transition">{t('nav.shop')}</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-700 transition">{t('nav.about')}</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition">{t('nav.contact')}</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-1 text-sm font-semibold text-gray-700 hover:text-emerald-700 transition"
            >
              {i18n.language === 'cs' ? (
                <>
                  <svg className="w-5 h-4" viewBox="0 0 900 600">
                    <rect width="900" height="300" fill="white"/>
                    <rect y="300" width="900" height="300" fill="#D7141A"/>
                    <polygon points="0,0 300,300 0,600" fill="#11457E"/>
                  </svg>
                  <span>CZ</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-4" viewBox="0 0 900 600">
                    <rect width="900" height="600" fill="#012169"/>
                    <path d="M 0 0 L 900 600 M 900 0 L 0 600" stroke="white" strokeWidth="120"/>
                    <path d="M 0 0 L 900 600 M 900 0 L 0 600" stroke="#C8102E" strokeWidth="60"/>
                    <rect y="250" width="900" height="100" fill="white"/>
                    <rect y="280" width="900" height="40" fill="#C8102E"/>
                    <rect x="350" width="200" height="600" fill="white"/>
                    <rect x="370" width="160" height="600" fill="#C8102E"/>
                  </svg>
                  <span>EN</span>
                </>
              )}
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-emerald-100 rounded-full transition"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
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
            <a href="#shop" className="block text-gray-700 hover:text-emerald-700">{t('nav.shop')}</a>
            <a href="#about" className="block text-gray-700 hover:text-emerald-700">{t('nav.about')}</a>
            <a href="#contact" className="block text-gray-700 hover:text-emerald-700">{t('nav.contact')}</a>
            <button
              onClick={toggleLanguage}
              className="w-full text-left px-0 py-2 text-gray-700 hover:text-emerald-700 font-semibold"
            >
              {i18n.language === 'cs' ? '🇬🇧 English' : '🇨🇿 Čeština'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;