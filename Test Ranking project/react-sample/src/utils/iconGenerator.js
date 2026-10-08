export function generateIcon(itemId, itemColor) {
  const svgIcons = {
    graphql: '<circle cx="24" cy="24" r="20" fill="currentColor"/><path d="M24 10 L32 14 L32 26 L24 30 L16 26 L16 14 Z" fill="%23fff" opacity="0.9"/>',
    microservices: '<rect x="10" y="10" width="8" height="8" fill="currentColor"/><rect x="20" y="10" width="8" height="8" fill="currentColor"/><rect x="30" y="10" width="8" height="8" fill="currentColor"/><rect x="10" y="20" width="8" height="8" fill="currentColor"/><rect x="20" y="20" width="8" height="8" fill="currentColor"/><rect x="30" y="20" width="8" height="8" fill="currentColor"/>',
    realtime: '<circle cx="24" cy="24" r="20" fill="currentColor"/><path d="M14 24 L24 16 L28 24 L34 14" stroke="%23fff" stroke-width="2" fill="none" stroke-linecap="round"/>',
    search: '<circle cx="24" cy="24" r="20" fill="currentColor"/><circle cx="20" cy="20" r="8" stroke="%23fff" stroke-width="2" fill="none"/><path d="M26 26 L32 32" stroke="%23fff" stroke-width="2" stroke-linecap="round"/>',
    serverless: '<path d="M24 6 L38 14 L38 30 L24 38 L10 30 L10 14 Z" fill="currentColor"/><text x="24" y="28" font-size="14" font-weight="bold" fill="%23fff" text-anchor="middle">λ</text>',
    storage: '<rect x="10" y="12" width="28" height="24" rx="2" fill="currentColor"/><line x1="10" y1="20" x2="38" y2="20" stroke="%23fff" stroke-width="1.5"/>',
    caching: '<circle cx="24" cy="24" r="20" fill="currentColor"/><path d="M18 18 L30 18 L30 30 L18 30 Z" fill="%23fff" opacity="0.7"/><circle cx="24" cy="24" r="3" fill="currentColor"/>',
    loadbalancing: '<circle cx="24" cy="24" r="20" fill="currentColor"/><circle cx="16" cy="18" r="3" fill="%23fff"/><circle cx="24" cy="18" r="3" fill="%23fff"/><circle cx="32" cy="18" r="3" fill="%23fff"/><path d="M24 21 L16 26 M24 21 L24 30 M24 21 L32 26" stroke="%23fff" stroke-width="1.5"/>',
    queues: '<rect x="12" y="14" width="10" height="10" fill="currentColor"/><rect x="24" y="12" width="10" height="10" fill="currentColor"/><rect x="36" y="14" width="10" height="10" fill="currentColor"/><path d="M22 19 L24 19 M34 17 L36 17" stroke="%23fff" stroke-width="1.5"/>',
    cdn: '<circle cx="24" cy="24" r="20" fill="currentColor"/><circle cx="24" cy="24" r="14" stroke="%23fff" stroke-width="1.5" fill="none"/><circle cx="24" cy="24" r="8" stroke="%23fff" stroke-width="1.5" fill="none"/><circle cx="24" cy="14" r="1.5" fill="%23fff"/><circle cx="32" cy="28" r="1.5" fill="%23fff"/><circle cx="16" cy="28" r="1.5" fill="%23fff"/>',
    sharding: '<rect x="10" y="10" width="8" height="14" fill="currentColor"/><rect x="20" y="10" width="8" height="14" fill="currentColor"/><rect x="30" y="10" width="8" height="14" fill="currentColor"/><rect x="12" y="28" width="6" height="6" fill="currentColor"/><rect x="22" y="28" width="6" height="6" fill="currentColor"/><rect x="32" y="28" width="6" height="6" fill="currentColor"/>',
    ratelimit: '<circle cx="24" cy="24" r="20" fill="currentColor"/><circle cx="24" cy="24" r="4" fill="%23fff"/><line x1="24" y1="10" x2="24" y2="38" stroke="%23fff" stroke-width="1" opacity="0.5"/><line x1="10" y1="24" x2="38" y2="24" stroke="%23fff" stroke-width="1" opacity="0.5"/>',
    default: '<circle cx="24" cy="24" r="20" fill="currentColor"/><text x="24" y="32" font-size="16" font-weight="bold" fill="%23fff" text-anchor="middle">★</text>',
  };

  const icon = svgIcons[itemId] || svgIcons.default;
  const svg = `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="24" height="24">${icon}</svg>`;
  const encoded = encodeURIComponent(svg).replace(/'/g, '%27');
  return `data:image/svg+xml,${encoded}`;
}

export function getIconForCategory(categoryId) {
  const icons = {
    systemdesign: {
      fill: '#e6b451',
      icon: 'M24 6 L42 15 L42 33 L24 42 L6 33 L6 15 Z'
    },
    watches: {
      fill: '#e6b451',
      icon: 'M24 8 C32.8 8 40 15.2 40 24 C40 32.8 32.8 40 24 40 C15.2 40 8 32.8 8 24 C8 15.2 15.2 8 24 8 M22 12 L22 16 M26 12 L26 16 M12 22 L16 22 M32 22 L36 22'
    },
    cars: {
      fill: '#e6b451',
      icon: 'M8 24 L10 14 L38 14 L40 24 L38 32 L10 32 Z M14 32 L14 36 M34 32 L34 36'
    },
    films: {
      fill: '#e6b451',
      icon: 'M6 10 L6 38 L42 38 L42 10 Z M10 14 L10 34 L38 34 L38 14 Z M18 24 L30 30 L30 18 Z'
    }
  };
  return icons[categoryId] || icons.systemdesign;
}
