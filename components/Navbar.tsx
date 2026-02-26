import React from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={onMenuClick}>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔥</span>
              <div>
                <h1 className="text-xl font-bold font-serif text-gray-900 tracking-tight">Sabor & Fuego</h1>
                <p className="text-xs text-brand-600 font-medium tracking-widest uppercase">Parrilla & Fusión</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={onMenuClick}
              className="hidden md:block text-gray-600 hover:text-brand-600 font-medium transition-colors"
            >
              Menú
            </button>
            <button 
              className="hidden md:block text-gray-600 hover:text-brand-600 font-medium transition-colors"
            >
              Reservas
            </button>
            
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-800 hover:text-brand-600 transition-transform active:scale-95 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-600 rounded-full shadow-md animate-in zoom-in duration-200">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;