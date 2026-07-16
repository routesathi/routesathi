(() => {
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
})();
