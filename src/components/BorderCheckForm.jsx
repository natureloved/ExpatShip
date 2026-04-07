import React from 'react';
import { AlertCircle, Tag, FileText, Fingerprint } from 'lucide-react';

const HS_CODES = [
  { code: '8517.12', desc: 'Smartphones & Telephones' },
  { code: '8471.30', desc: 'Portable Computers (Laptops)' },
  { code: '6203.42', desc: 'Men\'s Cotton Trousers' },
  { code: '9503.00', desc: 'Toys & Scale Models' },
  { code: '3304.99', desc: 'Beauty & Skincare Products' }
];

export default function BorderCheckForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
        <AlertCircle className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-slate-900">Customs & Border Compliance</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Item Value */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Declared Item Value (USD) *</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-slate-500 font-medium">$</span>
            <input 
              type="number" 
              name="itemValue"
              value={formData.itemValue}
              onChange={handleChange}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
              required
            />
          </div>
        </div>

        {/* HS Code */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400" /> Harmonized System (HS) Code *
          </label>
          <select 
            name="hsCode"
            value={formData.hsCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none bg-white"
            required
          >
            <option value="">Select Category...</option>
            {HS_CODES.map(c => (
              <option key={c.code} value={c.code}>{c.code} - {c.desc}</option>
            ))}
          </select>
        </div>

        {/* Export Reason */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-400" /> Export Reason *
          </label>
          <select 
            name="exportReason"
            value={formData.exportReason}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none bg-white"
            required
          >
            <option value="">Select Reason...</option>
            <option value="Commercial">Commercial Purpose (B2B/B2C)</option>
            <option value="Gift">Personal Gift</option>
            <option value="Return">Merchandise Return</option>
            <option value="Sample">Commercial Sample</option>
          </select>
        </div>

        {/* Tax/Passport */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
            <Fingerprint className="w-4 h-4 text-slate-400" /> Recipient Tax ID / Passport No. *
          </label>
          <input 
            type="text" 
            name="taxId"
            value={formData.taxId}
            onChange={handleChange}
            placeholder="Required for international clearance"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
            required
          />
        </div>
      </div>
    </div>
  );
}
