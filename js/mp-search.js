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
    { name: 'Nalsarovar Bird Sanctuary', key: 'nalsarovar', aliases: ['nalsarovar', 'nal sarovar', 'nal sarovar bird sanctuary', 'nalsarovar bird sanctuary', 'nalsarovar lake', 'bird sanctuary near ahmedabad', 'flamingo gujarat', 'pelican gujarat'], type: 'Wetland birding & seasonal nature trip', url: 'cities/india/gujarat/nalsarovar.html' },
    { name: 'Lonavala–Khandala', key: 'lonavala-khandala', aliases: ['lonavala', 'lonavla', 'khandala', 'lonavala khandala', 'karla caves', 'bhaja caves', 'pawna lake', 'pawana lake', 'lion point', 'lion’s point'], type: 'Hills, caves & Sahyadri views', url: 'cities/india/maharashtra/lonavala-khandala.html' },
    { name: 'Mumbai', key: 'mumbai', aliases: ['bombay', 'mumbai city', 'gateway of india', 'marine drive', 'elephanta caves', 'colaba', 'csmt', 'chhatrapati shivaji maharaj terminus'], type: 'Harbour, heritage & sea-facing city route', url: 'cities/india/maharashtra/mumbai.html' },
    { name: 'Mahabaleshwar–Panchgani', key: 'mahabaleshwar-panchgani', aliases: ['mahabaleshwar', 'mahabal', 'panchgani', 'mahableshwar', 'mahabaleshwar panchgani', 'venna lake', 'wilson point', 'arthurs seat', 'arthur seat', 'elephants head point', 'kates point', 'table land', 'parsi point', 'sydney point', 'mapro garden'], type: 'Hill circuit, viewpoints & strawberry country', url: 'cities/india/maharashtra/mahabaleshwar-panchgani.html' },
    { name: 'Chhatrapati Sambhajinagar–Ellora', key: 'chhatrapati-sambhajinagar-ellora', aliases: ['chhatrapati sambhajinagar', 'chhatrapati sambhaji nagar', 'sambhajinagar', 'sambhaji nagar', 'aurangabad', 'aurangabad maharashtra', 'ellora', 'ellora caves', 'verul', 'kailasa temple', 'kailash temple', 'daulatabad', 'daulatabad fort', 'devgiri', 'deogiri', 'bibi ka maqbara', 'ghrishneshwar', 'grishneshwar'], type: 'Heritage city, Ellora caves & fort planning', url: 'cities/india/maharashtra/chhatrapati-sambhajinagar-ellora.html' },
    { name: 'Nashik–Trimbakeshwar', key: 'nashik-trimbakeshwar', aliases: ['nashik', 'nasik', 'nasik maharashtra', 'nashik maharashtra', 'trimbakeshwar', 'trimbak', 'trimbakeshwar temple', 'panchavati', 'ramkund', 'ram kund', 'kalaram temple', 'sita gufa', 'sita cave', 'pandavleni', 'pandav leni', 'pandavleni caves', 'trirashmi caves', 'sula vineyards', 'sula vineyard', 'gangapur dam', 'saptashrungi', 'anjaneri'], type: 'Panchavati, Trimbakeshwar & cave travel plan', url: 'cities/india/maharashtra/nashik-trimbakeshwar.html' },
    { name: 'Pune–Sinhagad', key: 'pune-sinhagad', aliases: ['pune', 'poona', 'pune maharashtra', 'sinhagad', 'sinhgad', 'sinhagad fort', 'sinhgad fort', 'shaniwar wada', 'dagdusheth', 'dagduseth', 'dagdusheth ganpati', 'raja dinkar kelkar museum', 'kelkar museum', 'aga khan palace', 'parvati hill', 'pataleshwar', 'khadakwasla', 'shivneri'], type: 'Peshwa heritage, city culture & fort travel plan', url: 'cities/india/maharashtra/pune-sinhagad.html' },
    { name: 'Tadoba–Andhari Tiger Reserve', key: 'tadoba', aliases: ['tadoba', 'tadoba andhari', 'tadoba andhari tiger reserve', 'tadoba tiger reserve', 'tadoba safari', 'tadoba national park', 'tadoba maharashtra', 'moharli', 'moharli gate', 'kolara', 'kolara gate', 'navegaon', 'navegaon gate', 'tadoba booking', 'tiger safari maharashtra'], type: 'Tiger reserve, official safari & gate-side stay plan', url: 'cities/india/maharashtra/tadoba.html' },
    { name: 'Alibaug', key: 'alibaug', aliases: ['alibaug', 'alibag', 'alibagh', 'alibaug maharashtra', 'alibag maharashtra', 'kolaba fort', 'kolaba fort alibaug', 'alibaug beach', 'varsoli', 'varsoli beach', 'kihim', 'kihim beach', 'mandwa', 'mandwa jetty', 'nagaon beach alibaug', 'akshi beach', 'chaul', 'kanakeshwar'], type: 'Coast, sea fort & practical beach travel plan', url: 'cities/india/maharashtra/alibaug.html' },
    { name: 'Shirdi', key: 'shirdi', aliases: ['shirdi', 'shirdi maharashtra', 'shirdi sai baba', 'sai baba shirdi', 'sai baba temple', 'shirdi sai baba temple', 'samadhi mandir', 'sai samadhi mandir', 'dwarkamai', 'dwarakamai', 'chavadi', 'chawadi', 'gurusthan', 'lendi bagh', 'shani shingnapur', 'sainagar shirdi', 'sainagar shirdi railway station'], type: 'Sai Baba darshan, temple complex & pilgrimage plan', url: 'cities/india/maharashtra/shirdi.html' },
    { name: 'Matheran', key: 'matheran', aliases: ['matheran', 'matheran maharashtra', 'matheran hill station', 'dasturi naka', 'dasturi', 'matheran market', 'charlotte lake', 'charlotte lake matheran', 'pisarnath temple', 'louisa point', 'louise point', 'panorama point', 'echo point matheran', 'alexander point', 'one tree hill', 'matheran toy train', 'neral matheran train'], type: 'Car-free hill station, lake & viewpoint walking plan', url: 'cities/india/maharashtra/matheran.html' },
    { name: 'Ganpatipule', key: 'ganpatipule', aliases: ['ganpatipule', 'ganpati pule', 'ganpatipule maharashtra', 'ganpati pule maharashtra', 'ganpatipule temple', 'shree ganpatipule mandir', 'ganpatipule beach', 'bhandarpule', 'bhandarpule beach', 'malgund', 'keshavsut memorial', 'keshavsut smriti mandir', 'jaigad fort', 'aare ware beach', 'arey ware beach', 'ratnagiri ganpatipule'], type: 'Ganpati temple, Konkan coast & beach travel plan', url: 'cities/india/maharashtra/ganpatipule.html' },
    { name: 'Kolhapur', key: 'kolhapur', aliases: ['kolhapur', 'kolapur', 'kolhapur maharashtra', 'mahalaxmi temple kolhapur', 'mahalakshmi temple kolhapur', 'ambabai temple', 'rankala lake', 'new palace kolhapur', 'bhavani mandap', 'panhala', 'panhala fort', 'panhala gad', 'jyotiba temple', 'radhanagari'], type: 'Mahalaxmi temple, heritage, Rankala & Panhala fort plan', url: 'cities/india/maharashtra/kolhapur.html' },
    { name: 'Ajanta Caves', key: 'ajanta', aliases: ['ajanta', 'ajanta caves', 'ajanta cave', 'ajanta maharashtra', 'ajanta aurangabad', 'ajanta sambhajinagar', 'ajanta jalgaon', 'waghora river', 'cave 1 ajanta', 'cave 2 ajanta', 'ajanta paintings', 'ajanta frescoes', 'buddhist caves ajanta'], type: 'UNESCO Buddhist caves, paintings & full-day heritage plan', url: 'cities/india/maharashtra/ajanta.html' },
    { name: 'Bhandardara', key: 'bhandardara', aliases: ['bhandardara', 'bhandara dara', 'bhandardara maharashtra', 'arthur lake', 'bhandardara lake', 'wilson dam', 'umbrella falls', 'randha falls', 'randha waterfall', 'kalsubai', 'kalsubai peak', 'bari village', 'amruteshwar temple', 'ratanwadi', 'ratangad', 'sandhan valley'], type: 'Lake, waterfalls & Sahyadri travel plan', url: 'cities/india/maharashtra/bhandardara.html' },
    { name: 'Mysuru', key: 'mysuru', aliases: ['mysore', 'mysuru karnataka', 'mysore karnataka', 'mysore palace', 'mysuru palace', 'amba vilas palace', 'chamundi hill', 'chamundeshwari temple', 'brindavan gardens', 'krs dam', 'devaraja market', 'jaganmohan palace', 'st philomenas church', 'mysore zoo', 'srirangapatna'], type: 'Royal heritage, Chamundi Hill & garden evening', url: 'cities/india/karnataka/mysuru.html' },
    { name: 'Hampi', key: 'hampi', aliases: ['hampi karnataka', 'hampi ruins', 'hampi temple', 'virupaksha temple', 'virupaksha temple hampi', 'vittala temple', 'vijaya vittala temple', 'stone chariot', 'hampi stone chariot', 'lotus mahal', 'elephant stables hampi', 'royal enclosure hampi', 'hemakuta hill', 'hampi bazaar', 'anegundi', 'sanapur', 'matanga hill'], type: 'UNESCO ruins, temples & royal heritage route', url: 'cities/india/karnataka/hampi.html' },
    { name: 'Coorg / Madikeri', key: 'coorg-madikeri', aliases: ['coorg', 'kodagu', 'madikeri', 'coorg karnataka', 'madikeri karnataka', 'abbey falls', 'abbi falls', 'rajas seat', "raja's seat", 'madikeri fort', 'omkareshwara temple madikeri', 'dubare', 'dubare elephant camp', 'kaveri nisargadhama', 'nisargadhama', 'golden temple coorg', 'namdroling monastery', 'bylakuppe', 'talakaveri', 'talacauvery', 'bhagamandala', 'mandalpatti', 'tadiandamol', 'iruppu falls'], type: 'Coffee hills, waterfalls & Kodagu road plan', url: 'cities/india/karnataka/coorg-madikeri.html' },
    { name: 'Gokarna', key: 'gokarna', aliases: ['gokarna', 'gokarna karnataka', 'gokarna beach', 'om beach', 'om beach gokarna', 'kudle beach', 'kudle', 'half moon beach gokarna', 'half moon beach', 'paradise beach gokarna', 'paradise beach', 'gokarna temple', 'mahabaleshwar temple gokarna', 'mahabaleshwar mandir gokarna', 'maha ganapati temple gokarna', 'kotitirtha', 'koti teertha', 'mirjan fort', 'yana caves', 'yana', 'gokarna road station'], type: 'Temple town, beaches & practical coastal route', url: 'cities/india/karnataka/gokarna.html' },
    { name: 'Kabini / Nagarhole', key: 'kabini-nagarhole', aliases: ['kabini', 'kabini karnataka', 'kabini safari', 'kabini wildlife', 'kabini backwaters', 'nagarhole', 'nagarahole', 'nagarhole national park', 'nagarahole national park', 'nagarhole tiger reserve', 'nagarahole tiger reserve', 'nagarhole safari', 'nagarahole safari', 'kabini boat safari', 'kabini river lodge', 'kakanakote', 'kakanakote gate', 'nanachi', 'nanachi gate', 'veeranahosahalli', 'veeranahosahalli gate'], type: 'Official safari, forest stay & backwaters plan', url: 'cities/india/karnataka/kabini-nagarhole.html' }
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
