(() => {
  const anchor = document.querySelector('.start-here');
  if (!anchor || document.querySelector('#bhopal-plan-tools')) return;
  const choices = {
    family: { title: 'Family plan selected', text: 'Choose the 2-day plan: Van Vihar and the lake on Day 1, then old-city heritage and museums on Day 2. Keep afternoons relaxed and use cabs between circuits.', target: '#two' },
    heritage: { title: 'Heritage plan selected', text: 'Start with the one-day old-city route. If you have another day, choose only one: Sanchi, Bhimbetka or Bhojpur. Do not combine two heritage outings.', target: '#one' },
    budget: { title: 'Budget plan selected', text: 'Use the one-day route, eat in the old city, select public attractions where available and stay around MP Nagar/Rani Kamlapati for easier transport.', target: '#one' }
  };
  const panel = document.createElement('section');
  panel.id = 'bhopal-plan-tools';
  panel.innerHTML = '<div class="bhopal-tools-inner"><div><p class="eyebrow">MAKE IT YOUR TRIP</p><h2>Choose your travel style.</h2><p>Pick a plan and RouteSathi will show the best starting route.</p></div><div class="bhopal-tool-actions"><button type="button" data-choice="family">Family plan</button><button type="button" data-choice="heritage">Heritage plan</button><button type="button" data-choice="budget">Budget plan</button><button type="button" class="save-plan" data-save>Save / print plan</button></div><div class="bhopal-plan-result" aria-live="polite"><strong>Your route will appear here</strong><span>Select Family, Heritage or Budget to begin.</span></div></div>';
  anchor.insertAdjacentElement('afterend', panel);
  const result = panel.querySelector('.bhopal-plan-result');
  const setChoice = (key) => {
    const choice = choices[key];
    result.innerHTML = `<strong>${choice.title}</strong><span>${choice.text}</span><a href="${choice.target}">Open this route →</a>`;
    panel.querySelectorAll('[data-choice]').forEach(button => button.classList.toggle('selected', button.dataset.choice === key));
    localStorage.setItem('routesathi-bhopal-plan', key);
  };
  panel.querySelectorAll('[data-choice]').forEach(button => button.addEventListener('click', () => setChoice(button.dataset.choice)));
  panel.querySelector('[data-save]').addEventListener('click', () => window.print());
  const saved = localStorage.getItem('routesathi-bhopal-plan');
  if (saved && choices[saved]) setChoice(saved);
  const mapRoutes = [
    { selector: '#one .route-strip', label: 'Open 1-day blue route in Maps', url: 'https://www.google.com/maps/dir/?api=1&origin=Taj-ul-Masajid+Bhopal&destination=Upper+Lake+Bhopal&travelmode=driving&waypoints=Moti+Masjid+Bhopal%7CChowk+Bhopal%7CGauhar+Mahal+Bhopal%7CMadhya+Pradesh+Tribal+Museum+Bhopal' },
    { selector: '#two .split-days > div:first-child', label: 'Open Day 1 blue route in Maps', url: 'https://www.google.com/maps/dir/?api=1&origin=Van+Vihar+National+Park+Bhopal&destination=Sair+Sapata+Bhopal&travelmode=driving&waypoints=Indira+Gandhi+Rashtriya+Manav+Sangrahalaya+Bhopal%7CUpper+Lake+Bhopal' },
    { selector: '#two .split-days > div:last-child', label: 'Open Day 2 blue route in Maps', url: 'https://www.google.com/maps/dir/?api=1&origin=Taj-ul-Masajid+Bhopal&destination=Upper+Lake+Bhopal&travelmode=driving&waypoints=Moti+Masjid+Bhopal%7CChowk+Bhopal%7CMadhya+Pradesh+Tribal+Museum+Bhopal%7CBharat+Bhavan+Bhopal' }
  ];
  mapRoutes.forEach(route => {
    const target = document.querySelector(route.selector);
    if (!target || target.querySelector('.bhopal-map-route') || target.parentElement.querySelector('.bhopal-map-route')) return;
    const link = document.createElement('a'); link.className = 'bhopal-map-route'; link.target = '_blank'; link.rel = 'noopener'; link.href = route.url; link.textContent = `↗ ${route.label}`;
    if (target.matches('#two .split-days > div')) {
      target.append(link);
    } else {
      target.insertAdjacentElement('afterend', link);
    }
  });
  const style = document.createElement('style');
  style.textContent = `#bhopal-plan-tools{background:#f3f7f3;padding:56px 7vw 46px}.bhopal-tools-inner{max-width:1160px;margin:auto;display:grid;grid-template-columns:1.05fr 1fr;gap:25px;align-items:center}.bhopal-tools-inner h2{font-family:'Playfair Display',serif;font-size:clamp(28px,3.3vw,45px);margin:5px 0 10px;color:#163e35}.bhopal-tools-inner p{max-width:480px;color:#53645f;line-height:1.65}.bhopal-tool-actions{display:flex;flex-wrap:wrap;gap:10px}.bhopal-tool-actions button{border:1px solid #cbd9d0;border-radius:999px;background:#fff;color:#163e35;padding:12px 16px;font:600 14px 'DM Sans',sans-serif;cursor:pointer}.bhopal-tool-actions button:hover,.bhopal-tool-actions button.selected{background:#163e35;color:#fff;border-color:#163e35}.bhopal-tool-actions .save-plan{background:#d69142;color:#fff;border-color:#d69142}.bhopal-plan-result{grid-column:1/-1;border-left:4px solid #d69142;background:#fff;padding:17px 20px;display:grid;gap:5px;color:#52645f}.bhopal-plan-result strong{font-size:17px;color:#163e35}.bhopal-plan-result a{width:max-content;color:#af651f;font-weight:700;text-decoration:none;margin-top:5px}.bhopal-map-route{display:table;margin:13px 0 0;background:#e7f2ff;border:1px solid #9bbfe8;border-radius:7px;padding:10px 13px;color:#0d5797;font-weight:700;text-decoration:none}@media(max-width:700px){#bhopal-plan-tools{padding:40px 20px}.bhopal-tools-inner{grid-template-columns:1fr}}@media print{#bhopal-plan-tools,.route-feedback,.route-language{display:none!important}}`;
  document.head.appendChild(style);
})();
