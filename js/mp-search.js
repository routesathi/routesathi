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
    { name: 'Dwarka', key: 'dwarka', aliases: ['dwaraka', 'dwarka gujarat', 'dwarika', 'dwaraka'], type: 'Dwarkadhish, temples & coast', url: 'cities/india/gujarat/dwarka.html' },
    { name: 'Somnath', key: 'somnath', aliases: ['somanath', 'somnath temple', 'somnath gujarat'], type: 'Jyotirlinga, coast & pilgrimage', url: 'cities/india/gujarat/somnath.html' },
    { name: 'Gir–Sasan', key: 'gir-sasan', aliases: ['gir', 'sasan gir', 'gir national park', 'gir safari'], type: 'Asiatic lions & official safari', url: 'cities/india/gujarat/gir-sasan.html' },
    { name: 'Ekta Nagar / Statue of Unity', key: 'ekta-nagar', aliases: ['statue of unity', 'ekta nagar', 'kevadia', 'kevadiya'], type: 'Landmark, Narmada & family travel', url: 'cities/india/gujarat/ekta-nagar.html' },
    { name: 'Rann of Kutch / Dhordo', key: 'rann-of-kutch', aliases: ['rann of kutch', 'white rann', 'white rann of kutch', 'dhordo', 'kutch', 'rann utsav'], type: 'White desert, culture & seasonal travel', url: 'cities/india/gujarat/rann-of-kutch.html' },
    { name: 'Jamnagar', key: 'jamnagar', aliases: ['jam nagar', 'lakhota', 'marine national park jamnagar'], type: 'Lake city, heritage & marine nature', url: 'cities/india/gujarat/jamnagar.html' },
    { name: 'Patan–Modhera', key: 'patan-modhera', aliases: ['patan', 'modhera', 'rani ki vav', 'rani ki baoli', 'sun temple modhera'], type: 'Stepwell, Patola & Sun Temple heritage', url: 'cities/india/gujarat/patan-modhera.html' },
    { name: 'Junagadh', key: 'junagadh', aliases: ['junagarh', 'girnar', 'upar kot', 'uparcot', 'mahabat maqbara'], type: 'Fort city, Girnar & heritage', url: 'cities/india/gujarat/junagadh.html' },
    { name: 'Surat', key: 'surat', aliases: ['dumas', 'surat castle', 'dutch cemetery surat'], type: 'Port heritage, food & coast', url: 'cities/india/gujarat/surat.html' },
    { name: 'Bhuj', key: 'bhuj', aliases: ['bhuj kutch', 'aina mahal', 'prag mahal', 'bhujodi', 'smritivan', 'kutch museum'], type: 'Kutch heritage, crafts & memorial', url: 'cities/india/gujarat/bhuj.html' },
    { name: 'Saputara', key: 'saputara', aliases: ['saputara lake', 'gira falls', 'gira waterfall', 'waghai', 'waghai botanical garden', 'dang hill station'], type: 'Hill station, lake & Dang nature', url: 'cities/india/gujarat/saputara.html' },
    { name: 'Champaner–Pavagadh', key: 'champaner-pavagadh', aliases: ['champaner', 'pavagadh', 'pavagad', 'kalika mata', 'kalika mata temple', 'jami masjid champaner', 'jama masjid champaner', 'kevda masjid'], type: 'UNESCO heritage & pilgrimage', url: 'cities/india/gujarat/champaner-pavagadh.html' },
    { name: 'Dholavira', key: 'dholavira', aliases: ['dholavira gujarat', 'dholavira kutch', 'harappan city', 'harappan city gujarat', 'indus valley dholavira', 'dholavira museum', 'khadir island'], type: 'UNESCO Harappan city & archaeology', url: 'cities/india/gujarat/dholavira.html' },
    { name: 'Mandvi', key: 'mandvi', aliases: ['mandvi kutch', 'mandvi beach', 'mandavi', 'vijay vilas palace', 'vijay vilas', 'mandvi shipyard', 'mandvi shipbuilding', 'topansar lake'], type: 'Royal coast, ships & beach', url: 'cities/india/gujarat/mandvi.html' },
    { name: 'Palitana', key: 'palitana', aliases: ['palitana gujarat', 'shatrunjaya', 'shatrunjay', 'shatrunjaya hill', 'palitana jain temple', 'adinath temple palitana', 'chaumukhji tunk'], type: 'Jain pilgrimage & temple hill', url: 'cities/india/gujarat/palitana.html' },
    { name: 'Little Rann of Kutch', key: 'little-rann-of-kutch', aliases: ['little rann', 'little rann of kutch', 'wild ass sanctuary', 'indian wild ass', 'khur', 'bajana', 'zainabad', 'rann safari'], type: 'Wild ass, birding & salt desert', url: 'cities/india/gujarat/little-rann-of-kutch.html' },
    { name: 'Velavadar Blackbuck National Park', key: 'velavadar', aliases: ['velavadar', 'velavadar blackbuck', 'blackbuck national park', 'blackbuck park gujarat', 'velavadar national park', 'bhavnagar blackbuck', 'velavadar bird sanctuary'], type: 'Blackbuck grassland & winter birding', url: 'cities/india/gujarat/velavadar.html' },
    { name: 'Porbandar', key: 'porbandar', aliases: ['porbandar gujarat', 'kirti mandir porbandar', 'gandhi birthplace', 'sudama mandir', 'porbandar beach', 'porbandar chowpatty', 'porbandar bird sanctuary'], type: 'Gandhi heritage, coast & birding', url: 'cities/india/gujarat/porbandar.html' },
    { name: 'Rajkot', key: 'rajkot', aliases: ['rajkot gujarat', 'kaba gandhi no delo', 'gandhi smriti rajkot', 'watson museum', 'jubilee garden rajkot', 'bangdi bazaar', 'rotary dolls museum'], type: 'Gandhi heritage, museums & city culture', url: 'cities/india/gujarat/rajkot.html' },
    { name: 'Nalsarovar Bird Sanctuary', key: 'nalsarovar', aliases: ['nalsarovar', 'nal sarovar', 'nal sarovar bird sanctuary', 'nalsarovar bird sanctuary', 'nalsarovar lake', 'bird sanctuary near ahmedabad', 'flamingo gujarat', 'pelican gujarat'], type: 'Wetland birding & seasonal nature trip', url: 'cities/india/gujarat/nalsarovar.html' }
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
      list.innerHTML = '<div class="search-empty">No exact guide yet. Try Gwalior, Jaipur, Ahmedabad, Somnath, Vadodara, Dwarka or Jaisalmer.</div>';
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
