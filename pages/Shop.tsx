import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Filter, SlidersHorizontal } from 'lucide-react';

const Shop: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProducts = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.intention === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-stone-100 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Anchors for Every Moment</h1>
        <p className="text-stone-600 max-w-xl mx-auto font-light">
          Curated designs intended to support your daily practice and personal style.
          Hand-finished by master artisans.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-stone-100">
             <SlidersHorizontal size={20} />
             <span className="uppercase tracking-widest text-sm font-bold">Filters</span>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase mb-4 text-stone-800">By Intention</h3>
            <ul className="space-y-3 text-stone-600 text-sm">
              {['all', 'calm', 'focus', 'strength', 'energy'].map(filter => (
                <li key={filter}>
                  <button 
                    onClick={() => setActiveFilter(filter)}
                    className={`capitalize hover:text-stone-900 transition-colors ${activeFilter === filter ? 'font-bold text-stone-900 underline decoration-accent decoration-2 underline-offset-4' : ''}`}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </div>
           
           {/* Mock filters for visual completeness */}
           <div className="opacity-50 pointer-events-none">
            <h3 className="text-sm font-bold uppercase mb-4 text-stone-800 mt-8">By Stone</h3>
            <ul className="space-y-3 text-stone-600 text-sm">
              <li>Onyx</li>
              <li>Lapis</li>
              <li>Jade</li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* SEO Text */}
          <div className="mt-24 pt-12 border-t border-stone-100 text-stone-500 text-sm leading-relaxed max-w-3xl">
            <h4 className="font-serif text-lg text-stone-800 mb-2">About Our Stones</h4>
            <p>
              Gemstones are natural minerals formed under immense pressure and heat over millions of years. Each variety possesses unique crystalline structures and colors resulting from trace elements like iron, copper, or manganese. While many cultures attribute symbolic meaning to these stones, their physical beauty and cool tactile presence serve as excellent grounding tools for mindfulness practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img 
          src={product.hoverImage} 
          alt={`${product.name} on wrist`} 
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        
        <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-white/90 backdrop-blur text-stone-900 py-3 uppercase text-xs font-bold tracking-widest hover:bg-stone-900 hover:text-white transition-colors">
            Quick Add
          </button>
        </div>
      </div>
      <h3 className="font-serif text-xl text-stone-900 group-hover:text-accent transition-colors">{product.name}</h3>
      <div className="flex justify-between items-center mt-1">
        <p className="text-sm text-stone-500 capitalize">{product.stone} • {product.intention}</p>
        <span className="text-stone-900 font-medium">${product.price}</span>
      </div>
    </div>
  );
};

export default Shop;