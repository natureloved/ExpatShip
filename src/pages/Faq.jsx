import React, { useState } from 'react';
import { Plus, Minus, Search, HelpCircle, MessageSquare, PhoneCall } from 'lucide-react';
import SEO from '../components/SEO';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
     { 
       q: "How do I print a commercial invoice?", 
       a: "Navigate to your Dashboard and select 'New Shipment'. Once you complete the route mapping, our engine will dynamically generate an EU/US-ready Commercial Invoice (PDF). You can view, download, or print this document directly from the 'Active Shipments' portal." 
     },
     { 
       q: "Do you support DDP (Delivered Duty Paid) shipments?", 
       a: "Absolutely. ExpatShip natively calculates duties, taxes, and handling fees for 180+ countries. By selecting DDP, you prepay these costs so your receiver faces zero hidden customs fees upon arrival." 
     },
     { 
       q: "What is an EORI number and do I need one?", 
       a: "An Economic Operators Registration and Identification (EORI) number is required for all businesses importing or exporting goods with the European Union. If you are shipping to/from the EU commercially, our system will prompt you for your EORI during the documentation phase." 
     },
     { 
       q: "How does real-time telemetry tracking work?", 
       a: "We integrate directly with carrier APIs and IoT sensors in specific high-security corridors. This allows for sub-meter location accuracy and environmental monitoring (temperature, impact) for sensitive assets." 
     },
     { 
       q: "Can I manage multiple storage addresses?", 
       a: "Yes. Enterprise accounts can store up to 500 validated global addresses. You can manage these in the 'Settings' portal under the 'Saved Addresses' tab for instant injection into new shipment workflows." 
     }
  ];

  return (
    <div className="flex flex-col flex-1 bg-slate-50">
       <SEO 
          title="Frequently Asked Questions & Help Center" 
          description="Find answers to common questions about commercial invoices, DDP shipments, EORI requirements, and real-time telemetry tracking."
       />

       <div className="bg-white border-b border-slate-200 py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <div className="flex justify-center mb-6">
                <div className="bg-blue-50 p-4 rounded-3xl text-blue-600 shadow-sm">
                   <HelpCircle className="w-10 h-10" />
                </div>
             </div>
             <h1 className="text-4xl md:text-5xl font-black text-navy-950 mb-6">Support Intelligence</h1>
             <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
                Search our comprehensive protocol library or browse the most common operational queries below.
             </p>
          </div>
       </div>

       <div className="max-w-3xl mx-auto px-4 md:px-8 py-24">
          <div className="space-y-4">
             {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all hover:border-blue-200">
                   <button 
                     onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                     className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                   >
                      <span className="text-lg font-bold text-navy-900 leading-tight">{faq.q}</span>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-navy-900 text-white' : 'bg-slate-50 text-slate-400'}`}>
                         {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                   </button>
                   <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <div className="p-6 text-slate-600 leading-relaxed bg-slate-50/30">
                         {faq.a}
                      </div>
                   </div>
                </div>
             ))}
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-navy-950 p-8 rounded-3xl text-white group cursor-pointer hover:bg-navy-900 transition-colors">
                <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-xl font-bold mb-2">Live Logistics Chat</h4>
                <p className="text-navy-300 text-sm mb-6">Connect with a customs specialist in real-time for complex filings.</p>
                <div className="text-blue-400 font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">Start Broadcast <ArrowRight className="w-4 h-4" /></div>
             </div>
             <div className="bg-white border border-slate-200 p-8 rounded-3xl group cursor-pointer hover:border-blue-500 transition-colors">
                <PhoneCall className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-navy-950 mb-2">Enterprise Support</h4>
                <p className="text-slate-500 text-sm mb-6">Dedicated account management for multi-fleet corporate logistics.</p>
                <div className="text-blue-600 font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">Call Priority Line <ArrowRight className="w-4 h-4" /></div>
             </div>
          </div>
       </div>
    </div>
  );
}
