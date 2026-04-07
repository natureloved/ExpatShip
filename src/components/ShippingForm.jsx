import React, { useState, useMemo } from 'react';
import { RefreshCcw, MapPin, Calculator, Send, AlertOctagon, CheckCircle2 } from 'lucide-react';
import BorderCheckForm from './BorderCheckForm';
import TrackingMock from './TrackingMock';
import { ZONES, calculateRate, convertFromUSD, formatCurrency, EXCHANGE_RATES } from '../utils/rateEngine';

export default function ShippingForm() {
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
  
  const rateEstimate = useMemo(() => {
    if (!originMatchDestError && formData.origin && formData.destination) {
      return calculateRate(formData.origin, formData.destination, formData.weight, formData.itemValue);
    }
    return null;
  }, [formData.origin, formData.destination, formData.weight, formData.itemValue, originMatchDestError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (originMatchDestError) return;
    
    // Generate mock tracking
    const id = `ES-INTL-${Math.floor(1000 + Math.random() * 9000)}`;
    setTrackingId(id);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="space-y-6">
        <div className="bg-green-50 text-green-800 p-4 border border-green-200 rounded-lg flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <div>
            <h3 className="font-bold">Shipment Successfully Processed</h3>
            <p className="text-sm">Your international export documentation has been filed.</p>
          </div>
        </div>
        <TrackingMock 
          trackingId={trackingId} 
          origin={ZONES[formData.origin]?.name} 
          dest={ZONES[formData.destination]?.name} 
        />
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-navy-600 hover:text-navy-900 font-medium underline"
        >
          Create Another Shipment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
      <div className="p-6 md:p-8 space-y-8">
        
        {/* Core Logistics */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <MapPin className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold text-navy-900">Route Details</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Origin Country</label>
              <select 
                name="origin" 
                value={formData.origin} 
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-500 outline-none transition-all"
                required
              >
                <option value="">Select Origin...</option>
                {Object.entries(ZONES).map(([code, data]) => (
                  <option key={`orig-${code}`} value={code}>{data.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Destination Country</label>
              <select 
                name="destination" 
                value={formData.destination} 
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-50 border ${originMatchDestError ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-navy-500'} rounded-xl focus:ring-2 outline-none transition-all`}
                required
              >
                <option value="">Select Destination...</option>
                {Object.entries(ZONES).map(([code, data]) => (
                  <option key={`dest-${code}`} value={code}>{data.name}</option>
                ))}
              </select>
            </div>
          </div>

          {originMatchDestError && (
             <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-start gap-3 animate-in fade-in zoom-in duration-300">
               <AlertOctagon className="w-5 h-5 flex-shrink-0 mt-0.5" />
               <div>
                 <p className="font-bold">Validation Error: Invalid Domestic Route</p>
                 <p className="text-sm mt-1">TransMeridian focuses exclusively on international cross-border logistics. Origin and destination cannot be the same.</p>
               </div>
             </div>
          )}

          <div className="mt-6 md:w-1/2 pr-3">
             <label className="block text-sm font-medium text-slate-700 mb-1">Package Weight (kg)</label>
             <input 
               type="number" 
               name="weight" 
               value={formData.weight} 
               onChange={handleChange}
               step="0.1"
               min="0.1"
               className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy-500 outline-none transition-all"
               required
             />
          </div>
        </section>

        {/* International Border Check Section */}
        {formData.origin && formData.destination && !originMatchDestError && (
           <BorderCheckForm formData={formData} setFormData={setFormData} />
        )}
      </div>

      {/* International Rate Engine UI */}
      {!originMatchDestError && rateEstimate && formData.itemValue && (
        <div className="bg-navy-950 text-white p-6 md:p-8 border-t-4 border-blue-500 relative overflow-hidden">
          {/* subtle background globe decoration */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-end">
            <div className="w-full md:w-auto flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <Calculator className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold tracking-wide">International Rate Engine Output</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-navy-200 max-w-sm drop-shadow">
                <div className="flex justify-between">
                  <span>Base Int. Rate:</span>
                  <span className="text-white">{formatCurrency(convertFromUSD(rateEstimate.baseRate, currencyToggle), currencyToggle)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Weight Charge:</span>
                  <span className="text-white">{formatCurrency(convertFromUSD(rateEstimate.weightCharge, currencyToggle), currencyToggle)}</span>
                </div>
                <div className="flex justify-between col-span-2 border-t border-navy-800 pt-2 border-dashed">
                  <span>Customs Duty (est. 15%):</span>
                  <span className="text-amber-400 font-medium">{formatCurrency(convertFromUSD(rateEstimate.customsDuty, currencyToggle), currencyToggle)}</span>
                </div>
              </div>
            </div>

            <div className="text-right w-full md:w-auto">
              <div className="flex items-center justify-end gap-3 mb-2">
                <button 
                  type="button"
                  onClick={() => setCurrencyToggle('USD')}
                  className={`text-xs font-bold px-2 py-1 rounded transition-colors ${currencyToggle === 'USD' ? 'bg-blue-600 text-white' : 'bg-navy-800 text-navy-400 hover:text-white'}`}
                >
                  USD
                </button>
                <RefreshCcw className="w-4 h-4 text-navy-500" />
                <button 
                  type="button"
                  onClick={() => setCurrencyToggle(rateEstimate.destCurrency !== 'USD' ? rateEstimate.destCurrency : 'EUR')}
                  className={`text-xs font-bold px-2 py-1 rounded transition-colors ${currencyToggle !== 'USD' ? 'bg-blue-600 text-white' : 'bg-navy-800 text-navy-400 hover:text-white'}`}
                >
                  {rateEstimate.destCurrency !== 'USD' ? rateEstimate.destCurrency : 'EUR'}
                </button>
              </div>
              
              <p className="text-sm text-navy-300 uppercase tracking-widest mb-1">Total Estimated Cost</p>
              <p className="text-4xl font-bold font-mono text-white mb-6">
                {formatCurrency(convertFromUSD(rateEstimate.totalUSD, currencyToggle), currencyToggle)}
              </p>
              
              <button 
                type="submit" 
                className="w-full md:w-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-8 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2"
              >
                Procure Shipment <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
