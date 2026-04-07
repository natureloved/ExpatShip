import React from 'react';
import { ArrowRight, Plane, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="flex flex-col">
       <div className="bg-navy-900 border-b border-navy-800 relative overflow-hidden py-32">
          {/* Background Map Graphic Placeholder */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none border-l border-navy-800 bg-blue-500/10"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
             <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700">
               <span className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-900 rounded-full">Global Enterprise Logistics</span>
               <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                  Logistics, <br/>Amplified.
               </h1>
               <p className="text-xl text-navy-200 mb-10 leading-relaxed font-light">
                  Execute international shipping with military precision. Instantly generate customs documents, track infinite fleets, and dominate supply chains.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/track" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-2">
                     Track an Asset <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/customs-guide" className="bg-navy-800 hover:bg-navy-700 border border-navy-700 hover:border-navy-600 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center">
                     Explore Customs Protocols
                  </Link>
               </div>
             </div>
          </div>
       </div>

       {/* Trust Signals */}
       <div className="bg-white py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="flex flex-col gap-4">
                 <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
                    <Plane className="w-6 h-6 text-navy-900" />
                 </div>
                 <h3 className="text-xl font-bold text-navy-900">Infinite Topology</h3>
                 <p className="text-slate-500 leading-relaxed">Direct routing integrations with 220+ territories and local authorities.</p>
             </div>
             <div className="flex flex-col gap-4">
                 <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
                    <Globe className="w-6 h-6 text-blue-600" />
                 </div>
                 <h3 className="text-xl font-bold text-navy-900">Automatic Clearance</h3>
                 <p className="text-slate-500 leading-relaxed">Instantly print commercial invoices compliant with EU/US/APAC dynamic standards.</p>
             </div>
             <div className="flex flex-col gap-4">
                 <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                 </div>
                 <h3 className="text-xl font-bold text-navy-900">Encrypted Transport</h3>
                 <p className="text-slate-500 leading-relaxed">High-level tracking telemetry ensures end-to-end custody chains remain unbroken.</p>
             </div>
          </div>
       </div>
    </div>
  );
}
