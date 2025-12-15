import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Loader } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder for Video */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1015/1920/1080" 
            alt="Hands stringing beads" 
            className="w-full h-full object-cover filter brightness-[0.6] grayscale-[20%]"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-wide leading-tight">
            Wear Your Intention.<br/>Design Your Ritual.
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
            Handcrafted gemstone bracelets designed for mindfulness, grounding, and personal expression.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/shop" className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 uppercase tracking-widest text-sm font-medium hover:bg-stone-100 transition-colors">
              Shop Collection
            </Link>
            <Link to="/builder" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white uppercase tracking-widest text-sm font-medium hover:bg-white/10 transition-colors">
              Build Your Own
            </Link>
          </div>
          
          <div className="pt-12 flex justify-center gap-8 text-xs uppercase tracking-widest opacity-80">
            <span>✓ Ethically Sourced</span>
            <span>✓ 30-Day Reflection</span>
            <span>✓ 5% Donated</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-stone-200 overflow-hidden">
               <img src="https://picsum.photos/id/24/800/1000" alt="Mindfulness" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-stone-100 p-8 flex items-center justify-center text-center shadow-lg hidden md:flex">
               <span className="font-serif italic text-2xl text-stone-800">"Not magic. <br/>Just focus."</span>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-stone-500">The Philosophy</h2>
            <h3 className="text-4xl font-serif text-stone-900">Anchors for the Mind</h3>
            <p className="text-stone-600 leading-relaxed text-lg font-light">
              We believe in the power of anchors—physical reminders of the promises you make to yourself. Our jewelry is not magic; it is a tool for focus, crafted with precision and care to bring you back to the present moment.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors">
              Read Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Creator Teaser */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="https://picsum.photos/id/338/1920/800" alt="Textures" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6 space-y-8">
          <h2 className="text-5xl font-serif">Your Story, Your Stone.</h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Select from premium beads ($11/ea) and optional incense diffusers to create a piece that is uniquely yours. Experience the art of intentional design.
          </p>
          <Link to="/builder" className="inline-block px-10 py-5 bg-accent hover:bg-accent-light text-white uppercase tracking-widest text-sm font-medium transition-colors shadow-lg shadow-orange-900/20">
            Start Designing
          </Link>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 px-6 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Heart className="mx-auto text-accent mb-4" size={32} />
          <h2 className="text-3xl font-serif text-stone-900">Craftsmanship with Conscience</h2>
          <p className="text-stone-600">
            5% of your purchase goes directly to temple restoration and artisan community aid. <br/>Transparent giving, always.
          </p>
          <Link to="/about" className="text-sm uppercase tracking-widest font-bold text-stone-900 hover:underline mt-4 inline-block">
            See Our Impact
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;