import React from 'react';
import { Plane, Ship, ShieldCheck, Database, Warehouse, Globe, Truck, Anchor } from 'lucide-react';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    {
      title: "Air Freight Logistics",
      icon: <Plane className="w-8 h-8" />,
      desc: "High-velocity aerial distribution across major global hubs. Express customs clearance included.",
      features: ["Next-day delivery", "Temperature control", "AOG priority"]
    },
    {
      title: "Maritime Distribution",
      icon: <Ship className="w-8 h-8" />,
      desc: "Mass-scale ocean transport for enterprise-grade inventory. Full container (FCL) and partial (LCL) support.",
      features: ["Port-to-port visibility", "IMO handling", "Smart container tracking"]
    },
    {
      title: "Customs Brokerage",
      icon: <ShieldCheck className="w-8 h-8" />,
      desc: "AI-driven duty calculation and automated filing with EU/US/APAC authorities.",
      features: ["Harmonized System (HS) Audit", "Duty draw-backs", "Compliance mapping"]
    },
    {
      title: "Strategic Warehousing",
      icon: <Warehouse className="w-8 h-8" />,
      desc: "Micro-fulfillment and bonded storage at key economic borders.",
      features: ["Pick & Pack automation", "Inventory telemetry", "Returns management"]
    }
  ];

  return (
    <div className="flex flex-col flex-1">
      <SEO 
        title="Logistics Services & Infrastructure" 
        description="Explore ExpatShip's range of logistics services including Air Freight, Maritime Distribution, and AI-driven Customs Brokerage."
      />
      
      <div className="bg-navy-950 py-24 text-center border-b border-navy-800">
         <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Enterprise Infrastructure</h1>
            <p className="text-xl text-navy-300 font-light">Direct routing and deep-stack logistics at every global touchpoint.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
               <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col items-start text-left">
                  <div className="bg-blue-50 p-4 rounded-2xl mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-navy-950 mb-4">{service.title}</h3>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                     {service.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100 w-full">
                     <div className="flex flex-wrap gap-2">
                        {service.features.map(feat => (
                           <span key={feat} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">{feat}</span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Secondary Services Strip */}
         <div className="mt-24 bg-blue-50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
               <h2 className="text-3xl font-black text-navy-950 mb-4">Precision Last-Mile Execution</h2>
               <p className="text-lg text-slate-600 leading-relaxed">Our network extends beyond ports and hubs directly into the local distribution veins of 2,400+ cities globally.</p>
               <div className="flex gap-8 mt-8">
                  <div className="flex items-center gap-2 text-navy-900 font-bold"><Truck className="w-5 h-5 text-blue-600" /> City Dispatch</div>
                  <div className="flex items-center gap-2 text-navy-900 font-bold"><Anchor className="w-5 h-5 text-blue-600" /> Dry Port Link</div>
               </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 grid grid-cols-2 gap-8 shrink-0">
               <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">220+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Territories</p>
               </div>
               <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">14ms</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">API Latency</p>
               </div>
               <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">99.9%</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Clearing Rate</p>
               </div>
               <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">24/7</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Support</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
