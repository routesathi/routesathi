(() => {
  const publicGuides = new Set([
    'gwalior', 'bhopal', 'indore', 'ujjain', 'omkareshwar', 'maheshwar',
    'orchha', 'jabalpur', 'khajuraho', 'mandu', 'pachmarhi', 'kanha',
    'bandhavgarh', 'pench', 'panna', 'satpura'
  ]);
  const match = location.pathname.match(/\/cities\/india\/mp\/([^/]+)\.html$/);
  if (!match || !publicGuides.has(match[1]) || document.querySelector('.rs-share-plan')) return;

  const title = document.querySelector('h1')?.textContent.replace(/\s+/g, ' ').trim() || document.title;
  const url = location.href;
  const shareText = `RouteSathi guide: ${title}\nDay-wise plan, maps and practical travel notes.\n${url}`;
  const section = document.createElement('section');
  section.className = 'rs-share-plan';
  section.innerHTML = `
    <div><p class="eyebrow">TAKE THIS PLAN WITH YOU</p><h2>Going together?<br>Share the route.</h2><p>Send this guide to your family, travel partner or driver before the trip starts.</p></div>
    <div class="rs-share-actions"><a class="rs-whatsapp" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(shareText)}">Share on WhatsApp ↗</a><button type="button" class="rs-copy-plan">Copy plan link</button><small class="rs-copy-note" aria-live="polite"></small></div>`;

  const plans = document.querySelector('.plans');
  if (plans) plans.insertAdjacentElement('afterend', section);
  else document.querySelector('main')?.append(section);

  section.querySelector('.rs-copy-plan').addEventListener('click', async () => {
    const note = section.querySelector('.rs-copy-note');
    try {
      await navigator.clipboard.writeText(url);
      note.textContent = 'Link copied. Paste it anywhere.';
    } catch {
      window.prompt('Copy this RouteSathi plan link:', url);
    }
  });
})();
