import React from 'react';
import { ArrowRight, Plane, Globe, ShieldCheck, Map, Zap, CheckCircle2, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Landing() {
  return (
    <div className="flex flex-col">
       <SEO 
          title="Global Enterprise Logistics & Supply Chain" 
          description="Execute international shipping with military precision. Instantly generate customs documents, track infinite fleets, and dominate supply chains."
       />

       {/* Hero Section */}
       <div className="bg-navy-900 border-b border-navy-800 relative overflow-hidden py-32 md:py-48">
          {/* Background Map Graphic - Glassmorphism Style */}
          <div className="absolute top-0 right-0 w-full md:w-3/5 h-full opacity-20 pointer-events-none z-0">
             <div className="absolute inset-0 bg-gradient-to-l from-blue-600/20 to-transparent"></div>
             <svg className="w-full h-full text-blue-400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="150" r="2" fill="currentColor" />
                <circle cx="400" cy="250" r="2" fill="currentColor" />
                <circle cx="600" cy="100" r="2" fill="currentColor" />
                <path d="M200 150Q300 100 400 250T600 100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
             </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
             <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
               <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 bg-blue-950/50 backdrop-blur-sm border border-blue-800/50 rounded-full">
                  Global Enterprise Logistics Matrix
               </span>
               <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                  Logistics, <br/><span className="text-blue-500">Amplified.</span>
               </h1>
               <p className="text-xl md:text-2xl text-navy-200 mb-12 leading-relaxed font-light max-w-2xl">
                  Execute international shipping with military precision. Instantly generate customs documents, track infinite fleets, and dominate supply chains.
               </p>
               <div className="flex flex-col sm:flex-row gap-5">
                  <Link to="/dashboard" className="group bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-10 rounded-2xl shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:shadow-[0_0_70px_rgba(37,99,235,0.6)] transition-all flex items-center justify-center gap-3 text-lg leading-none">
                     Enter Portal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/customs-guide" className="bg-navy-950/50 hover:bg-navy-800 backdrop-blur-md border border-navy-700 hover:border-navy-500 text-white font-bold py-5 px-10 rounded-2xl transition-all flex items-center justify-center text-lg leading-none">
                     Customs Protocols
                  </Link>
               </div>
             </div>
          </div>
       </div>

       {/* Trust Signals / Logos */}
       <div className="bg-slate-50 py-12 border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
             <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by global conglomerates</p>
             <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-black text-2xl text-navy-900 tracking-tighter"><Building2 className="w-8 h-8" /> NEXUS</div>
                <div className="flex items-center gap-2 font-black text-2xl text-navy-900 tracking-tighter"><Zap className="w-8 h-8" /> VOLT</div>
                <div className="flex items-center gap-2 font-black text-2xl text-navy-900 tracking-tighter"><Map className="w-8 h-8" /> ATLAS</div>
                <div className="flex items-center gap-2 font-black text-2xl text-navy-900 tracking-tighter"><Globe className="w-8 h-8" /> ORBIT</div>
             </div>
          </div>
       </div>

       {/* Features Grid */}
       <div className="bg-white py-32 border-b border-slate-200 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-50 -mb-48 -mr-48"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
             <div className="flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Plane className="w-8 h-8 text-blue-600 group-hover:text-white" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black text-navy-900 mb-3">Infinite Topology</h3>
                    <p className="text-slate-500 leading-relaxed text-lg">Direct routing integrations with 220+ territories and local authorities. No dead zones, no delays.</p>
                 </div>
                 <ul className="space-y-2">
                    {["Real-time telemetry", "Dynamic rerouting", "Zone 1-8 priority"].map(item => (
                       <li key={item} className="flex items-center gap-2 text-sm font-bold text-navy-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                       </li>
                    ))}
                 </ul>
             </div>
             
             <div className="flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Globe className="w-8 h-8 text-blue-600 group-hover:text-white" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black text-navy-900 mb-3">Automatic Clearance</h3>
                    <p className="text-slate-500 leading-relaxed text-lg">Instantly print commercial invoices compliant with EU/US/APAC dynamic standards.</p>
                 </div>
                 <ul className="space-y-2">
                    {["HS Code lookup", "Duty estimation", "DDP/DDU fulfillment"].map(item => (
                       <li key={item} className="flex items-center gap-2 text-sm font-bold text-navy-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                       </li>
                    ))}
                 </ul>
             </div>

             <div className="flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-3xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="w-8 h-8 text-blue-600 group-hover:text-white" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black text-navy-900 mb-3">Encrypted Transport</h3>
                    <p className="text-slate-500 leading-relaxed text-lg">High-level tracking telemetry ensures end-to-end custody chains remain unbroken.</p>
                 </div>
                 <ul className="space-y-2">
                    {["Biometric handoffs", "Tamper detection", "Cold chain logging"].map(item => (
                       <li key={item} className="flex items-center gap-2 text-sm font-bold text-navy-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                       </li>
                    ))}
                 </ul>
             </div>
          </div>
       </div>

       {/* Call to Action */}
       <div className="bg-navy-950 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to dominate your supply chain?</h2>
             <p className="text-xl text-navy-300 mb-12">Join 1,200+ global enterprises executing shipments with ExpatShip intelligence.</p>
             <Link to="/dashboard" className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-12 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 text-lg">
                Activate Your Account
             </Link>
          </div>
       </div>
    </div>
  );
}
