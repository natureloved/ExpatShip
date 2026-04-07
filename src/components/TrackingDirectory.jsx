import React, { useState } from 'react';
import { Search, Map, Calendar, ArrowRight } from 'lucide-react';
import TrackingMock from './TrackingMock';
import { ZONES } from '../utils/rateEngine';

const RECENT_SHIPMENTS = [
  { id: 'ES-GLOBAL-4921', origin: 'US', dest: 'FR', date: '2026-04-05', status: 'IN TRANSIT' },
  { id: 'ES-GLOBAL-1033', origin: 'GB', dest: 'AE', date: '2026-04-06', status: 'IN TRANSIT' },
  { id: 'ES-GLOBAL-8842', origin: 'JP', dest: 'CA', date: '2026-04-07', status: 'DELIVERED' }
];

export default function TrackingDirectory() {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const selectedData = RECENT_SHIPMENTS.find(s => s.id === selectedId);

  if (selectedId && selectedData) {
    return (
      <div className="space-y-4 font-sans animate-in fade-in zoom-in-95 duration-200">
        <button 
           onClick={() => setSelectedId(null)}
           className="text-navy-600 font-medium hover:underline flex items-center gap-2 mb-4"
        >
          ← Back to Directory
        </button>
        <TrackingMock 
          trackingId={selectedData.id} 
          origin={ZONES[selectedData.origin]?.name} 
          dest={ZONES[selectedData.dest]?.name} 
          status={selectedData.status}
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden font-sans">
      <div className="p-6 md:p-8 space-y-6">
         <h2 className="text-xl font-bold text-navy-900 border-b border-slate-100 pb-4">Tracking Directory</h2>
         
         <div className="relative">
           <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
           <input 
             type="text" 
             placeholder="Search by ID (e.g., ES-GLOBAL-...)" 
             value={search}
             onChange={e => setSearch(e.target.value)}
             className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-navy-500 transition-shadow"
           />
         </div>

         <div className="space-y-3 mt-6">
           {RECENT_SHIPMENTS.filter(s => s.id.toLowerCase().includes(search.toLowerCase())).map(shipment => (
             <div 
                key={shipment.id} 
                onClick={() => setSelectedId(shipment.id)}
                className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 hover:border-navy-300 hover:shadow-sm rounded-xl cursor-pointer transition-all group"
             >
               <div className="flex items-center gap-4">
                 <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 group-hover:bg-blue-50 transition-colors">
                    <Map className="w-5 h-5 text-navy-500 group-hover:text-blue-600" />
                 </div>
                 <div>
                   <h4 className="font-bold text-navy-900 group-hover:text-blue-700">{shipment.id}</h4>
                   <p className="text-sm text-slate-500">{ZONES[shipment.origin]?.name} → {ZONES[shipment.dest]?.name}</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4 md:gap-6">
                  <div className="hidden md:flex text-sm text-slate-500 items-center justify-center gap-1.5">
                    <Calendar className="w-4 h-4" /> {shipment.date}
                  </div>
                  <div className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded border ${shipment.status === 'DELIVERED' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-white border-slate-200 text-slate-600'}`}>
                    {shipment.status}
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
               </div>
             </div>
           ))}
           {RECENT_SHIPMENTS.filter(s => s.id.toLowerCase().includes(search.toLowerCase())).length === 0 && (
              <p className="text-center text-slate-500 py-8">No shipments found matching your search.</p>
           )}
         </div>
      </div>
    </div>
  );
}
