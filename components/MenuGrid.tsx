import React, { useState } from 'react';
import { MenuItem, Category } from '../types';

interface MenuGridProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ items, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos');

  const categories = ['Todos', ...Object.values(Category)];

  const filteredItems = activeCategory === 'Todos' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div id="menu" className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Nuestra Carta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ingredientes frescos, recetas tradicionales y un toque de fuego. Descubre los sabores que nos hacen únicos.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-24 z-30 bg-gray-50/95 p-4 rounded-xl backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category | 'Todos')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.popular && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ★ Popular
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-brand-700 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-brand-600 font-serif">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">
                  {item.description}
                </p>

                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-brand-600 active:bg-brand-700 transition-colors duration-300 flex items-center justify-center gap-2 group-active:scale-[0.98]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuGrid;