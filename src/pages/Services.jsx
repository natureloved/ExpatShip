import React from 'react';
import { Package, ShieldAlert, Truck } from 'lucide-react';

export default function Services() {
  const tiers = [
     { icon: <Package className="w-8 h-8 text-blue-500" />, title: "Document & Micro-freight", desc: "Express routing for rapid delivery of sensitive papers and lightweight cargo under 5kg." },
     { icon: <ShieldAlert className="w-8 h-8 text-amber-500" />, title: "Fragile & High-Value", desc: "Climate-controlled, shock-absorbent handling channels with continuous custody tracing." },
     { icon: <Truck className="w-8 h-8 text-emerald-500" />, title: "Bulk Container Shipping", desc: "LCL and FCL ocean/air options structured entirely through automated customs APIs." }
  ];

  return (
    <div className="py-24 max-w-5xl mx-auto px-4 md:px-8 w-full flex-1">
       <h1 className="text-4xl md:text-5xl font-black text-navy-950 mb-6">Logistics Services</h1>
       <p className="text-lg text-slate-500 mb-12">Categorized handling procedures specifically designed to capture search intent for different parcel classes.</p>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
             <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4">
                <div className="bg-slate-50 p-3 rounded-xl w-fit border border-slate-100">{tier.icon}</div>
                <h3 className="text-lg font-bold text-navy-900">{tier.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{tier.desc}</p>
             </div>
          ))}
       </div>
    </div>
  );
}
