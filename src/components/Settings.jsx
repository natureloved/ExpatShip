import React, { useState } from 'react';
import { Key, Shield, HardDrive, Terminal, Check, Copy, RefreshCw } from 'lucide-react';

export default function Settings() {
  const [apiKey, setApiKey] = useState('es_prod_9f8r2e3d_7a6v5b4m3');
  const [copied, setCopied] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rotateKey = () => {
    setIsRotating(true);
    setTimeout(() => {
      const parts = Math.random().toString(36).substring(2, 10);
      setApiKey(`es_prod_${parts}_${Math.random().toString(36).substring(2, 8)}`);
      setIsRotating(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl space-y-8 animate-in fade-in zoom-in-95 duration-500">
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-navy-900 mb-2">Platform Mechanics & Security</h2>
          <p className="text-slate-500">Manage your ExpatShip developer tokens and webhook integrations.</p>
        </div>
        
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-navy-950 text-white p-6 rounded-xl border border-navy-800 relative overflow-hidden">
               <Shield className="absolute -right-4 -bottom-4 w-32 h-32 text-navy-900/50" />
               <h3 className="font-bold text-lg mb-2 relative z-10">Enterprise Tier</h3>
               <p className="text-navy-300 text-sm mb-6 relative z-10">Unlimited API mapping, priority route calculations, and dedicated customs liaison support.</p>
               <button className="relative z-10 text-xs font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest transition-colors">
                  Upgrade Plan &rarr;
               </button>
            </div>
            
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
               <h3 className="font-bold mb-4 flex items-center gap-2 text-slate-800">
                 <HardDrive className="w-5 h-5 text-indigo-500" /> Storage Capacity
               </h3>
               <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2">
                  <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
               </div>
               <p className="text-xs text-slate-500 font-medium">4.5GB / 10GB Data Processed</p>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-900">
                  <Key className="w-5 h-5 text-blue-600" /> Production API Tokens
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Use this secret token to authenticate requests across the ExpatShip routing engines. Never expose this key in client-side code.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                   <div className="flex-1 bg-slate-100 rounded-lg border border-slate-300 p-3 font-mono text-sm text-slate-700 overflow-x-auto whitespace-nowrap">
                      {isRotating ? 'Generating secure token sequence...' : apiKey}
                   </div>
                   <button 
                     onClick={handleCopy}
                     className="px-4 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
                   >
                     {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                     {copied ? 'Copied!' : 'Copy Key'}
                   </button>
                </div>
                
                <div className="mt-6 flex items-center gap-4">
                   <button 
                     onClick={rotateKey}
                     disabled={isRotating}
                     className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 disabled:opacity-50"
                   >
                     <RefreshCw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} /> 
                     Rotate Keys
                   </button>
                   <span className="text-xs text-slate-400">Last rotated: 4 days ago</span>
                </div>
             </div>

             <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-inner">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-green-400" /> Test Integration
                </h3>
                <div className="bg-black/50 p-4 rounded-lg overflow-x-auto">
<pre className="text-xs font-mono text-green-400">
{`curl -X POST https://api.expatship.com/v1/routes \\
  -H "Authorization: Bearer \${EP_SECRET_KEY}" \\
  -d '{"origin": "US", "dest": "FR", "weight": 4.5}'`}
</pre>
                </div>
             </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
