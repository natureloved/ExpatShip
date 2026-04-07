import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, TrendingUp, AlertTriangle, ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Oct', volume: 4000, cost: 2400 },
  { name: 'Nov', volume: 3000, cost: 1398 },
  { name: 'Dec', volume: 2000, cost: 9800 },
  { name: 'Jan', volume: 2780, cost: 3908 },
  { name: 'Feb', volume: 1890, cost: 4800 },
  { name: 'Mar', volume: 2390, cost: 3800 },
  { name: 'Apr', volume: 3490, cost: 4300 },
];

export default function Dashboard({ setCurrentView }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h2 className="text-2xl font-bold text-navy-900">Operations Center</h2>
           <p className="text-slate-500">Welcome back. Here is your cross-border activity for the week.</p>
        </div>
        <button 
           onClick={() => setCurrentView('new-shipment')}
           className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          + New Shipment
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Package className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-slate-500">Active Operations</p>
          </div>
          <p className="text-3xl font-bold text-navy-900">1,248</p>
          <p className="text-xs text-green-600 flex items-center mt-2 font-medium">
             <ArrowUpRight className="w-3 h-3 mr-1" /> +12.5% from last week
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-slate-500">Weekly Taxes Settled</p>
          </div>
          <p className="text-3xl font-bold text-navy-900">$84,320</p>
          <p className="text-xs text-green-600 flex items-center mt-2 font-medium">
             <ArrowUpRight className="w-3 h-3 mr-1" /> +8.1% from last week
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-slate-500">Held in Customs</p>
          </div>
          <p className="text-3xl font-bold text-navy-900">42</p>
          <p className="text-xs text-amber-600 flex items-center mt-2 font-medium">
             Action Required on 12 shipments
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-navy-900 mb-6">Export Volume Trends</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dx={-10} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="volume" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
