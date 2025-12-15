import React, { useState } from 'react';
import { getElementalAnalysis } from '../services/geminiService';
import { ElementalAnalysisResult } from '../types';
import { Sparkles, Loader2, Info } from 'lucide-react';

const Analysis: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ElementalAnalysisResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const analysis = await getElementalAnalysis(date, time);
      setResult(analysis);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-200 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Sparkles className="mx-auto text-accent mb-6" size={32} />
          <h1 className="text-4xl md:text-5xl font-serif text-white">The Elements of You.</h1>
          <p className="text-stone-400 max-w-lg mx-auto text-lg font-light">
            Explore your personal elemental balance to find the stones that ground you best. Based on elemental philosophy for reflection, not prediction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Form */}
          <div className="bg-stone-800/50 p-8 rounded-sm border border-stone-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2 text-stone-400">Date of Birth</label>
                <input 
                  type="date" 
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 p-3 text-white focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2 text-stone-400">Time of Birth (Optional)</label>
                <input 
                  type="time" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 p-3 text-white focus:border-accent focus:outline-none"
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-accent hover:bg-accent-light text-white py-4 uppercase tracking-widest font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : 'Get Your Reading'}
              </button>
            </form>
            <p className="mt-4 text-xs text-stone-500 flex gap-2">
              <Info size={14} className="shrink-0" />
              This reading is a tool for self-reflection, not a prediction of destiny.
            </p>
          </div>

          {/* Results Area */}
          <div className="min-h-[300px] flex flex-col justify-center">
            {isLoading ? (
               <div className="text-center text-stone-500 animate-pulse">
                 <p className="font-serif text-xl">Consulting the elements...</p>
               </div>
            ) : result ? (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-1">Your Dominant Element</h3>
                  <p className="text-4xl font-serif text-white">{result.element}</p>
                </div>
                <div>
                   <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-1">Recommended Anchor</h3>
                   <p className="text-2xl font-serif text-accent">{result.stone}</p>
                </div>
                <div className="bg-stone-800 p-6 border-l-2 border-accent">
                  <p className="font-serif text-lg italic leading-relaxed text-stone-300">
                    "{result.reading}"
                  </p>
                </div>
                <button className="text-sm uppercase font-bold tracking-widest border-b border-stone-500 pb-1 hover:border-white hover:text-white transition-colors">
                  Shop {result.stone} Collection
                </button>
              </div>
            ) : (
              <div className="text-center text-stone-600">
                <p className="mb-4">Enter your details to reveal your elemental alignment.</p>
                <div className="grid grid-cols-2 gap-4 opacity-30">
                  <div className="p-4 border border-stone-700">Fire</div>
                  <div className="p-4 border border-stone-700">Water</div>
                  <div className="p-4 border border-stone-700">Earth</div>
                  <div className="p-4 border border-stone-700">Air</div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Ritual Guide */}
        <div className="mt-24 pt-16 border-t border-stone-800">
          <h2 className="text-center text-2xl font-serif mb-12">How to Use Your AROZEN Bracelet</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-800 mx-auto flex items-center justify-center text-accent text-2xl font-serif">1</div>
                <h3 className="font-bold uppercase text-sm">Receive</h3>
                <p className="text-stone-400 text-sm">Unbox in a quiet space free from distractions.</p>
             </div>
             <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-800 mx-auto flex items-center justify-center text-accent text-2xl font-serif">2</div>
                <h3 className="font-bold uppercase text-sm">Infuse</h3>
                <p className="text-stone-400 text-sm">Add a drop of essential oil to the porous ritual bead (optional).</p>
             </div>
             <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-800 mx-auto flex items-center justify-center text-accent text-2xl font-serif">3</div>
                <h3 className="font-bold uppercase text-sm">Wear</h3>
                <p className="text-stone-400 text-sm">Use it as a touchstone for your intention throughout the day.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;