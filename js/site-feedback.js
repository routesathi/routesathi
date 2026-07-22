(() => {
  // RouteSathi Google Analytics 4: loaded once on every page that uses this shared file.
  const gaId = 'G-L5NDQC69K8';
  if (!window.__routeSathiGaLoaded) {
    window.__routeSathiGaLoaded = true;
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.append(gaScript);
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

  const isCity = location.pathname.includes('/cities/india/mp/');
  if (isCity && !document.querySelector('.route-checklist')) {
    const main = document.querySelector('main');
    if (main) {
      const box = document.createElement('section'); box.className = 'route-checklist';
      box.innerHTML = '<strong>Before you go / निकलने से पहले</strong><p>Opening time, weekly closure, entry ticket and weather check kar लें. Map route save करें, पानी साथ रखें, और किसी बदलाव की जानकारी मिले तो नीचे Feedback / Report an issue से बताएं.</p><p class="route-updated">RouteSathi guide update: 16 July 2026 · Timings can change, so verify before leaving.</p>';
      main.prepend(box);
    }
  }

  if (location.pathname.endsWith('/cities/india/mp/bhopal.html') && !document.querySelector('script[data-bhopal-tools]')) {
    const script = document.createElement('script');
    script.src = '/routesathi/js/bhopal-tools.js'; script.dataset.bhopalTools = 'true'; document.body.append(script);
  }
  if (location.pathname.endsWith('/cities/india/mp/gwalior.html') && !document.querySelector('script[data-gwalior-routes]')) {
    const script = document.createElement('script');
    script.src = '/routesathi/js/gwalior-map-routes.js'; script.dataset.gwaliorRoutes = 'true'; document.body.append(script);
  }
  if (location.pathname.endsWith('/cities/india/mp/ujjain.html') && !document.querySelector('script[data-ujjain-gwalior-style]')) {
    const script = document.createElement('script');
    script.src = '/routesathi/js/ujjain-gwalior-style.js'; script.dataset.ujjainGwaliorStyle = 'true'; document.body.append(script);
  }
  if (location.pathname.endsWith('/cities/india/mp/pachmarhi.html') && !document.querySelector('script[data-pachmarhi-gwalior-layout]')) {
    const script = document.createElement('script');
    script.src = '/routesathi/js/pachmarhi-gwalior-layout.js'; script.dataset.pachmarhiGwaliorLayout = 'true'; document.body.append(script);
  }
  if ((location.pathname.endsWith('/cities/india/mp/indore.html') || location.pathname.endsWith('/cities/india/mp/ujjain.html')) && !document.querySelector('script[data-nearby-trips]')) {
    const script = document.createElement('script');
    script.src = '/routesathi/js/nearby-trips.js'; script.dataset.nearbyTrips = 'true'; document.body.append(script);
  }
  if (location.pathname.endsWith('/cities/mp.html') && !document.querySelector('script[data-wildlife-section]')) {
    const script = document.createElement('script');
    script.src = '/routesathi/js/wildlife-section.js'; script.dataset.wildlifeSection = 'true'; document.body.append(script);
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
