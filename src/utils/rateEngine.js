export const ZONES = {
  US: { name: 'United States', zone: 1, currency: 'USD', coordinates: [-95.7129, 37.0902] },
  CA: { name: 'Canada', zone: 1, currency: 'CAD', coordinates: [-106.3468, 56.1304] },
  GB: { name: 'United Kingdom', zone: 2, currency: 'GBP', coordinates: [-3.4360, 55.3781] },
  FR: { name: 'France', zone: 2, currency: 'EUR', coordinates: [2.2137, 46.2276] },
  DE: { name: 'Germany', zone: 2, currency: 'EUR', coordinates: [10.4515, 51.1657] },
  JP: { name: 'Japan', zone: 3, currency: 'JPY', coordinates: [138.2529, 36.2048] },
  AU: { name: 'Australia', zone: 3, currency: 'AUD', coordinates: [133.7751, -25.2744] },
  AE: { name: 'United Arab Emirates', zone: 4, currency: 'AED', coordinates: [53.8478, 23.4241] },
};

export function calculateRate(originCode, destCode, weight, itemValueUSD) {
  if (!originCode || !destCode || !ZONES[originCode] || !ZONES[destCode]) return null;
  
  const origin = ZONES[originCode];
  const dest = ZONES[destCode];
  
  // Base rate calculation
  let baseRate = 25; // Base international charge
  const zoneDiff = Math.abs(origin.zone - dest.zone);
  baseRate += (zoneDiff * 15);
  
  // Weight factor (assume kg) // Safe default 1kg
  const safeWeight = Math.max(Number(weight) || 1, 0.1);
  const weightCharge = safeWeight * 8.5;
  
  // Customs Duty Estimate (15% of item value)
  const safeValue = Math.max(Number(itemValueUSD) || 0, 0);
  const customsDuty = safeValue * 0.15;
  
  const total = baseRate + weightCharge + customsDuty;
  
  // Calculate ETA based on Zone difference
  const etaMin = 2 + (zoneDiff * 2);
  const etaMax = 4 + (zoneDiff * 3);
  const etaString = `${etaMin}-${etaMax} Business Days`;

  return {
    baseRate,
    weightCharge,
    customsDuty,
    totalUSD: total,
    destCurrency: dest.currency,
    etaString,
    zoneDiff
  };
}

// Mock exchange rates relative to 1 USD
export const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  CAD: 1.35,
  JPY: 151.20,
  AUD: 1.53,
  AED: 3.67
};

export function convertFromUSD(amountUSD, targetCurrency) {
  const rate = EXCHANGE_RATES[targetCurrency] || 1;
  return amountUSD * rate;
}

export function formatCurrency(amount, currencyCode) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
}
