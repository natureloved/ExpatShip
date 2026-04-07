import React, { useState, useMemo } from 'react';
import { RefreshCcw, MapPin, Calculator, Send, AlertOctagon, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import BorderCheckForm from './BorderCheckForm';
import TrackingMock from './TrackingMock';
import RouteMap from './RouteMap';
import CommercialInvoice from './CommercialInvoice';
import { ZONES, calculateRate, convertFromUSD, formatCurrency } from '../utils/rateEngine';

export default function ShipmentWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    weight: '1',
    itemValue: '',
    hsCode: '',
    exportReason: '',
    taxId: ''
  });
  
  const [currencyToggle, setCurrencyToggle] = useState('USD');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const originMatchDestError = formData.origin && formData.destination && formData.origin === formData.destination;
  
  const canGoToStep2 = formData.origin && formData.destination && !originMatchDestError && Number(formData.weight) > 0;
  const canGoToStep3 = formData.itemValue && formData.hsCode && formData.exportReason && formData.taxId;

  const rateEstimate = useMemo(() => {
    if (canGoToStep2) {
      return calculateRate(formData.origin, formData.destination, formData.weight, formData.itemValue);
    }
    return null;
  }, [formData.origin, formData.destination, formData.weight, formData.itemValue, canGoToStep2]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `ES-INTL-${Math.floor(1000 + Math.random() * 9000)}`;
    setTrackingId(id);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="space-y-6">
        <div className="bg-green-50 text-green-800 p-6 border border-green-200 rounded-xl flex items-center gap-4 shadow-sm">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Shipment Successfully Processed</h3>
            <p className="text-sm text-green-700">Your international export documentation has been filed.</p>
          </div>
        </div>
        <TrackingMock 
          trackingId={trackingId} 
          origin={ZONES[formData.origin]?.name} 
          dest={ZONES[formData.destination]?.name} 
        />
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
           <button 
             onClick={() => window.print()}
             className="flex-1 bg-white hover:bg-slate-50 text-slate-800 font-bold py-3 px-6 rounded-lg shadow-sm border border-slate-300 transition-colors flex items-center justify-center gap-2 print:hidden"
           >
             Download Commercial Invoice
           </button>
           <button 
             onClick={() => { 
               setIsSubmitted(false); 
               setStep(1); 
               setFormData({origin: '', destination: '', weight: '1', itemValue: '', hsCode: '', exportReason: '', taxId: ''}); 
             }}
             className="flex-1 bg-navy-600 hover:bg-navy-700 text-white font-bold py-3 px-6 rounded-lg shadow-sm transition-colors print:hidden"
           >
             Create New Transport
           </button>
        </div>

        {/* Hidden Global Print Registry Container */}
        <div className="hidden print:block absolute top-0 left-0 w-full min-h-screen bg-white z-[9999] m-0 p-0">
           <CommercialInvoice 
             trackingId={trackingId} 
             origin={ZONES[formData.origin]?.name} 
             dest={ZONES[formData.destination]?.name} 
             formData={formData} 
           />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200 flex flex-col pt-6">
      {/* Progress Wizard Header */}
      <div className="px-6 md:px-8 pb-6 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
           <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 1 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-400'}`}>1</div>
           <div className={`w-8 md:w-16 h-1 rounded ${step > 1 ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
           
           <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 2 ? 'bg-blue-600 text-white shadow-sm' : (step > 2 ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-400')}`}>2</div>
           <div className={`w-8 md:w-16 h-1 rounded ${step > 2 ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
           
           <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 3 ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-400'}`}>3</div>
        </div>
        <div className="text-slate-500 font-medium text-sm hidden md:block">
           {step === 1 && "Route Selection"}
           {step === 2 && "Border Compliance Details"}
           {step === 3 && "Route Tracking & Final Quote"}
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6 min-h-[400px]">
         {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
               <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-navy-900">Map Your Route</h2>
                   <p className="text-sm text-slate-500">Pick the cross-border origin and destination.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Origin Country</label>
                  <select name="origin" value={formData.origin} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-500 outline-none">
                    <option value="">Select Origin...</option>
                    {Object.entries(ZONES).map(([code, data]) => <option key={code} value={code}>{data.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Destination</label>
                  <select name="destination" value={formData.destination} onChange={handleChange} className={`w-full px-4 py-3 bg-slate-50 border ${originMatchDestError ? 'border-red-300 focus:ring-red-500 bg-red-50' : 'border-slate-200 focus:ring-navy-500'} rounded-xl focus:ring-2 outline-none`}>
                    <option value="">Select Destination...</option>
                    {Object.entries(ZONES).map(([code, data]) => <option key={code} value={code}>{data.name}</option>)}
                  </select>
                </div>
              </div>
              {originMatchDestError && (
                 <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex gap-3">
                   <AlertOctagon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                   <div>
                     <p className="font-bold">Validation Error: Invalid Domestic Route</p>
                     <p className="text-sm mt-1">TransMeridian focuses exclusively on international cross-border logistics. Origin and Destination cannot match.</p>
                   </div>
                 </div>
              )}
              <div className="mt-6 md:w-1/2 pr-3">
                 <label className="block text-sm font-medium text-slate-700 mb-2">Total Package Weight (kg)</label>
                 <input type="number" name="weight" value={formData.weight} onChange={handleChange} step="0.1" min="0.1" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-navy-500"/>
              </div>
            </div>
         )}

         {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
               <BorderCheckForm formData={formData} setFormData={setFormData} />
            </div>
         )}

         {step === 3 && rateEstimate && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
               <RouteMap originCode={formData.origin} destCode={formData.destination} />
               
               <div className="bg-navy-950 text-white p-6 rounded-2xl border border-navy-800 flex flex-col md:flex-row justify-between gap-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4 w-full h-full">
                     <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  
                  <div className="flex-1 space-y-4 relative z-10 w-full">
                    <div className="flex items-center gap-3">
                      <Calculator className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-bold">Quote & Delivery Estimate</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-navy-200 max-w-sm">
                      <span className="text-slate-400">Base Transport Rate:</span> <span className="text-white text-right">{formatCurrency(convertFromUSD(rateEstimate.baseRate, currencyToggle), currencyToggle)}</span>
                      <span className="text-slate-400">Weight Charge:</span> <span className="text-white text-right">{formatCurrency(convertFromUSD(rateEstimate.weightCharge, currencyToggle), currencyToggle)}</span>
                      <span className="col-span-2 border-t border-navy-800 my-1"></span>
                      <span className="text-slate-400">Est. Customs Duty (15%):</span> <span className="text-amber-400 font-medium text-right">{formatCurrency(convertFromUSD(rateEstimate.customsDuty, currencyToggle), currencyToggle)}</span>
                      
                      <span className="col-span-2 pt-3 text-indigo-300 font-medium mt-1 border-t border-navy-800">
                        Target Delivery Protocol: <b className="text-white text-base ml-2 bg-indigo-500/20 px-2 py-0.5 rounded">{rateEstimate.etaString}</b>
                      </span>
                    </div>
                  </div>

                  <div className="md:text-right relative z-10 w-full md:w-auto">
                    <div className="flex items-center md:justify-end gap-2 mb-3">
                       <button onClick={() => setCurrencyToggle('USD')} className={`text-xs font-bold px-3 py-1.5 rounded transition ${currencyToggle === 'USD' ? 'bg-blue-600 text-white' : 'bg-navy-800 text-navy-300'}`}>USD</button>
                       <RefreshCcw className="w-4 h-4 text-navy-500" />
                       <button onClick={() => setCurrencyToggle(rateEstimate.destCurrency !== 'USD' ? rateEstimate.destCurrency : 'EUR')} className={`text-xs font-bold px-3 py-1.5 rounded transition ${currencyToggle !== 'USD' ? 'bg-blue-600 text-white' : 'bg-navy-800 text-navy-300'}`}>
                         {rateEstimate.destCurrency !== 'USD' ? rateEstimate.destCurrency : 'EUR'}
                       </button>
                    </div>
                    <p className="text-sm text-navy-300 tracking-wider">TOTAL PRICE</p>
                    <p className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tight mt-1">{formatCurrency(convertFromUSD(rateEstimate.totalUSD, currencyToggle), currencyToggle)}</p>
                  </div>
               </div>
            </div>
         )}
      </div>

      <div className="px-6 md:px-8 py-5 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center mt-auto">
         {step > 1 ? (
             <button onClick={() => setStep(s => s - 1)} className="w-full md:w-auto flex items-center justify-center gap-2 text-slate-600 font-medium hover:text-slate-900 transition-colors py-2 px-4 border border-slate-300 rounded-lg bg-white">
               <ArrowLeft className="w-4 h-4" /> Go Back
             </button>
         ) : <div className="hidden md:block"/>}

         {step < 3 ? (
             <button 
                onClick={() => setStep(s => s + 1)} 
                disabled={step === 1 ? !canGoToStep2 : !canGoToStep3}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-sm"
             >
               Next Phase <ArrowRight className="w-4 h-4" />
             </button>
         ) : (
             <button onClick={handleSubmit} className="w-full md:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-10 py-3 rounded-lg font-bold shadow-md shadow-green-600/30 transition-all uppercase tracking-wide">
               Procure Shipment <Send className="w-4 h-4" />
             </button>
         )}
      </div>
    </div>
  );
}
