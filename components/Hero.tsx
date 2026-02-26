import React from 'react';

interface HeroProps {
  onOrderNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderNow }) => {
  return (
    <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76690b6d015?q=80&w=2560&auto=format&fit=crop" 
          alt="Restaurant Ambiance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-600/20 border border-brand-500 text-brand-400 font-bold tracking-widest text-xs uppercase mb-2 backdrop-blur-sm">
          Gastronomía Premium
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
          Donde el Fuego <br/>
          <span className="text-brand-500">Crea Arte</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Experimenta una fusión culinaria única. Ingredientes seleccionados, cocina de autor y una atmósfera inolvidable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button 
            onClick={onOrderNow}
            className="px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-105 active:scale-95"
          >
            Ver Menú y Pedir
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 active:scale-95">
            Reservar Mesa
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;