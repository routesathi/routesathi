(() => {
  const anchor = document.querySelector('.start-here');
  if (!anchor || document.querySelector('#pachmarhi-plan-tools')) return;
  const plans = {
    family: { title: 'Family plan selected', text: 'Keep the arrival day light. On Day 1, choose Bee Fall only if everyone is comfortable with steps; otherwise use viewpoints and the lake. Keep Chauragarh optional, not compulsory.', target: '#town-day' },
    heritage: { title: 'Heritage plan selected', text: 'Prioritise Jata Shankar, Pandav Caves, Priyadarshini and the Mahadev/Gupt Mahadev extra day. Use the forest waterfall circuit only after permits are confirmed.', target: '#town-day' },
    budget: { title: 'Budget plan selected', text: 'Travel from Pipariya, stay near the market, use the two core days and share an authorised vehicle where permitted. Avoid adding a separate safari unless it is your main priority.', target: '#plans' }
  };
  const section = document.createElement('section'); section.id = 'pachmarhi-plan-tools';
  section.innerHTML = '<div class="pach-tools-inner"><div><p class="eyebrow">MAKE IT YOUR TRIP</p><h2>Choose your travel style.</h2><p>Get a simple starting route for your group and time.</p></div><div class="pach-tool-actions"><button type="button" data-plan="family">Family plan</button><button type="button" data-plan="heritage">Heritage plan</button><button type="button" data-plan="budget">Budget plan</button><button type="button" class="save-plan" data-save>Save / print plan</button></div><div class="pach-result" aria-live="polite"><strong>Your route will appear here</strong><span>Select a travel style to begin.</span></div></div>';
  anchor.insertAdjacentElement('afterend', section);
  const result = section.querySelector('.pach-result');
  const choose = key => { const plan = plans[key]; result.innerHTML = `<strong>${plan.title}</strong><span>${plan.text}</span><a href="${plan.target}">Open this route →</a>`; section.querySelectorAll('[data-plan]').forEach(b => b.classList.toggle('selected', b.dataset.plan === key)); localStorage.setItem('routesathi-pachmarhi-plan', key); };
  section.querySelectorAll('[data-plan]').forEach(b => b.addEventListener('click', () => choose(b.dataset.plan)));
  section.querySelector('[data-save]').addEventListener('click', () => window.print());
  const saved = localStorage.getItem('routesathi-pachmarhi-plan'); if (plans[saved]) choose(saved);
  const mapRoutes = [
    { selector: '#forest-day .route-strip', label: 'Open Day 1 blue route in Maps', url: 'https://www.google.com/maps/dir/?api=1&origin=Bison+Lodge+Pachmarhi&destination=Dhoopgarh+Pachmarhi&travelmode=driving&waypoints=Bee+Falls+Pachmarhi%7CApsara+Vihar+Pachmarhi%7CReechgarh+Pachmarhi' },
    { selector: '#town-day .route-strip', label: 'Open Day 2 blue route in Maps', url: 'https://www.google.com/maps/dir/?api=1&origin=Jata+Shankar+Pachmarhi&destination=Pachmarhi+Lake&travelmode=driving&waypoints=Handi+Khoh+Pachmarhi%7CPriyadarshini+Point+Pachmarhi%7CPandav+Caves+Pachmarhi' }
  ];
  mapRoutes.forEach(route => {
    const strip = document.querySelector(route.selector);
    if (!strip || strip.parentElement.querySelector('.pach-map-route')) return;
    const link = document.createElement('a'); link.className = 'pach-map-route'; link.target = '_blank'; link.rel = 'noopener'; link.href = route.url; link.textContent = `↗ ${route.label}`;
    strip.insertAdjacentElement('afterend', link);
  });
  const style = document.createElement('style'); style.textContent = `#pachmarhi-plan-tools{background:#f3f7f3;padding:56px 7vw 46px}.pach-tools-inner{max-width:1160px;margin:auto;display:grid;grid-template-columns:1.05fr 1fr;gap:25px;align-items:center}.pach-tools-inner h2{font-family:'Playfair Display',serif;font-size:clamp(28px,3.3vw,45px);margin:5px 0 10px;color:#163e35}.pach-tools-inner p{max-width:490px;color:#53645f;line-height:1.65}.pach-tool-actions{display:flex;flex-wrap:wrap;gap:10px}.pach-tool-actions button{border:1px solid #cbd9d0;border-radius:999px;background:#fff;color:#163e35;padding:12px 16px;font:600 14px 'DM Sans',sans-serif;cursor:pointer}.pach-tool-actions button:hover,.pach-tool-actions button.selected{background:#163e35;color:#fff;border-color:#163e35}.pach-tool-actions .save-plan{background:#d69142;color:#fff;border-color:#d69142}.pach-result{grid-column:1/-1;border-left:4px solid #d69142;background:#fff;padding:17px 20px;display:grid;gap:5px;color:#52645f}.pach-result strong{font-size:17px;color:#163e35}.pach-result a{width:max-content;color:#af651f;font-weight:700;text-decoration:none;margin-top:5px}.pach-map-route{display:table;margin:13px 0 0;background:#e7f2ff;border:1px solid #9bbfe8;border-radius:7px;padding:10px 13px;color:#0d5797;font-weight:700;text-decoration:none}@media(max-width:700px){#pachmarhi-plan-tools{padding:40px 20px}.pach-tools-inner{grid-template-columns:1fr}}@media print{#pachmarhi-plan-tools,.route-feedback,.route-language{display:none!important}}`; document.head.appendChild(style);
})();
