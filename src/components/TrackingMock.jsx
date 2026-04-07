import React from 'react';
import { Package, Truck, Building2, CheckCircle, Plane, AlertCircle } from 'lucide-react';

export default function TrackingMock({ trackingId, origin, dest, status = 'IN TRANSIT' }) {
  const isDelivered = status === 'DELIVERED';
  
  const MILESTONES = [
    { id: 1, text: 'Export Documentation Verified', icon: Package, state: 'completed' },
    { id: 2, text: 'Arrived at International Sort Facility', icon: Building2, state: 'completed' },
    { id: 3, text: 'Cleared Customs', icon: CheckCircle, state: isDelivered ? 'completed' : 'current', note: !isDelivered ? 'Processing duties & taxes' : '' },
    { id: 4, text: 'Released for Local Delivery', icon: Truck, state: isDelivered ? 'completed' : 'pending' },
    { id: 5, text: 'Delivered', icon: CheckCircle, state: isDelivered ? 'completed' : 'pending' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className={`${isDelivered ? 'bg-green-600' : 'bg-navy-900'} p-6 text-white flex items-center justify-between transition-colors`}>
        <div>
          <p className={`${isDelivered ? 'text-green-100' : 'text-navy-300'} text-sm font-medium mb-1`}>
            {isDelivered ? 'Archived Shipment Tracking' : 'Active Shipment Tracking'}
          </p>
          <h2 className="text-2xl font-bold font-mono tracking-wider">{trackingId}</h2>
        </div>
        <div className="flex items-center gap-4 hidden sm:flex">
          <div className="text-right">
            <p className={`text-sm ${isDelivered ? 'text-green-200' : 'text-navy-300'}`}>Origin</p>
            <p className="font-bold">{origin || 'N/A'}</p>
          </div>
          <Plane className={`w-5 h-5 ${isDelivered ? 'text-green-200' : 'text-blue-400'}`} />
          <div>
            <p className={`text-sm ${isDelivered ? 'text-green-200' : 'text-navy-300'}`}>Destination</p>
            <p className="font-bold">{dest || 'N/A'}</p>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-slate-200" />
          
          <div className="space-y-8 relative">
            {MILESTONES.map((step, idx) => {
              const Icon = step.icon;
              const isCompleted = step.state === 'completed';
              const isCurrent = step.state === 'current';
              const isPending = step.state === 'pending';
              
              return (
                <div key={step.id} className="flex gap-6 items-start">
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-colors ${
                    isCompleted ? 'bg-green-500 text-white' : 
                    isCurrent ? 'bg-blue-500 text-white animate-pulse' : 
                    'bg-slate-100 text-slate-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="pt-2 flex-1">
                    <h3 className={`text-lg font-semibold transition-colors ${isPending ? 'text-slate-400' : 'text-slate-900'}`}>
                      {step.text}
                    </h3>
                    {step.note && (
                      <p className={`text-sm mt-1 bg-slate-50 inline-block px-3 py-1 rounded-md border text-slate-600 border-slate-200`}>
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
