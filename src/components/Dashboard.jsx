import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, TrendingUp, AlertTriangle, ArrowUpRight, MapPin, ReceiptText, Clock } from 'lucide-react';
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
     { id: 'ES-INTL-8842', dest: 'Berlin, DE', status: 'Customs Cleared', date: 'Apr 07, 2026' },
     { id: 'ES-INTL-9111', dest: 'Tokyo, JP', status: 'In Transit', date: 'Apr 06, 2026' }
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
     { label: 'European Hub', details: 'Alexanderplatz 1, 10178 Berlin, Germany' },
     { label: 'APAC Gateway', details: '1 Raffles Place, Singapore 048616' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
           <h2 className="text-2xl font-bold text-navy-900">Operations Center</h2>
           <p className="text-slate-500">Welcome back. Manage your global asset logistics natively.</p>
        </div>
        <Link 
           to="/dashboard/new-shipment"
           className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          + New Shipment
        </Link>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Package className="w-5 h-5" /></div>
            <p className="text-sm font-medium text-slate-500">Active Operations</p>
          </div>
          <p className="text-3xl font-bold text-navy-900">34</p>
          <p className="text-xs text-green-600 flex items-center mt-2 font-medium">
             <ArrowUpRight className="w-3 h-3 mr-1" /> +12% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><TrendingUp className="w-5 h-5" /></div>
            <p className="text-sm font-medium text-slate-500">Monthly Duty Settled</p>
          </div>
          <p className="text-3xl font-bold text-navy-900">$84,320</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><AlertTriangle className="w-5 h-5" /></div>
            <p className="text-sm font-medium text-slate-500">Action Required</p>
          </div>
          <p className="text-3xl font-bold text-navy-900">2</p>
          <p className="text-xs text-amber-600 mt-2 font-medium">Customs hold on recent loads.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active and Past Shipments */}
          <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2 mb-4"><Clock className="w-5 h-5 text-blue-500" /> Active Shipments</h3>
                  <div className="space-y-3">
                     {activeShipments.map((ship, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                           <div>
                              <p className="font-bold text-navy-900 text-sm">{ship.id}</p>
                              <p className="text-xs text-slate-500">{ship.dest}</p>
                           </div>
                           <div className="text-right">
                              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{ship.status}</span>
                              <p className="text-xs text-slate-400 mt-1">{ship.date}</p>
                           </div>
                        </div>
                     ))}
                  </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-navy-900 mb-4 text-slate-400">Past Orders</h3>
                  <div className="space-y-3 opacity-70">
                     {pastOrders.map((ship, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-slate-100">
                           <div>
                              <p className="font-bold text-navy-900 text-sm">{ship.id}</p>
                              <p className="text-xs text-slate-500">{ship.dest}</p>
                           </div>
                           <div className="text-right">
                              <span className="text-xs font-bold text-emerald-600">{ship.status}</span>
                              <p className="text-xs text-slate-400 mt-1">{ship.date}</p>
                           </div>
                        </div>
                     ))}
                  </div>
              </div>
          </div>

          {/* Billing & Infrastructure Logistics */}
          <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2 mb-4"><ReceiptText className="w-5 h-5 text-blue-500" /> Commercial Invoices</h3>
                  <div className="space-y-3">
                     {invoices.map((inv, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors cursor-pointer">
                           <div>
                              <p className="font-bold text-navy-900 text-sm">{inv.id}</p>
                              <p className="text-xs text-slate-500">{inv.date}</p>
                           </div>
                           <div className="text-right">
                              <p className="text-sm font-black text-navy-900">{inv.amount}</p>
                              <span className={`text-xs font-bold ${inv.status === 'Paid' ? 'text-emerald-600' : 'text-amber-500'}`}>{inv.status}</span>
                           </div>
                        </div>
                     ))}
                  </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2 mb-4"><MapPin className="w-5 h-5 text-blue-500" /> Saved Addresses</h3>
                  <div className="space-y-3">
                     {addresses.map((addr, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-100">
                           <div>
                              <p className="font-bold text-navy-900 text-sm">{addr.label}</p>
                              <p className="text-xs text-slate-500 mt-1 max-w-[200px] truncate">{addr.details}</p>
                           </div>
                           <button className="text-xs font-bold text-blue-600 hover:text-blue-800">Edit</button>
                        </div>
                     ))}
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
