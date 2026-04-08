import React from 'react';
import { Calendar, User, ArrowRight, Share2, Bookmark } from 'lucide-react';
import SEO from '../components/SEO';

export default function Blog() {
  const posts = [
    {
      title: "The EORI 2026 Protocol: What's Changing for EU Importers",
      excerpt: "New regulatory shifts in the Eurozone require immediate updates to digital filing headers. We break down the technical requirements.",
      category: "Regulation",
      date: "Apr 04, 2026",
      author: "Marcus Chen",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Visualizing Supply Chain Inefficiency Through Telemetry",
      excerpt: "How real-time impact and temperature sensors are identifying bottlenecking nodes in APAC corridors.",
      category: "Intelligence",
      date: "Mar 30, 2026",
      author: "Sarah J. Miller",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800"
    },
    {
       title: "Maritime Congestion: Strategies for Q3 2026",
       excerpt: "Direct maritime routing alternatives to bypass current port delays in the North Atlantic region.",
       category: "Logistics",
       date: "Mar 22, 2026",
       author: "Elena Rossi",
       image: "https://images.unsplash.com/photo-1494412574743-019abab89665?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="flex flex-col flex-1 bg-white">
       <SEO 
          title="Industry Intelligence & Logistics Blog" 
          description="Read the latest insights from ExpatShip on EU customs protocols, supply chain telemetry, and maritime routing strategies."
       />

       <div className="bg-slate-50 border-b border-slate-200 pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
             <div className="max-w-3xl">
                <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4 block">Industry Intelligence</span>
                <h1 className="text-5xl md:text-7xl font-black text-navy-950 mb-8 tracking-tighter">Resources & News</h1>
                <p className="text-xl text-slate-500 font-light leading-relaxed">
                   Depth-first reports and real-time updates from the global logistics network.
                </p>
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {posts.map((post, i) => (
                <article key={i} className="group flex flex-col cursor-pointer">
                   <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8 shadow-sm">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6">
                         <span className="bg-white/90 backdrop-blur-md text-navy-950 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tighter">
                            {post.category}
                         </span>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                   </div>

                   <h3 className="text-2xl font-black text-navy-950 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                   </h3>
                   
                   <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                      {post.excerpt}
                   </p>

                   <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2 font-black text-navy-950 group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
                         Read Report <ArrowRight className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex items-center gap-3">
                         <button className="p-2 text-slate-400 hover:text-navy-950 transition-colors"><Bookmark className="w-4 h-4" /></button>
                         <button className="p-2 text-slate-400 hover:text-navy-950 transition-colors"><Share2 className="w-4 h-4" /></button>
                      </div>
                   </div>
                </article>
             ))}
          </div>

          <div className="mt-24 bg-navy-950 rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent"></div>
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl font-black text-white mb-6">Logistics Intel in your inbox?</h2>
                <p className="text-navy-300 mb-10 leading-relaxed">Join 15,000+ logistics managers receiving our weekly operational deep-dives.</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                   <input 
                     type="email" 
                     placeholder="Enter your professional email" 
                     className="flex-1 bg-navy-900 border border-navy-800 rounded-2xl py-4 px-6 text-white placeholder:text-navy-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                   <button className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-blue-500/20 whitespace-nowrap">
                      Join Matrix
                   </button>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
