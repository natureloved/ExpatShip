import React from 'react';
import { BookOpen } from 'lucide-react';

export default function CustomsGuide() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 md:px-8 w-full flex-1">
       <div className="flex items-center gap-4 mb-6">
          <div className="bg-navy-100 p-3 rounded-lg"><BookOpen className="w-8 h-8 text-navy-900" /></div>
          <h1 className="text-4xl md:text-5xl font-black text-navy-950">Customs Clearance Protocols</h1>
       </div>
       <div className="prose prose-slate max-w-none text-lg text-slate-600">
           <p className="lead font-medium text-xl text-slate-800">Navigating international borders requires absolute precision. Missing a single HS code can delay shipments by weeks and trigger massive fines.</p>
           <div className="mt-8 space-y-8">
              <section className="bg-white p-8 rounded-2xl border border-slate-200">
                 <h2 className="text-2xl font-bold text-navy-900 mb-4">Understanding Commercial Invoices</h2>
                 <p className="mb-4">The Commercial Invoice is the foundational document of international trade. It must natively denote the true transactional value of the goods to empower customs authorities to compute accurate duty taxes.</p>
                 <ul className="list-disc pl-6 space-y-2">
                    <li>Harmonized System (HS) Codes</li>
                    <li>Country of Origin</li>
                    <li>Incoterms (e.g., DDP vs DAP)</li>
                 </ul>
              </section>
           </div>
       </div>
    </div>
  );
}
