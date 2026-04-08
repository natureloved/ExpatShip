import React, { useState } from 'react';
import { ShieldCheck, FileText, Scale, Globe, ArrowRight, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import SEO from '../components/SEO';

export default function CustomsGuide() {
  const [activeTab, setActiveTab] = useState('eu');

  const protocols = {
    eu: {
      title: "European Union (EORI)",
      desc: "Mandatory Economic Operators Registration and Identification (EORI) numbering for all commercial imports into the Eurozone.",
      requirements: ["Digital Commercial Invoice", "HS Code Accuracy (95%+)", "VAT/TVA Registration", "Country of Origin Certification"],
      warnings: "Post-Brexit VAT rules apply for UK-EU corridors. De minimis threshold is €0 since 2021."
    },
    us: {
      title: "United States (CBP)",
      desc: "U.S. Customs and Border Protection protocols focusing on security filings and harmonized tariff schedules.",
      requirements: ["ISF (10+2) Filing", "ACE Portal Submission", "Customs Bond (Single or Continuous)", "EPA/FDA Certs (if applicable)"],
      warnings: "Section 301 tariffs on specific origins. Improper HS classification can lead to 100% duty penalties."
    },
    apac: {
      title: "Asia Pacific (ASEAN/RCEP)",
      desc: "Complex regional trade agreements including the Regional Comprehensive Economic Partnership (RCEP).",
      requirements: ["Certificate of Origin (Form D/E)", "Digital Bill of Lading", "Import License (Local Sponsor)", "Port Clearance Tokens"],
      warnings: "High variability in local duty rates between Singapore (Free Port) and Indonesia (Restricted Categories)."
    }
  };

  const active = protocols[activeTab];

  return (
    <div className="flex flex-col flex-1 bg-slate-50">
       <SEO 
          title="Customs Clearance & Regulatory Guide" 
          description="A comprehensive guide to global customs protocols, EORI requirements, CBP security filings, and APAC trade agreements."
       />

       <div className="bg-navy-950 py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
             <span className="text-blue-500 font-black tracking-widest text-xs uppercase mb-4 block">Regulatory Intelligence</span>
             <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Global Protocol Manual</h1>
             <p className="text-xl text-navy-300 font-light leading-relaxed">
                Navigating international borders requires precision. Use our manual to ensure your assets clear destination customs without friction.
             </p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 flex flex-col lg:flex-row gap-12">
          {/* Controls */}
          <div className="w-full lg:w-80 shrink-0 space-y-4">
             {Object.keys(protocols).map((key) => (
                <button 
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between group ${activeTab === key ? 'bg-white border-blue-500 shadow-lg ring-4 ring-blue-500/5' : 'bg-transparent border-slate-200 hover:border-blue-200 opacity-60 hover:opacity-100'}`}
                >
                   <span className={`font-black uppercase tracking-tight ${activeTab === key ? 'text-navy-950' : 'text-slate-500'}`}>{protocols[key].title}</span>
                   <ArrowRight className={`w-5 h-5 transition-transform ${activeTab === key ? 'text-blue-500 translate-x-0' : 'text-slate-300 -translate-x-2 group-hover:translate-x-0'}`} />
                </button>
             ))}

             <div className="pt-8 space-y-4">
                <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
                   <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                      <AlertTriangle className="w-4 h-4" /> 
                      <span className="text-sm">Compliance Notice</span>
                   </div>
                   <p className="text-xs text-amber-900 leading-relaxed font-medium">
                      Custodial protocols changed for Zone 4 effective March 2026. Verify EORI status before dispatch.
                   </p>
                </div>
             </div>
          </div>

          {/* Doc Content */}
          <div className="flex-1">
             <div className="bg-white rounded-[40px] shadow-sm border border-slate-200 overflow-hidden min-h-[600px] flex flex-col">
                <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                   <div className="flex items-center gap-4">
                      <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg">
                         <FileText className="w-6 h-6" />
                      </div>
                      <div>
                         <h2 className="text-3xl font-black text-navy-950">{active.title}</h2>
                         <p className="text-slate-500 text-sm font-bold mt-1">Status: Active Protocol V2.4</p>
                      </div>
                   </div>
                   <button className="hidden md:flex bg-navy-950 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-navy-800 transition-colors">
                      Download PDF Guide
                   </button>
                </div>

                <div className="p-8 md:p-12 space-y-12">
                   <section>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Executive Summary</h4>
                      <p className="text-xl text-navy-900 leading-relaxed font-light">
                         {active.desc}
                      </p>
                   </section>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <section>
                         <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Mandatory Filings</h4>
                         <div className="space-y-4">
                            {active.requirements.map(req => (
                               <div key={req} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-colors">
                                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                  <span className="text-navy-900 font-bold">{req}</span>
                                </div>
                            ))}
                         </div>
                      </section>

                      <section className="space-y-6">
                         <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Critical Edge-Cases</h4>
                         <div className="bg-blue-950 p-8 rounded-3xl text-white relative overflow-hidden">
                            <Info className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-800 opacity-20 rotate-12" />
                            <p className="text-blue-300 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-[10px]">Security Briefing</p>
                            <p className="relative z-10 text-lg leading-relaxed font-medium">
                               {active.warnings}
                            </p>
                         </div>
                         <div className="flex items-center gap-4 p-6 border border-dashed border-slate-300 rounded-3xl opacity-60">
                            <Scale className="w-6 h-6 text-slate-400" />
                            <span className="text-sm font-medium text-slate-500 italic">Protocols updated every 24h via local customs API synchronization.</span>
                         </div>
                      </section>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
