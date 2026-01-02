import { useTranslation } from 'react-i18next';
import { Instagram } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  const email = 'jinkova.darja@gmail.com';
  const instagramHandle = 'nuna_art_by_darja';

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{t('contact.title')}</h2>
        <p className="text-lg text-gray-700 mb-8">
          {t('contact.subtitle')}
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">{t('contact.email')}:</span>{' '}
            <a 
              href={`mailto:${email}`}
              className="text-emerald-600 hover:text-emerald-700 underline transition"
            >
              {email}
            </a>
          </p>
          <p className="text-gray-700 flex items-center justify-center space-x-2">
            <span className="font-semibold">Instagram:</span>
            <a 
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 underline transition flex items-center space-x-1"
            >
              <Instagram className="w-4 h-4" />
              <span>@{instagramHandle}</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;