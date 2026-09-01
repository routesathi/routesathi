(() => {
  const guides = [
    { name: 'Gwalior', key: 'gwalior', type: 'Fort, palace & heritage route' },
    { name: 'Shivpuri', key: 'shivpuri', type: 'Forest, lakes & Scindia heritage' },
    { name: 'Bhopal', key: 'bhopal', type: 'Lakes, museums & old city' },
    { name: 'Indore', key: 'indore', type: 'Food, markets & city life' },
    { name: 'Ujjain', key: 'ujjain', type: 'Temples & spiritual trip' },
    { name: 'Pachmarhi', key: 'pachmarhi', aliases: ['pachmari', 'pachmadi', 'pachmadi'], type: 'Hills, caves & waterfalls' },
    { name: 'Jabalpur', key: 'jabalpur', type: 'Marble Rocks & Narmada' },
    { name: 'Khajuraho', key: 'khajuraho', type: 'Temple art & history' },
    { name: 'Mandu', key: 'mandu', type: 'Palaces, forts & viewpoints' },
    { name: 'Orchha', key: 'orchha', type: 'Palaces & Betwa river' },
    { name: 'Omkareshwar', key: 'omkareshwar', aliases: ['omkareswar', 'omkarshwar', 'omkareshvar'], type: 'Jyotirlinga & Narmada island' },
    { name: 'Maheshwar', key: 'maheshwar', type: 'Ghats & handloom heritage' },
    { name: 'Kanha', key: 'kanha', type: 'Tiger reserve & safari' },
    { name: 'Panna', key: 'panna', type: 'Safari & Khajuraho connection' },
    { name: 'Satpura / Madhai', key: 'satpura', aliases: ['madhai', 'madhai'], type: 'Forest, safari & boat trip' },
    { name: 'Bandhavgarh', key: 'bandhavgarh', type: 'Tiger safari & fort landscape' },
    { name: 'Pench', key: 'pench', type: 'Tiger reserve & forest stay' },
    { name: 'Jaipur', key: 'jaipur', type: 'Pink City, palaces & forts', url: 'cities/india/rajasthan/jaipur.html' },
    { name: 'Udaipur', key: 'udaipur', type: 'Lakes, palaces & romantic city views', url: 'cities/india/rajasthan/udaipur.html' },
    { name: 'Jodhpur', key: 'jodhpur', type: 'Blue City & Mehrangarh Fort', url: 'cities/india/rajasthan/jodhpur.html' },
    { name: 'Jaisalmer', key: 'jaisalmer', aliases: ['jaisalmer', 'jaisalmer'], type: 'Golden fort & desert routes', url: 'cities/india/rajasthan/jaisalmer.html' },
    { name: 'Pushkar', key: 'pushkar', type: 'Lake, temple & market lanes', url: 'cities/india/rajasthan/pushkar.html' },
    { name: 'Ranthambore', key: 'ranthambore', aliases: ['ranthambor', 'ranthambhore'], type: 'Tiger reserve & safari', url: 'cities/india/rajasthan/ranthambore.html' },
    { name: 'Chittorgarh', key: 'chittorgarh', aliases: ['chittor', 'chittorghar'], type: 'Hill fort & heritage', url: 'cities/india/rajasthan/chittorgarh.html' },
    { name: 'Mount Abu', key: 'mountabu', aliases: ['mount abu', 'mt abu'], type: 'Hill station & Dilwara Temples', url: 'cities/india/rajasthan/mount-abu.html' },
    { name: 'Bikaner', key: 'bikaner', type: 'Desert heritage & Junagarh Fort', url: 'cities/india/rajasthan/bikaner.html' },
    { name: 'Bundi', key: 'bundi', type: 'Stepwells, murals & palace', url: 'cities/india/rajasthan/bundi.html' },
    { name: 'Kota', key: 'kota', type: 'Chambal, heritage & Garadia views', url: 'cities/india/rajasthan/kota.html' },
    { name: 'Kumbhalgarh', key: 'kumbhalgarh', aliases: ['kumbhalgar'], type: 'Fort, hills & sanctuary', url: 'cities/india/rajasthan/kumbhalgarh.html' },
    { name: 'Ranakpur', key: 'ranakpur', type: 'Jain heritage & Aravallis', url: 'cities/india/rajasthan/ranakpur.html' },
    { name: 'Bharatpur', key: 'bharatpur', type: 'Keoladeo birds & wetlands', url: 'cities/india/rajasthan/bharatpur.html' },
    { name: 'Ajmer', key: 'ajmer', type: 'Dargah, heritage & Ana Sagar', url: 'cities/india/rajasthan/ajmer.html' },
    { name: 'Alwar–Sariska', key: 'alwar-sariska', aliases: ['alwar', 'sariska', 'alwar sariska'], type: 'Fort, tiger reserve & heritage', url: 'cities/india/rajasthan/alwar-sariska.html' },
    { name: 'Ahmedabad', key: 'ahmedabad', aliases: ['ahmedabad', 'ahmadabad', 'amdavad', 'ahemdabad'], type: 'Old city, Ashram & heritage', url: 'cities/india/gujarat/ahmedabad.html' },
    { name: 'Vadodara', key: 'vadodara', aliases: ['vadodara', 'baroda', 'vadodra', 'vadodera', 'varodra', 'varodara', 'vadodara gujarat'], type: 'Palace, museums & Champaner', url: 'cities/india/gujarat/vadodara.html' },
    { name: 'Dwarka', key: 'dwarka', aliases: ['dwaraka', 'dwarka gujarat', 'dwarika', 'dwaraka'], type: 'Dwarkadhish, temples & coast', url: 'cities/india/gujarat/dwarka.html' }
  ];
  const form = document.querySelector('#citySearch');
  const input = document.querySelector('#cityInput');
  const list = document.querySelector('#searchSuggestions');
  const message = document.querySelector('#searchMessage');
  if (!form || !input || !list || !message) return;

  const clean = value => value.toLowerCase().replace(/[^a-z]/g, '');
  const distance = (one, two) => {
    const a = clean(one), b = clean(two);
    const rows = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) rows[0][j] = j;
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return rows[a.length][b.length];
  };
  const score = (guide, query) => {
    const terms = [guide.name, guide.key, ...(guide.aliases || [])].map(clean);
    const q = clean(query);
    if (!q) return 99;
    if (terms.some(term => term.startsWith(q) || term.includes(q))) return 0;
    return Math.min(...terms.map(term => distance(term, q)));
  };
  const matches = query => guides.map(guide => ({ guide, score: score(guide, query) })).filter(item => item.score === 0 || (clean(query).length >= 4 && item.score <= 2)).sort((a, b) => a.score - b.score || a.guide.name.localeCompare(b.guide.name)).slice(0, 5);
  const openGuide = guide => { window.location.href = guide.url || `cities/india/mp/${guide.key}.html`; };
  const render = query => {
    const results = matches(query);
    if (!clean(query)) { list.innerHTML = ''; list.classList.remove('show'); return results; }
    if (!results.length) {
      list.innerHTML = '<div class="search-empty">No exact guide yet. Try Gwalior, Jaipur, Ahmedabad, Vadodara, Dwarka or Jaisalmer.</div>';
      list.classList.add('show'); return results;
    }
    // Use buttons instead of standard links so results look like a clean search menu.
    list.innerHTML = results.map(({ guide }) => `<button type="button" data-city-guide="${guide.key}">${guide.name}</button>`).join('');
    list.querySelectorAll('[data-city-guide]').forEach(button => {
      button.addEventListener('click', () => openGuide(guides.find(guide => guide.key === button.dataset.cityGuide)));
    });
    list.classList.add('show'); return results;
  };
  input.addEventListener('input', () => { message.textContent = ''; render(input.value); });
  input.addEventListener('focus', () => render(input.value));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const results = render(input.value);
    if (results.length) {
      message.textContent = results[0].score ? `Showing the closest guide: ${results[0].guide.name}.` : `Opening ${results[0].guide.name} guide…`;
      openGuide(results[0].guide);
    } else message.textContent = 'Try a different spelling or choose a guide from the suggestions.';
  });
})();
