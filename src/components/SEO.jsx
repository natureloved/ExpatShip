import React, { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = `${title} | ExpatShip Logistics`;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || "ExpatShip is the premier engine for cross-border logistics mapping and execution.");

    // Update Meta OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', `${title} | ExpatShip`);

  }, [title, description]);

  return null;
}
