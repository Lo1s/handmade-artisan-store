import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{t('about.title')}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {t('about.paragraph1')}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t('about.paragraph2')}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;