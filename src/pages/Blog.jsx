import React from 'react';

export default function Blog() {
  const articles = [
     { title: "How to ship heavy machinery to Australia", date: "April 12, 2026", category: "Freight Logistics" },
     { title: "Understanding the new EU Customs APIs", date: "April 05, 2026", category: "Compliance" },
     { title: "Mastering Harmonized System Codes", date: "March 28, 2026", category: "Trade Strategy" }
  ];

  return (
    <div className="py-24 max-w-5xl mx-auto px-4 md:px-8 w-full flex-1">
       <h1 className="text-4xl md:text-5xl font-black text-navy-950 mb-4">Logistics Intelligence Blog</h1>
       <p className="text-lg text-slate-500 mb-12">Actionable insights capturing specific intent-based queries.</p>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
             <article key={i} className="bg-white border text-left border-slate-200 p-6 flex flex-col rounded-2xl hover:border-blue-400 transition-colors cursor-pointer shadow-sm">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">{article.category}</span>
                <h3 className="text-xl font-bold text-navy-900 leading-tight mb-4">{article.title}</h3>
                <span className="text-slate-400 text-sm mt-auto">{article.date}</span>
             </article>
          ))}
       </div>
    </div>
  );
}
