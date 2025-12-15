import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X, ShoppingBag, Search, User, ArrowRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50">
      {/* Top Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 text-center tracking-wider px-4">
        FREE US SHIPPING ON ORDERS OVER $200 | 5% OF EVERY ORDER SUPPORTS COMMUNITY AID
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 -ml-2 text-stone-600 hover:text-stone-900">
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-serif tracking-widest font-semibold z-10">
            AROZEN
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 text-sm uppercase tracking-wide font-medium text-stone-600">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`hover:text-stone-900 transition-colors ${location.pathname === link.path ? 'text-stone-900 border-b border-stone-900' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-stone-600 hover:text-stone-900">
              <Search size={20} />
            </button>
            <button className="hidden sm:block text-stone-600 hover:text-stone-900">
              <User size={20} />
            </button>
            <button onClick={toggleCart} className="text-stone-600 hover:text-stone-900 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-stone-50 p-6 lg:hidden flex flex-col animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-serif tracking-widest">MENU</span>
            <button onClick={toggleMenu}><X size={24} /></button>
          </div>
          <nav className="flex flex-col gap-6 text-xl font-serif">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-stone-200 pb-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Cart Drawer */}
      <div className={`fixed inset-y-0 right-0 z-[60] w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-6 border-b border-stone-100 pb-4">
            <h2 className="text-lg font-serif tracking-wider">YOUR RITUAL</h2>
            <button onClick={toggleCart} className="text-stone-500 hover:text-stone-900"><X size={24} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4 flex flex-col items-center justify-center text-stone-400 gap-4">
             <ShoppingBag size={48} strokeWidth={1} />
             <p className="font-light">Your intention is being prepared.</p>
             <p className="text-sm">Your cart is empty.</p>
          </div>

          <div className="border-t border-stone-100 pt-6 space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <p className="text-xs text-stone-500 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-stone-900 text-white py-4 uppercase tracking-widest text-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
              Checkout <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay for Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[55] bg-stone-900/20 backdrop-blur-sm" onClick={toggleCart}></div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-stone-100 font-serif text-xl tracking-widest">AROZEN</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Handcrafted jewelry for mindfulness. We believe in the power of anchors—physical reminders of the promises you make to yourself.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-stone-100 uppercase tracking-widest text-xs font-bold">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-white">All Collections</Link></li>
              <li><Link to="/builder" className="hover:text-white">Custom Builder</Link></li>
              <li><Link to="/subscribe" className="hover:text-white">Subscription</Link></li>
              <li><Link to="/gift-cards" className="hover:text-white">Gift Cards</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-stone-100 uppercase tracking-widest text-xs font-bold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shipping" className="hover:text-white">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/care" className="hover:text-white">Care Guide</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-stone-100 uppercase tracking-widest text-xs font-bold">Join the Ritual</h4>
            <p className="text-xs">Receive mindfulness tips and early access to new stones.</p>
            <div className="flex border-b border-stone-700 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent w-full outline-none text-stone-200 placeholder-stone-600 text-sm" />
              <button className="text-stone-200 hover:text-white text-xs uppercase">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 AROZEN. All rights reserved.</p>
          <p className="opacity-60 max-w-lg text-center md:text-right">
            AROZEN jewelry is designed for mindfulness and personal ritual. We make no claims regarding physical healing or supernatural outcomes. Please consult a professional for medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;