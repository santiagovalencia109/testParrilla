import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import CartSidebar from './components/CartSidebar';
import AIChefModal from './components/AIChefModal';
import { MenuItem, CartItem } from './types';
import { MENU_ITEMS } from './constants';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChefOpen, setIsChefOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[]);
  }, []);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = () => {
    alert("¡Gracias por tu pedido! La cocina comenzará a prepararlo de inmediato.");
    setCartItems([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        cartCount={totalItems} 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={scrollToMenu}
      />
      
      <main>
        <Hero onOrderNow={scrollToMenu} />
        <MenuGrid items={MENU_ITEMS} onAddToCart={addToCart} />
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Sabor & Fuego</h2>
          <p className="text-slate-400 mb-8">Parrilla, Pasión y Tecnología.</p>
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Sabor & Fuego Restaurante. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
        onAskChef={() => setIsChefOpen(true)}
      />

      <AIChefModal 
        isOpen={isChefOpen}
        onClose={() => setIsChefOpen(false)}
        cartItems={cartItems}
        menuItems={MENU_ITEMS}
      />

      {/* Floating Action Button for AI Chef on mobile/desktop if cart is closed */}
      {!isCartOpen && !isChefOpen && (
        <button
          onClick={() => setIsChefOpen(true)}
          className="fixed bottom-6 right-6 bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-2xl z-40 transition-transform hover:scale-110 flex items-center gap-2 group"
        >
          <span className="text-2xl">👨‍🍳</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">
            Preguntar al Chef
          </span>
        </button>
      )}
    </div>
  );
};

export default App;