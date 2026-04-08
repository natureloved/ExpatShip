import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, TrendingUp, AlertTriangle, ArrowUpRight, MapPin, ReceiptText, Clock, ChevronRight, Activity, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Oct', volume: 40, cost: 2400 },
  { name: 'Nov', volume: 30, cost: 1398 },
  { name: 'Dec', volume: 20, cost: 9800 },
  { name: 'Jan', volume: 27, cost: 3908 },
  { name: 'Feb', volume: 18, cost: 4800 },
  { name: 'Mar', volume: 23, cost: 3800 },
  { name: 'Apr', volume: 34, cost: 4300 },
];

export default function Dashboard() {
  const activeShipments = [
     { id: 'ES-INTL-8842', dest: 'Berlin, DE', status: 'Customs Cleared', progress: 85, date: 'Apr 07, 2026', type: 'Air' },
     { id: 'ES-INTL-9111', dest: 'Tokyo, JP', status: 'In Transit', progress: 45, date: 'Apr 06, 2026', type: 'Sea' }
  ];

  const pastOrders = [
     { id: 'ES-INTL-1024', dest: 'Toronto, CA', status: 'Delivered', date: 'Mar 15, 2026' },
     { id: 'ES-INTL-0992', dest: 'London, UK', status: 'Delivered', date: 'Mar 02, 2026' }
  ];

  const invoices = [
     { id: 'INV-4021', amount: '$3,420.00', status: 'Paid', date: 'Apr 01, 2026' },
     { id: 'INV-3982', amount: '$1,250.00', status: 'Pending', date: 'Apr 05, 2026' }
  ];

  const addresses = [
     { label: 'European Hub', details: 'Alexanderplatz 1, 10178 Berlin, Germany', tag: 'WAREHOUSE' },
     { label: 'APAC Gateway', details: '1 Raffles Place, Singapore 048616', tag: 'OFFICE' }
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-3xl font-black text-navy-950 tracking-tight">Operations Center</h2>
           <p className="text-slate-500 font-medium">Monitoring <span className="text-blue-600">34 active assets</span> across 8 corridors.</p>
        </div>
        <div className="flex gap-3">
           <button className="bg-white border border-slate-200 text-navy-950 font-bold py-2.5 px-6 rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Export Report
           </button>
           <Link 
              to="/dashboard/new-shipment"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center gap-2"
           >
             <Package className="w-4 h-4" /> New Dispatch
           </Link>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Volume', value: '1,280 kg', sub: '+12.5%', color: 'blue', icon: <Activity /> },
          { label: 'Landed Cost', value: '$84,320', sub: 'vs $72k last month', color: 'emerald', icon: <TrendingUp /> },
          { label: 'Transit Time', value: '4.2 Days', sub: '-0.8 Avg', color: 'purple', icon: <Clock /> },
          { label: 'Action Required', value: '2', sub: 'Customs Holds', color: 'amber', icon: <AlertTriangle /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
             <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 group-hover:scale-110 transition-transform`}>
                   {React.cloneElement(stat.icon, { className: 'w-5 h-5' })}
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
             </div>
             <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
             <div className="flex items-baseline gap-2 mt-1">
                <p className="text-2xl font-black text-navy-950">{stat.value}</p>
                <span className={`text-[10px] font-black p-1 rounded ${stat.color === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                   {stat.sub}
                </span>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed: Active Shipments */}
          <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                      <h3 className="text-xl font-black text-navy-950 flex items-center gap-3">
                         <Activity className="w-6 h-6 text-blue-600" /> Live Asset Tracking
                      </h3>
                      <button className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></button>
                  </div>
                  <div className="p-4 md:p-8 space-y-6">
                      {activeShipments.map((ship, i) => (
                        <div key={i} className="group p-6 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                           <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                              <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-navy-950 font-black shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {ship.type.substring(0,1)}
                                 </div>
                                 <div>
                                    <p className="font-black text-navy-950 text-lg leading-none mb-1">{ship.id}</p>
                                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                       <MapPin className="w-3 h-3" /> {ship.dest}
                                    </div>
                                 </div>
                              </div>
                              <div className="text-left md:text-right">
                                 <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${ship.status === 'Customs Cleared' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                                    {ship.status}
                                 </span>
                                 <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-widest">ETA: {ship.date}</p>
                              </div>
                           </div>
                           <div className="space-y-2">
                              <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                 <span>Transit Completion</span>
                                 <span>{ship.progress}%</span>
                              </div>
                              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                 <div 
                                    className={`h-full rounded-full transition-all duration-1000 ${ship.status === 'Customs Cleared' ? 'bg-emerald-500' : 'bg-blue-500'}`}
                                    style={{ width: `${ship.progress}%` }}
                                 ></div>
                              </div>
                           </div>
                        </div>
                      ))}
                  </div>
              </div>

              {/* Chart Overlay */}
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                     <h3 className="text-xl font-black text-navy-950">Volume Topology</h3>
                     <select className="bg-slate-50 border-none rounded-lg text-xs font-bold px-3 py-2 outline-none cursor-pointer">
                        <option>Last 7 Months</option>
                        <option>Year to Date</option>
                     </select>
                  </div>
                  <div className="h-[300px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                           <defs>
                              <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                                 <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                           <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}} />
                           <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}} />
                           <Tooltip 
                              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: '800' }} 
                           />
                           <Area type="monotone" dataKey="volume" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" />
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
              </div>
          </div>

          {/* Right Sidebar: Assets & Addresses */}
          <div className="space-y-8">
              {/* Commercial Invoices */}
              <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-8 border-b border-slate-100">
                      <h3 className="text-lg font-black text-navy-950 flex items-center gap-3">
                         <ReceiptText className="w-5 h-5 text-blue-600" /> Commercial Billing
                      </h3>
                  </div>
                  <div className="p-4 space-y-3">
                     {invoices.map((inv, i) => (
                        <div key={i} className="group p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100 cursor-pointer">
                           <div className="flex justify-between items-start">
                              <div>
                                 <p className="font-black text-navy-950 text-sm">{inv.id}</p>
                                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{inv.date}</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-sm font-black text-navy-950">{inv.amount}</p>
                                 <span className={`text-[10px] font-black uppercase tracking-widest ${inv.status === 'Paid' ? 'text-emerald-500' : 'text-amber-500'}`}>{inv.status}</span>
                              </div>
                           </div>
                           <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                               <button className="text-[10px] font-black text-blue-600 flex items-center gap-1"><Download className="w-3 h-3" /> PDF</button>
                               <button className="text-[10px] font-black text-slate-400"><ExternalLink className="w-3 h-3" /></button>
                           </div>
                        </div>
                     ))}
                  </div>
              </div>

              {/* Saved Endpoints */}
              <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-8 border-b border-slate-100">
                      <h3 className="text-lg font-black text-navy-950 flex items-center gap-3">
                         <MapPin className="w-5 h-5 text-blue-600" /> Secure Endpoints
                      </h3>
                  </div>
                  <div className="p-4 space-y-4">
                     {addresses.map((addr, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 flex flex-col gap-3 relative overflow-hidden group">
                           <div className="absolute right-0 top-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded tracking-widest">{addr.tag}</span>
                              <button className="text-[10px] font-black text-slate-400 hover:text-navy-950">EDIT</button>
                           </div>
                           <div>
                              <p className="font-black text-navy-950 text-xs">{addr.label}</p>
                              <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">{addr.details}</p>
                           </div>
                        </div>
                     ))}
                     <button className="w-full py-4 rounded-2xl border border-dashed border-slate-200 text-xs font-black text-slate-400 hover:border-blue-300 hover:text-blue-500 transition-all uppercase tracking-widest">
                        + Map New Endpoint
                     </button>
                  </div>
              </div>

              {/* Compliance Warning */}
              <div className="bg-amber-50 rounded-[32px] border border-amber-100 p-8">
                  <div className="flex items-center gap-3 text-amber-600 font-black text-sm uppercase tracking-tight mb-4">
                     <AlertTriangle className="w-5 h-5" /> Regulatory Alert
                  </div>
                  <p className="text-xs text-amber-900 leading-relaxed font-bold">
                     2 shipments are currently identified as 'Held for Documentation' by the Eurozone Customs Authority.
                  </p>
                  <button className="mt-6 w-full py-3 bg-amber-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20">
                     Resolve Issues
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
}
