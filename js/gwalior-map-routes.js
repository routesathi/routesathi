(() => {
  const strip = document.querySelector('#one .route-strip');
  if (!strip || document.querySelector('.gwalior-map-route')) return;
  const link = document.createElement('a');
  link.className = 'gwalior-map-route'; link.target = '_blank'; link.rel = 'noopener';
  link.href = 'https://www.google.com/maps/dir/?api=1&origin=Nayi+Sadak+Gwalior&destination=Maharaj+Bada+Gwalior&travelmode=driving&waypoints=Gopachal+Parvat+Gwalior%7CGwalior+Fort%7CGujari+Mahal+Gwalior%7CJai+Vilas+Palace+Gwalior';
  link.textContent = '↗ Open 1-day blue route in Maps';
  strip.insertAdjacentElement('afterend', link);
  const style = document.createElement('style');
  style.textContent = '.gwalior-map-route{display:table;margin:13px 0 0;background:#e7f2ff;border:1px solid #9bbfe8;border-radius:7px;padding:10px 13px;color:#0d5797;font:700 13px DM Sans,sans-serif;text-decoration:none}@media print{.gwalior-map-route{display:none!important}}';
  document.head.appendChild(style);
})();
