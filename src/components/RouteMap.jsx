import React from 'react';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { ZONES } from '../utils/rateEngine';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function RouteMap({ originCode, destCode }) {
  const origin = ZONES[originCode];
  const dest = ZONES[destCode];

  return (
    <div className="w-full bg-navy-950 rounded-xl overflow-hidden shadow-inner relative" style={{ height: "350px" }}>
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 130 }} width={800} height={350}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1e284d" // navy-800
                stroke="#2c3b73" // navy-600
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#23305c" }, // navy-700
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {origin && (
          <Marker coordinates={origin.coordinates}>
            <circle r={6} fill="#3b82f6" />
            <circle r={12} fill="#3b82f6" opacity={0.3} className="animate-ping" />
            <text textAnchor="middle" y={-12} style={{ fill: "#fff", fontSize: "12px", fontWeight: "bold" }}>
              {origin.name}
            </text>
          </Marker>
        )}

        {dest && (
          <Marker coordinates={dest.coordinates}>
            <circle r={6} fill="#10b981" />
            <circle r={12} fill="#10b981" opacity={0.3} className="animate-ping" />
            <text textAnchor="middle" y={22} style={{ fill: "#fff", fontSize: "12px", fontWeight: "bold" }}>
              {dest.name}
            </text>
          </Marker>
        )}

        {origin && dest && (
          <Line
            from={origin.coordinates}
            to={dest.coordinates}
            stroke="#fcd34d" // amber-300
            strokeWidth={2}
            strokeLinecap="round"
            style={{
              strokeDasharray: "4 4",
              animation: "dash 5s linear infinite"
            }}
          />
        )}
      </ComposableMap>
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
      <div className="absolute bottom-4 left-4 text-xs font-medium bg-navy-900/80 text-navy-300 px-3 py-1.5 rounded-full border border-navy-700 backdrop-blur-sm">
        International Tracking Topology Active
      </div>
    </div>
  );
}
