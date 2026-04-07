import React from 'react';

export default function Faq() {
  const faqs = [
     { q: "How do I print a commercial invoice?", a: "Using our Dashboard, seamlessly process a Shipment Route. Our engine will dynamically generate an EU/US-ready Commercial Invoice for you to print directly from your browser." },
     { q: "Do you support DDP shipments?", a: "Yes. Delivered Duty Paid (DDP) is natively calculated in our tracking matrix to ensure your receiver faces zero hidden customs fees." },
     { q: "Can I manage multiple storage addresses?", a: "Enterprise clients can map specific endpoints inside the Settings portal under 'Saved Addresses'." }
  ];

  return (
    <div className="py-24 max-w-3xl mx-auto px-4 md:px-8 w-full flex-1">
       <h1 className="text-4xl font-black text-navy-950 mb-10 text-center">Frequently Asked Questions</h1>
       <div className="space-y-6">
          {faqs.map((faq, i) => (
             <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
             </div>
          ))}
       </div>
    </div>
  );
}
