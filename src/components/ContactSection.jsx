const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-8">
          Have questions or custom order requests? We'd love to hear from you!
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> hello@artisanhaven.com
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Instagram:</span> @artisanhaven
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;