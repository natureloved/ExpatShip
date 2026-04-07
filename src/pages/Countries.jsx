import React from 'react';
import { Globe } from 'lucide-react';

export default function Countries() {
  const regions = [
     { name: "North America", countries: ["United States", "Canada", "Mexico"] },
     { name: "Europe", countries: ["United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands"] },
     { name: "Asia Pacific", countries: ["China", "Japan", "South Korea", "Australia", "Singapore", "India"] },
     { name: "Middle East", countries: ["United Arab Emirates", "Saudi Arabia", "Israel", "Qatar"] }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8 w-full flex-1">
       <h1 className="text-4xl md:text-5xl font-black text-navy-950 mb-6">Supported Corridors</h1>
       <p className="text-lg text-slate-500 max-w-2xl mb-12">Search engines love lists. ExpatShip routes packages seamlessly through 220+ territories. Here are our major high-capacity zones.</p>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, i) => (
             <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-navy-900 text-xl border-b border-slate-100 pb-3 mb-4 flex gap-2 items-center">
                   <Globe className="w-5 h-5 text-blue-500" /> {region.name}
                </h3>
                <ul className="space-y-3">
                   {region.countries.map(country => (
                      <li key={country} className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer">{country}</li>
                   ))}
                </ul>
             </div>
          ))}
       </div>
    </div>
  );
}
