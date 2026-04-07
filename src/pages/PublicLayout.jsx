import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Globe, Plane, Package, Ship, Menu } from 'lucide-react';

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col selection:bg-blue-200">
      <header className="bg-navy-950 text-white z-50 shadow-xl border-b border-navy-800 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
             <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <Globe className="w-6 h-6 text-blue-400" />
             </div>
             <span className="text-xl font-black tracking-wide">ExpatShip</span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-wide text-navy-200">
             <Link to="/services" className="hover:text-white transition-colors">Services</Link>
             <Link to="/countries" className="hover:text-white transition-colors">Destinations</Link>
             <Link to="/customs-guide" className="hover:text-white transition-colors">Customs Guide</Link>
             <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
             <Link to="/blog" className="hover:text-white transition-colors">Resources</Link>
          </nav>
          <div className="flex items-center gap-4">
             <Link to="/dashboard" className="hidden md:flex text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all">
                Client Portal
             </Link>
             <button className="md:hidden text-white"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
         <Outlet />
      </main>

      <footer className="bg-navy-950 text-navy-300 py-12 border-t border-navy-800">
         <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
               <div className="flex items-center gap-2 mb-4">
                 <Globe className="w-5 h-5 text-blue-400" />
                 <span className="text-lg font-black text-white">ExpatShip</span>
               </div>
               <p className="text-sm">The premier engine for cross-border logistics mapping and execution.</p>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">Operations</h4>
               <ul className="space-y-2 text-sm">
                 <li><Link to="/track" className="hover:text-blue-400">Track Parcel</Link></li>
                 <li><Link to="/services" className="hover:text-blue-400">Logistics Services</Link></li>
                 <li><Link to="/countries" className="hover:text-blue-400">Supported Corridors</Link></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">Intelligence</h4>
               <ul className="space-y-2 text-sm">
                 <li><Link to="/customs-guide" className="hover:text-blue-400">Customs Clearance</Link></li>
                 <li><Link to="/blog" className="hover:text-blue-400">Industry Intel</Link></li>
                 <li><Link to="/faq" className="hover:text-blue-400">Help Center</Link></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold mb-4">Legal</h4>
               <ul className="space-y-2 text-sm">
                 <li><Link to="#" className="hover:text-blue-400">Privacy Policy</Link></li>
                 <li><Link to="#" className="hover:text-blue-400">Terms of Service</Link></li>
               </ul>
            </div>
         </div>
      </footer>
    </div>
  );
}
