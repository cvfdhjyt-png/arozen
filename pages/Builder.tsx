import React, { useState } from 'react';
import { BEADS } from '../constants';
import { Bead } from '../types';
import { RotateCcw, Save, ShoppingBag, Info } from 'lucide-react';

const Builder: React.FC = () => {
  // Default pattern: 18 beads is approx standard size
  const [design, setDesign] = useState<Bead[]>(Array(18).fill(null));
  const [selectedBead, setSelectedBead] = useState<Bead>(BEADS[0]);
  const [intentionName, setIntentionName] = useState('');

  const handleBeadClick = (index: number) => {
    const newDesign = [...design];
    newDesign[index] = selectedBead;
    setDesign(newDesign);
  };

  const totalPrice = design.reduce((sum, bead) => sum + (bead ? bead.price : 0), 0) + 20; // Base assembly fee

  const resetDesign = () => setDesign(Array(18).fill(null));

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)] overflow-hidden bg-stone-50">
      
      {/* Left: Interactive Canvas */}
      <div className="flex-1 relative flex items-center justify-center bg-stone-200/50">
        <div className="text-center absolute top-8 left-0 w-full z-10 px-4">
          <h2 className="text-2xl font-serif text-stone-800">Design Your Ritual</h2>
          <p className="text-stone-500 text-sm mt-1">Click a position on the string to place your selected bead.</p>
        </div>

        {/* The Bracelet Visualization */}
        <div className="relative w-80 h-80 rounded-full border-2 border-dashed border-stone-300 flex items-center justify-center animate-spin-slow-static">
          {/* String */}
          <div className="absolute inset-0 rounded-full border border-stone-400 opacity-20"></div>
          
          {/* Beads */}
          {design.map((bead, index) => {
            const angle = (index / design.length) * 2 * Math.PI;
            const radius = 160; // Half of w-80
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <button
                key={index}
                onClick={() => handleBeadClick(index)}
                className="absolute w-10 h-10 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform flex items-center justify-center"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  backgroundColor: bead ? bead.color : '#e7e5e4', // stone-200 default
                  border: selectedBead && !bead ? '2px dashed #a8a29e' : 'none'
                }}
              >
                {!bead && <span className="text-stone-400 text-xs">+</span>}
              </button>
            );
          })}
        </div>
        
        {/* Controls */}
        <div className="absolute bottom-8 flex gap-4">
           <button onClick={resetDesign} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm hover:bg-stone-50">
             <RotateCcw size={16} /> Reset
           </button>
        </div>
      </div>

      {/* Right: Configurator Panel */}
      <div className="w-full lg:w-[450px] bg-white border-l border-stone-200 flex flex-col h-full overflow-y-auto">
        
        {/* Step 1: Bead Selection */}
        <div className="p-8 border-b border-stone-100">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-stone-400">1. Choose Your Stone</h3>
          <div className="grid grid-cols-4 gap-4">
            {BEADS.map(bead => (
              <button
                key={bead.id}
                onClick={() => setSelectedBead(bead)}
                className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${selectedBead.id === bead.id ? 'bg-stone-100 ring-1 ring-stone-900' : 'hover:bg-stone-50'}`}
              >
                <div 
                  className="w-10 h-10 rounded-full shadow-inner" 
                  style={{ backgroundColor: bead.color }}
                ></div>
                <div className="text-center">
                  <span className="block text-xs font-medium truncate w-full">{bead.name}</span>
                  <span className="block text-[10px] text-stone-500">${bead.price}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-4 p-4 bg-stone-50 rounded text-xs text-stone-600 flex gap-2">
            <Info size={16} className="shrink-0 text-accent" />
            <p>The <strong>Ritual Incense Bead</strong> is made of porous clay, designed to hold essential oils and diffuse scent throughout your day.</p>
          </div>
        </div>

        {/* Step 2: Intention */}
        <div className="p-8 border-b border-stone-100">
           <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-stone-400">2. Set Your Intention</h3>
           <label className="block text-sm text-stone-600 mb-2">Name this design</label>
           <input 
             type="text" 
             value={intentionName}
             onChange={(e) => setIntentionName(e.target.value)}
             placeholder="e.g. My Morning Calm"
             className="w-full border-b border-stone-300 py-2 text-lg font-serif placeholder-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
           />
           <p className="text-xs text-stone-400 mt-2 italic">This will be printed on your custom box insert.</p>
        </div>

        {/* Summary Footer */}
        <div className="mt-auto p-8 bg-stone-50">
          <div className="flex justify-between items-end mb-6">
            <div>
               <p className="text-xs text-stone-500 uppercase">Total Estimate</p>
               <p className="text-3xl font-serif text-stone-900">${totalPrice}</p>
            </div>
            <div className="text-right text-xs text-stone-400">
               {design.filter(b => b !== null).length} / {design.length} Beads Selected
            </div>
          </div>
          
          <button className="w-full bg-stone-900 text-white py-4 uppercase tracking-widest font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
            <ShoppingBag size={18} /> Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Builder;