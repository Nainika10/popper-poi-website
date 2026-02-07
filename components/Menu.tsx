
import React, { useState, useMemo } from 'react';
import { menuItems } from '../data';
import { MenuItem, Category } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: string; value: Category }[] = [
    { label: 'All', value: 'all' },
    { label: 'Burgers', value: 'burgers' },
    { label: 'Sandwich', value: 'sandwich' },
    { label: 'Starters', value: 'starters' },
    { label: 'Shawarma', value: 'shawarma' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Combos', value: 'combos' },
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bebas text-white mb-4 tracking-wider">Our Signature Menu</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto font-light">
            Indulge in our carefully curated selection of fast-food favorites, made with premium ingredients and our secret spice blends.
          </p>
        </div>

        {/* Search & Filters Container */}
        <div className="mb-12 space-y-8">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative group">
             <input 
               type="text" 
               placeholder="Search for your favorites..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-gray-800 border-2 border-gray-700 text-white rounded-2xl px-12 py-4 focus:outline-none focus:border-red-600 transition-all placeholder:text-gray-500 shadow-xl"
             />
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
             </svg>
             {searchQuery && (
               <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                 </svg>
               </button>
             )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.value 
                  ? 'bg-amber-400 text-black scale-105 shadow-lg shadow-amber-400/20' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-transparent hover:border-gray-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-red-600/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-900/10 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-4 py-2 rounded-2xl text-sm shadow-xl border border-white/10">
                    ₹{item.price}/-
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{item.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                    {item.description}
                  </p>
                  <button 
                    onClick={() => onAddToCart(item)}
                    className="w-full py-4 bg-gray-700 hover:bg-red-600 text-white font-bold rounded-2xl transition-all transform active:scale-95 flex items-center justify-center space-x-2 group/btn shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-800/30 rounded-3xl border border-dashed border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
              className="mt-6 text-red-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
