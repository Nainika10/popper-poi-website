
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl group bg-gray-900">
             {/* This image mimics the vibe of the stall photo provided by the user */}
             <img 
               src="https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=2067&auto=format&fit=crop" 
               alt="Popper Poi Craftsmanship" 
               className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             
             {/* Badge inspired by the stall photo's teal lights */}
             <div className="absolute top-8 right-8 bg-teal-400 px-4 py-2 rounded shadow-xl transform rotate-3 flex flex-col items-center border border-white/20">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">Original</span>
                <span className="text-xl font-bebas text-black leading-none">POT SHAWARMA</span>
             </div>

             <div className="absolute bottom-8 left-8 bg-amber-400 p-6 rounded-2xl shadow-xl max-w-[220px]">
                <span className="block text-4xl font-bebas text-black leading-none mb-1">STREET STYLE</span>
                <span className="text-[10px] font-bold text-black uppercase tracking-widest leading-tight block">Authentic Vijayawada Stall</span>
             </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <span className="text-red-600 font-bold uppercase tracking-[0.5em] text-xs">Since 2024</span>
            <h2 className="text-6xl font-bebas text-white tracking-widest leading-none">The <span className="text-amber-400">Popper Poi</span><br/>Story</h2>
            <div className="w-20 h-1 bg-teal-400"></div>
          </div>
          
          <p className="text-gray-400 leading-relaxed text-lg font-light">
            Born from the vibrant street food culture of <strong className="text-white">Vijayawada</strong>, POPPER POI is the home of the authentic <strong className="text-teal-400 italic">Pot Shawarma</strong>. Our stall on Polyclinic Road has become a local landmark for foodies seeking that unique, smoky pot-prepared flavor paired with our signature spicy burgers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
             <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-600/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Street Fresh</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">Freshly prepped every day at our Vijayawada stall.</p>
                </div>
             </div>
             <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-teal-400/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Pot Roasted</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">Our secret pot-roasting method locks in juices and smokiness.</p>
                </div>
             </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800 flex items-center space-x-6">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
             <div>
                <p className="text-white font-bold text-sm">Join the 10,000+ local fans</p>
                <div className="flex text-amber-400 text-xs">
                   <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Visual background decor */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
         <h2 className="text-[300px] font-bebas text-white leading-none select-none">POI</h2>
      </div>
    </section>
  );
};

export default About;
