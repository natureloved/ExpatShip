import React, { forwardRef } from 'react';
import { Globe } from 'lucide-react';

const CommercialInvoice = forwardRef(({ trackingId, formData, origin, dest, date }, ref) => {
  return (
    <div ref={ref} className="bg-white text-black p-8 w-full max-w-4xl mx-auto font-sans">
      {/* Header */}
      <div className="flex justify-between items-start border-b-2 border-black pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-8 h-8 text-black" />
            <h1 className="text-3xl font-bold tracking-tighter">EXPATSHIP</h1>
          </div>
          <p className="text-sm">International Logistics Engine</p>
          <p className="text-sm">100 Global Way, Metro City, 90210</p>
        </div>
        <div className="text-right">
          <h2 className="text-4xl font-bold uppercase tracking-wider mb-2">Commercial Invoice</h2>
          <p className="font-bold">Tracking / AWB No: <span className="font-mono">{trackingId || 'PENDING'}</span></p>
          <p>Date of Export: {date || new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Addresses */}
      <div className="grid grid-cols-2 gap-12 mb-8">
        <div>
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 uppercase text-sm">Shipper / Exporter</h3>
          <p className="font-medium">Acme Global Corporation</p>
          <p className="text-sm">Logistics Departure Terminal</p>
          <p className="text-sm font-bold mt-1">Origin Zone: {origin || 'N/A'}</p>
        </div>
        <div>
          <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 uppercase text-sm">Consignee</h3>
          <p className="font-medium">International Receiving Co.</p>
          <p className="text-sm">Tax ID / Passport: {formData?.taxId || 'N/A'}</p>
          <p className="text-sm font-bold mt-1">Destination Zone: {dest || 'N/A'}</p>
        </div>
      </div>

      {/* Shipment Details Table */}
      <div className="mb-8 overflow-hidden rounded border border-black">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 border-b border-black">
            <tr>
              <th className="p-3 font-bold uppercase">Description of Goods</th>
              <th className="p-3 font-bold uppercase">HS Code</th>
              <th className="p-3 font-bold uppercase text-center">Qty</th>
              <th className="p-3 font-bold uppercase text-right">Unit Value</th>
              <th className="p-3 font-bold uppercase text-right">Total Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-3">Automated Logistics Commodity ({formData?.exportReason || 'Commercial'})</td>
              <td className="p-3 font-mono">{formData?.hsCode || 'XXXX.XX'}</td>
              <td className="p-3 text-center">1</td>
              <td className="p-3 text-right">${parseFloat(formData?.itemValue || 0).toFixed(2)}</td>
              <td className="p-3 text-right font-bold">${parseFloat(formData?.itemValue || 0).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals & Declarations */}
      <div className="grid grid-cols-2 gap-12">
        <div className="text-sm">
          <h3 className="font-bold uppercase mb-2">Export Declaration</h3>
          <p className="mb-4">
            These commodities, technology, or software were exported from the origin territory in accordance with the Export Administration Regulations. Diversion contrary to law is strictly prohibited.
          </p>
          <div className="border-t border-black pt-8 mt-12 w-64 text-center">
            <p className="mb-1 text-xs uppercase">Authorized Signature</p>
          </div>
        </div>
        
        <div>
          <div className="border border-black p-4 rounded bg-gray-50">
            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal:</span>
              <span>${parseFloat(formData?.itemValue || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Customs Duty Estimate (15%):</span>
              <span>${(parseFloat(formData?.itemValue || 0) * 0.15).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-black pt-2 mt-2">
              <span>Total Declared (USD):</span>
              <span>${(parseFloat(formData?.itemValue || 0) * 1.15).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CommercialInvoice;
