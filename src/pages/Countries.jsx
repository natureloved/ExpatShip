import React from 'react';
import { Globe, MapPin, Search, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Countries() {
  const regions = [
     { 
       name: "North America", 
       hubs: "Chicago, Toronto, Mexico City",
       major: ["United States", "Canada", "Mexico", "Panama", "Costa Rica", "Dominican Republic"] 
     },
     { 
       name: "EU & Schengen", 
       hubs: "Frankfurt, Amsterdam, Paris",
       major: ["Germany", "France", "Netherlands", "Italy", "Spain", "Poland", "Sweden", "Belgium", "Ireland"] 
     },
     { 
       name: "Asia Pacific", 
       hubs: "Singapore, Tokyo, Shanghai",
       major: ["China", "Japan", "South Korea", "Australia", "Singapore", "India", "Vietnam", "Malaysia"] 
     },
     { 
       name: "MENA & GCC", 
       hubs: "Dubai, Doha, Riyadh",
       major: ["UAE", "Saudi Arabia", "Israel", "Qatar", "Egypt", "Jordan", "Morocco"] 
     }
  ];

  return (
    <div className="flex flex-col flex-1 bg-slate-50">
       <SEO 
          title="Global Shipping Corridors & Network" 
          description="ExpatShip operates high-capacity logistics corridors across 220+ territories, including North America, EU, Asia Pacific, and MENA."
       />

       <div className="bg-navy-900 py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
             <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Global Corridors</h1>
             <p className="text-xl text-navy-300 max-w-3xl mx-auto font-light leading-relaxed">
                Strategic logistics mapping across 220+ territories. We don't just ship to countries; we integrate with their local infrastructure.
             </p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-20 relative z-20 pb-24">
          <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-200 mb-16 flex flex-col md:flex-row gap-4">
             <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Sanitize corridor search (e.g. Germany, UAE)..." 
                  className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 font-medium text-navy-950 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                />
             </div>
             <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/20">
                Verify Coverage
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {regions.map((region, i) => (
                <div key={i} className="group bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex items-start justify-between mb-8">
                      <div>
                         <h3 className="text-2xl font-black text-navy-950 flex items-center gap-3">
                            <Globe className="w-6 h-6 text-blue-500 group-hover:rotate-12 transition-transform" /> {region.name}
                         </h3>
                         <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">Main Hubs: {region.hubs}</p>
                      </div>
                      <div className="bg-slate-50 px-4 py-2 rounded-xl text-xs font-black text-navy-800">ACTIVE ZONE</div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {region.major.map(country => (
                         <div key={country} className="flex items-center gap-2 group/item cursor-pointer">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-40 group-hover/item:opacity-100 transition-opacity"></div>
                            <span className="text-slate-600 group-hover/item:text-navy-950 font-medium transition-colors">{country}</span>
                         </div>
                      ))}
                   </div>

                   <button className="mt-10 w-full py-4 border border-slate-100 rounded-2xl text-blue-600 font-bold hover:bg-blue-50 hover:border-blue-200 transition-all flex items-center justify-center gap-2">
                      View Local Protocols <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
             ))}
          </div>
       </div>

       {/* Infrastructure Stat */}
       <div className="bg-white border-t border-slate-200 py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="max-w-2xl text-left">
                <h2 className="text-4xl font-black text-navy-950 mb-6">Unrivaled Network Density</h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                   We operate our own high-capacity warehouses and customs processing facilities at 48 key global border points, ensuring your cargo never sits in a public queue.
                </p>
                <div className="flex gap-4">
                   <div className="bg-navy-950 text-white p-4 rounded-2xl flex flex-col gap-1 items-center justify-center min-w-[120px]">
                      <span className="text-2xl font-bold">48</span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70 text-center">Owned Hubs</span>
                   </div>
                   <div className="bg-blue-600 text-white p-4 rounded-2xl flex flex-col gap-1 items-center justify-center min-w-[120px]">
                      <span className="text-2xl font-bold">220+</span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70 text-center">Territories</span>
                   </div>
                </div>
             </div>
             <div className="w-full md:w-[400px] h-[300px] bg-slate-100 rounded-3xl relative overflow-hidden shadow-inner border border-slate-200">
                {/* Visual Placeholder for a Map or Data Grid */}
                <div className="absolute inset-x-8 inset-y-8 flex flex-col gap-4">
                   {[1,2,3,4,5].map(i => (
                      <div key={i} style={{width: `${100 - (i*10)}%`}} className="h-4 bg-white/50 rounded-full animate-pulse"></div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
