import React from 'react';
import { Check } from 'lucide-react';

const Subscribe: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <img 
          src="https://picsum.photos/id/447/1920/1080" 
          alt="Morning Ritual" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-stone-900/30"></div>
        <div className="relative z-10 text-center text-white space-y-6 px-6">
           <h1 className="text-5xl md:text-6xl font-serif">A Monthly Moment of Pause.</h1>
           <p className="text-lg max-w-xl mx-auto font-light opacity-90">
             Receive a curated ritual kit delivered to your door. Fresh incense, a new ritual bead, and a guide for reflection.
           </p>
           <button className="px-8 py-4 bg-white text-stone-900 uppercase tracking-widest font-bold text-sm hover:bg-stone-100 transition-colors">
             Subscribe - $45/mo
           </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto -mt-16 relative z-20 bg-white p-12 shadow-xl">
        <h2 className="text-center font-serif text-3xl mb-12">What's Inside</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
             <div className="flex gap-4">
               <div className="mt-1 bg-accent/10 p-1 rounded-full h-fit"><Check size={16} className="text-accent" /></div>
               <div>
                 <h3 className="font-bold text-stone-900">The Ritual Incense Bead</h3>
                 <p className="text-sm text-stone-600">A new, porous clay bead to add to your collection.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="mt-1 bg-accent/10 p-1 rounded-full h-fit"><Check size={16} className="text-accent" /></div>
               <div>
                 <h3 className="font-bold text-stone-900">Premium Incense Sticks</h3>
                 <p className="text-sm text-stone-600">Sustainably harvested aromas for your space.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="mt-1 bg-accent/10 p-1 rounded-full h-fit"><Check size={16} className="text-accent" /></div>
               <div>
                 <h3 className="font-bold text-stone-900">The Monthly Guide</h3>
                 <p className="text-sm text-stone-600">A printed card with prompts for reflection.</p>
               </div>
             </div>
           </div>
           <div className="bg-stone-100 aspect-square flex items-center justify-center">
             <img src="https://picsum.photos/id/364/500/500" alt="Box Contents" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto mt-24 px-6 text-center space-y-6">
        <h3 className="text-2xl font-serif">Consistency is Key</h3>
        <p className="text-stone-600 leading-relaxed">
          Mindfulness isn't a destination; it's a practice. We make it easier to remember to take time for yourself.
          Pause or cancel your subscription anytime via your portal.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;