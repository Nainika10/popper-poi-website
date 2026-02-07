
import React from 'react';

interface HeroProps {
  onOrderNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderNow }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with the actual Stall Vibe from the provided photo */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black">
          <img 
            src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=2071&auto=format&fit=crop" 
            alt="Popper Poi Stall"
            className="w-full h-full object-cover brightness-[0.2] scale-105"
          />
        </div>
        {/* Night vibe overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        {/* Subtle light leak matching the photo's sign colors */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(20,184,166,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_30%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-2xl">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.4em]">
                OPEN NOW • VIJAYAWADA
            </span>
        </div>
        
        <div className="relative inline-block mb-6">
           <h1 className="text-[12vw] md:text-9xl font-bebas text-white tracking-tight leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
               POPPER <span className="text-amber-400">POI</span>
           </h1>
           {/* Teal "Pot Shawarma" tag matching the photo's neon sign */}
           <div className="absolute -bottom-2 -right-2 md:-right-8 bg-teal-400 text-black px-4 py-1 rounded-sm rotate-[-4deg] font-bebas text-xl md:text-3xl tracking-widest shadow-[0_0_20px_rgba(20,184,166,0.6)]">
              POT SHAWARMA
           </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto tracking-wide">
            Experience the original taste of our iconic 
            <span className="text-teal-400 font-medium"> Pot-Prepared Shawarma </span> 
            and spicy street-style burgers.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onOrderNow}
            className="group relative bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center overflow-hidden"
          >
            <span className="relative z-10">Start Your Order</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          <a 
            href="#menu"
            className="group px-12 py-5 rounded-full text-lg font-bold border-2 border-white/10 hover:border-amber-400/50 hover:bg-white/5 transition-all backdrop-blur-sm text-gray-300 hover:text-amber-400"
          >
            Browse Menu
          </a>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
           <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
