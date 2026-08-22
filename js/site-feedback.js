(() => {
  // RouteSathi Google Analytics 4: loaded once on every page that uses this shared file.
  const gaId = 'G-Z4Y98QPC6J';
  const hasGoogleTag = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  if (!window.__routeSathiGaLoaded) {
    window.__routeSathiGaLoaded = true;
    if (!hasGoogleTag) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.append(gaScript);
    }
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaId);
  }

  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfP4Y6uX8kzm2hHp0S-Tw9y8nqujFOVUKpZRgCJp8VTkpHShg/viewform?usp=publish-editor';
  const openHindi = () => location.href = `https://translate.google.com/translate?sl=en&tl=hi&u=${encodeURIComponent(location.href)}`;

  if (!document.querySelector('#feedbackOpen')) {
    const feedback = document.createElement('button');
    feedback.id = 'feedbackOpen'; feedback.className = 'route-feedback'; feedback.type = 'button';
    feedback.textContent = '✦ Feedback / Report an issue';
    feedback.setAttribute('aria-label', 'Open RouteSathi feedback form');
    feedback.addEventListener('click', () => window.open(formUrl, '_blank', 'noopener'));
    document.body.append(feedback);
  }

  if (!document.querySelector('[data-language-toggle]')) {
    const language = document.createElement('button');
    language.className = 'route-language'; language.type = 'button'; language.textContent = 'हिंदी';
    language.setAttribute('aria-label', 'पूरी वेबसाइट हिंदी में देखें');
    language.addEventListener('click', openHindi); document.body.append(language);
  }

  const footer = document.querySelector('footer');
  if (footer && !footer.querySelector('[data-route-privacy]')) {
    const privacy = document.createElement('a');
    privacy.href = '/privacy.html';
    privacy.className = 'route-legal-link';
    privacy.dataset.routePrivacy = 'true';
    privacy.textContent = 'Privacy & travel disclaimer';
    footer.append(privacy);
  }
  if (footer && !footer.querySelector('[data-route-about]')) {
    const about = document.createElement('a');
    about.href = '/about.html';
    about.className = 'route-legal-link';
    about.dataset.routeAbout = 'true';
    about.textContent = 'About RouteSathi';
    footer.append(about);
  }
  if (footer && !footer.querySelector('[data-route-instagram]')) {
    const instagram = document.createElement('a');
    instagram.href = 'https://www.instagram.com/routesathi/';
    instagram.target = '_blank';
    instagram.rel = 'noopener noreferrer';
    instagram.className = 'route-legal-link';
    instagram.dataset.routeInstagram = 'true';
    instagram.textContent = 'Follow @routesathi on Instagram ↗';
    footer.append(instagram);
  }

  const isCity = location.pathname.includes('/cities/india/mp/');
  // Keep the main itinerary action consistent across every city guide.
  if (isCity) {
    const planButton = document.querySelector('a.primary-btn[href="#plans"], a.sh-button[href="#plans"]');
    if (planButton) planButton.innerHTML = 'Pick your number of days <span aria-hidden="true">&rarr;</span>';
  }
  if (isCity && !document.querySelector('.route-checklist')) {
    const main = document.querySelector('main');
    if (main) {
      const box = document.createElement('section'); box.className = 'route-checklist';
      box.innerHTML = '<strong>Before you go / निकलने से पहले</strong><p>Opening time, weekly closure, entry ticket and weather check kar लें. Map route save करें, पानी साथ रखें, और किसी बदलाव की जानकारी मिले तो नीचे Feedback / Report an issue से बताएं.</p><p class="route-updated">RouteSathi guide update: 16 July 2026 · Timings can change, so verify before leaving.</p>';
      main.prepend(box);
    }
  }

  // Every guide should lead naturally to other useful RouteSathi guides.
  // This keeps city pages connected without filling the header with too many links.
  const relatedGuides = {
    gwalior: [['Orchha', 'orchha'], ['Khajuraho', 'khajuraho'], ['Bhopal', 'bhopal']],
    shivpuri: [['Gwalior', 'gwalior'], ['Orchha', 'orchha'], ['Khajuraho', 'khajuraho']],
    bhopal: [['Sanchi / nearby heritage', 'orchha'], ['Pachmarhi', 'pachmarhi'], ['Jabalpur', 'jabalpur']],
    indore: [['Ujjain', 'ujjain'], ['Mandu', 'mandu'], ['Maheshwar', 'maheshwar']],
    ujjain: [['Indore', 'indore'], ['Mandu', 'mandu'], ['Omkareshwar', 'omkareshwar']],
    pachmarhi: [['Satpura / Madhai', 'satpura'], ['Jabalpur', 'jabalpur'], ['Bhopal', 'bhopal']],
    jabalpur: [['Panna', 'panna'], ['Kanha', 'kanha'], ['Pachmarhi', 'pachmarhi']],
    khajuraho: [['Panna', 'panna'], ['Orchha', 'orchha'], ['Gwalior', 'gwalior']],
    mandu: [['Maheshwar', 'maheshwar'], ['Indore', 'indore'], ['Omkareshwar', 'omkareshwar']],
    orchha: [['Khajuraho', 'khajuraho'], ['Gwalior', 'gwalior'], ['Panna', 'panna']],
    omkareshwar: [['Maheshwar', 'maheshwar'], ['Indore', 'indore'], ['Ujjain', 'ujjain']],
    maheshwar: [['Mandu', 'mandu'], ['Indore', 'indore'], ['Omkareshwar', 'omkareshwar']],
    kanha: [['Pench', 'pench'], ['Bandhavgarh', 'bandhavgarh'], ['Jabalpur', 'jabalpur']],
    panna: [['Khajuraho', 'khajuraho'], ['Bandhavgarh', 'bandhavgarh'], ['Jabalpur', 'jabalpur']],
    satpura: [['Pachmarhi', 'pachmarhi'], ['Pench', 'pench'], ['Bhopal', 'bhopal']],
    bandhavgarh: [['Panna', 'panna'], ['Kanha', 'kanha'], ['Jabalpur', 'jabalpur']],
    pench: [['Kanha', 'kanha'], ['Satpura / Madhai', 'satpura'], ['Pachmarhi', 'pachmarhi']]
  };
  if (isCity && !document.querySelector('.route-related-guides')) {
    const slug = location.pathname.split('/').pop().replace('.html', '');
    const links = relatedGuides[slug];
    const main = document.querySelector('main');
    if (main && links) {
      const section = document.createElement('section');
      section.className = 'route-related-guides';
      section.innerHTML = `<p class="eyebrow">KEEP EXPLORING MP</p><h2>Planning more than<br>one destination?</h2><p>Use these connected guides next, or browse every RouteSathi destination.</p><div>${links.map(([name, key]) => `<a href="/cities/india/mp/${key}.html">${name} <span>→</span></a>`).join('')}<a class="route-all-guides" href="/cities/mp-destinations.html">All MP guides <span>→</span></a></div>`;
      main.append(section);
    }
  }
  if (isCity && !document.querySelector('style[data-route-related-guides]')) {
    const relatedStyle = document.createElement('style');
    relatedStyle.dataset.routeRelatedGuides = 'true';
    relatedStyle.textContent = '.route-related-guides{padding:72px 12%;background:#f7f1e5;color:#183b35}.route-related-guides h2{font:600 clamp(34px,4vw,54px)/1 "Playfair Display",serif;letter-spacing:-1.5px;margin:8px 0 14px}.route-related-guides>p:not(.eyebrow){max-width:580px;color:#60736b;line-height:1.65}.route-related-guides>div{display:flex;flex-wrap:wrap;gap:10px;margin-top:25px}.route-related-guides a{background:#fffdf5;color:#183b35;text-decoration:none;padding:13px 15px;font-size:13px;font-weight:700;border:1px solid #e0ddcf}.route-related-guides a:hover{background:#dbe87b}.route-related-guides a span{color:#d85e39}.route-related-guides .route-all-guides{background:#183b35;color:#fff}.route-related-guides .route-all-guides span{color:#dbe87b}@media(max-width:650px){.route-related-guides{padding:56px 8%}.route-related-guides>div{display:grid;grid-template-columns:1fr}.route-related-guides a{text-align:center}}';
    document.head.append(relatedStyle);
  }

  if (location.pathname.endsWith('/cities/india/mp/bhopal.html') && !document.querySelector('script[data-bhopal-tools]')) {
    const script = document.createElement('script');
    script.src = '/js/bhopal-tools.js'; script.dataset.bhopalTools = 'true'; document.body.append(script);
  }
  if (location.pathname.endsWith('/cities/india/mp/gwalior.html') && !document.querySelector('script[data-gwalior-routes]')) {
    const script = document.createElement('script');
    script.src = '/js/gwalior-map-routes.js'; script.dataset.gwaliorRoutes = 'true'; document.body.append(script);
  }
  if (location.pathname.endsWith('/cities/india/mp/ujjain.html') && !document.querySelector('script[data-ujjain-gwalior-style]')) {
    const script = document.createElement('script');
    script.src = '/js/ujjain-gwalior-style.js'; script.dataset.ujjainGwaliorStyle = 'true'; document.body.append(script);
  }
  if (location.pathname.endsWith('/cities/india/mp/pachmarhi.html') && !document.querySelector('script[data-pachmarhi-gwalior-layout]')) {
    const script = document.createElement('script');
    script.src = '/js/pachmarhi-gwalior-layout.js'; script.dataset.pachmarhiGwaliorLayout = 'true'; document.body.append(script);
  }
  if ((location.pathname.endsWith('/cities/india/mp/indore.html') || location.pathname.endsWith('/cities/india/mp/ujjain.html')) && !document.querySelector('script[data-nearby-trips]')) {
    const script = document.createElement('script');
    script.src = '/js/nearby-trips.js'; script.dataset.nearbyTrips = 'true'; document.body.append(script);
  }
  if (location.pathname.endsWith('/cities/mp.html') && !document.querySelector('script[data-wildlife-section]')) {
    const script = document.createElement('script');
    script.src = '/js/wildlife-section.js'; script.dataset.wildlifeSection = 'true'; document.body.append(script);
  }
  if (location.pathname.match(/\/cities\/india\/mp\/(gwalior|bhopal|indore|ujjain|omkareshwar|maheshwar|orchha|jabalpur|khajuraho|mandu|pachmarhi)\.html$/) && !document.querySelector('script[data-arrive-smart]')) {
    const script = document.createElement('script');
    script.src = '/js/arrive-smart.js'; script.dataset.arriveSmart = 'true'; document.body.append(script);
  }
  if (location.pathname.match(/\/cities\/india\/mp\/.+\.html$/) && !document.querySelector('script[data-share-plan]')) {
    const script = document.createElement('script');
    script.src = '/js/share-plan.js'; script.dataset.sharePlan = 'true'; document.body.append(script);
  }

  const photoCovers = {
    '/cities/india/mp/maheshwar.html': { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MaheshwarFort.jpg?width=1600', credit: 'Photo: Dusanesurbhi · CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:MaheshwarFort.jpg' },
    '/cities/india/mp/omkareshwar.html': { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Omkareshwar.JPG?width=1600', credit: 'Photo: Ssriram mt · Public domain', source: 'https://commons.wikimedia.org/wiki/File:Omkareshwar.JPG' }
  };
  const cover = photoCovers[location.pathname];
  if (cover) {
    const hero = document.querySelector('.g-hero');
    if (hero) {
      hero.style.backgroundImage = `linear-gradient(120deg,rgba(20,50,45,.72),rgba(85,115,86,.42)),url('${cover.url}')`;
      hero.style.backgroundSize = 'cover'; hero.style.backgroundPosition = 'center';
      const aside = hero.querySelector('aside');
      if (aside && !aside.querySelector('.route-photo-credit')) {
        const credit = document.createElement('a'); credit.className = 'route-photo-credit'; credit.href = cover.source; credit.target = '_blank'; credit.rel = 'noopener'; credit.textContent = cover.credit;
        credit.style.cssText = 'display:block;margin-top:12px;font-size:10px;line-height:1.35;color:inherit;opacity:.75;text-decoration:underline'; aside.append(credit);
      }
    }
  }
})();
