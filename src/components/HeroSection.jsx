const HeroSection = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-emerald-700 to-emerald-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-center w-full">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Handcrafted with Love
          </h2>
          <p className="text-xl text-white/95 mb-8 drop-shadow">
            Unique candles, soaps, epoxy art & knitted treasures
          </p>
          <a 
            href="#shop"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition shadow-lg"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;