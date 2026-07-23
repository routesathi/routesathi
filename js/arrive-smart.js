(() => {
  const guides = {
    gwalior: {
      arrive: 'Gwalior Junction is the most practical rail arrival; Gwalior Airport also works for flights. Keep your first stop light if you arrive after lunch.',
      stay: 'Lashkar/City Centre is a practical all-round base for station access, food and city sightseeing. Choose fort-side only if the fort is your main focus.',
      move: 'Use auto/cab in the city. Keep one cab for the fort circuit rather than trying to find a new vehicle after each stop.',
      comfort: 'Fort roads and monuments involve slopes, steps and walking. For elders or small children, keep the fort morning focused and do not overfill the day.',
      map: 'Gwalior Junction'
    },
    bhopal: {
      arrive: 'Rani Kamlapati and Bhopal Junction are both useful rail arrivals; Raja Bhoj Airport is the flight option. Decide your hotel side before you land.',
      stay: 'MP Nagar/Rani Kamlapati works well for transport. Lake-side suits a relaxed stay; Old City is better only when heritage-food is your main plan.',
      move: 'Lake-side and Old City are separate circuits. Use cab/auto between them; do not keep crossing the city just to save a small ride.',
      comfort: 'Museums and lake walks are easier for families and elders. Keep Old City lanes flexible, especially in busy prayer or market hours.',
      map: 'Rani Kamlapati Railway Station Bhopal'
    },
    indore: {
      arrive: 'Devi Ahilyabai Holkar Airport and Indore Junction are the usual arrivals. Sarwate Bus Stand is close to the rail station for many regional buses.',
      stay: 'Stay near Rajwada/Central Indore for heritage and Sarafa, or Vijay Nagar for a newer hotel-and-restaurant base. Pick one, not both.',
      move: 'Old Indore is best done with short walks and autos. Keep a cab only for a separate outer-city outing; city food areas have different peak hours.',
      comfort: 'For families and elders, use daytime food stops and a short Sarafa visit. Avoid forcing a late-night market after a full sightseeing day.',
      map: 'Indore Junction Railway Station'
    },
    ujjain: {
      arrive: 'Ujjain Junction is central for rail travellers. For flights, Indore Airport is the usual gateway; keep a buffer for the road transfer and darshan plan.',
      stay: 'Mahakal Road, Freeganj or the station side are practical bases. Stay close to the core if an early darshan or evening Ram Ghat matters.',
      move: 'Walk the Mahakal–Mahakal Lok–Harsiddhi–Ram Ghat core. Use one pre-agreed cab/auto for outer temples instead of depending on one-way rides.',
      comfort: 'Darshan queues, steps and festival crowds can be tiring. Seniors and children should use a slower plan with rest after any early-morning service.',
      map: 'Ujjain Junction Railway Station'
    },
    omkareshwar: {
      arrive: 'Most visitors come by road from Indore. Khandwa and Indore Junction are useful rail options; confirm your final road transfer before arriving.',
      stay: 'Stay close to the temple/ghat side when darshan is your priority. This saves repeated crossing and makes early-morning or evening visits easier.',
      move: 'The core is walkable but includes ghats, bridges and steps. Ask your driver to drop you at the correct access point, then continue on foot.',
      comfort: 'Pilgrimage days can be crowded. Keep water, easy footwear and a slower route for elders; never promise a fixed darshan time.',
      map: 'Omkareshwar Jyotirlinga Temple'
    },
    maheshwar: {
      arrive: 'Maheshwar is usually reached by road from Indore. Plan the last road transfer before you land or reach the nearest rail connection.',
      stay: 'A stay near the fort/ghats makes sunrise, evening aarti, market walks and handloom browsing much easier than a distant highway base.',
      move: 'The fort and ghats are best on foot. Use an auto/cab only for outer stops or when luggage, heat or mobility makes walking uncomfortable.',
      comfort: 'Ghats and fort areas have uneven surfaces and steps. Families should keep children close near the river; elders should use a relaxed riverside plan.',
      map: 'Ahilya Fort Maheshwar'
    },
    orchha: {
      arrive: 'Jhansi Junction is the most practical major rail gateway; Orchha is then a short road transfer. Confirm the last-mile cab/auto before leaving Jhansi.',
      stay: 'Stay around the fort/temple side for an easy first visit. It keeps the palace complex, Chaturbhuj Temple and evening Betwa area close together.',
      move: 'Walk the heritage core. Use an auto/cab for cenotaphs, river activities or any stop outside the central monument area.',
      comfort: 'Palace levels, temple stairs and uneven stone paths need slow walking. Choose one sunset place instead of rushing between river and monuments.',
      map: 'Jhansi Junction Railway Station'
    },
    jabalpur: {
      arrive: 'Jabalpur Junction is the main rail arrival and Dumna Airport is the flight option. Treat Bhedaghat as a separate outing, not a quick city detour.',
      stay: 'Choose a central city base for railway access and food. Stay closer to Bhedaghat only when Marble Rocks and Dhuandhar are the main purpose.',
      move: 'Use a cab for Bhedaghat/Marble Rocks. City sights can be grouped separately; do not keep moving between Bhedaghat and the city on the same day.',
      comfort: 'Boat rides, viewpoints and waterfall paths need weather awareness. Families and elders should keep the Bhedaghat day unhurried.',
      map: 'Jabalpur Junction Railway Station'
    },
    khajuraho: {
      arrive: 'Khajuraho Airport and Khajuraho Railway Station are close to town. For wider train connections, travellers may also use a larger railhead and continue by road.',
      stay: 'Stay near the Western Group for an easy first visit, evening sound-and-light planning and simple access to restaurants.',
      move: 'Walk the Western Group. Use an auto/cab for Eastern and Southern groups, Jain temples or a separate Panna outing.',
      comfort: 'Temple grounds are mostly manageable, but sun exposure can be strong. Start early, carry water and give elders shade/rest breaks.',
      map: 'Khajuraho Airport'
    },
    mandu: {
      arrive: 'Mandu is best reached by road, commonly via Indore/Dhar. Arrange a return vehicle or next transfer before reaching the plateau, especially after dark.',
      stay: 'Stay inside or close to the main Mandu monument zone so sunset points and early heritage starts do not require repeated long drives.',
      move: 'A cab/driver is the practical choice because monuments are spread out. Keep one side of Mandu together each day rather than chasing every monument.',
      comfort: 'Monuments have open grounds, steps and heat exposure. Families and elders should use a short list, shade breaks and a calm sunset stop.',
      map: 'Mandu Madhya Pradesh'
    },
    pachmarhi: {
      arrive: 'Pipariya is the most practical rail gateway, followed by a road transfer to Pachmarhi. Confirm your pickup before the train arrives, especially on weekends.',
      stay: 'Stay near the main market/cantonment for dinner, basic supplies and vehicle pickup. Do not choose a distant base if you have only two full days.',
      move: 'Town sights are manageable locally; forest-side points can need an authorised vehicle and permit. Confirm that day’s access before building your route.',
      comfort: 'Waterfalls, caves and viewpoints can mean steps, rocks and changing weather. Choose easier town sights for elders or young children when needed.',
      map: 'Pipariya Railway Station'
    }
  };

  const match = location.pathname.match(/\/cities\/india\/mp\/([^/]+)\.html$/);
  const guide = match && guides[match[1]];
  if (!guide || document.querySelector('.rs-arrive-smart')) return;

  const section = document.createElement('section');
  section.className = 'rs-arrive-smart';
  section.setAttribute('aria-labelledby', 'arriveSmartTitle');
  section.innerHTML = `
    <div class="rs-arrive-head">
      <div><p class="eyebrow">ARRIVE SMART</p><h2 id="arriveSmartTitle">Start calm.<br>Move easy.</h2></div>
      <p>Use this before the first sightseeing stop—so your arrival, stay and local movement do not waste a day.</p>
    </div>
    <div class="rs-arrive-grid">
      <article><b>01 · GET IN</b><h3>Arrive with a plan</h3><p>${guide.arrive}</p></article>
      <article><b>02 · SLEEP CLOSE</b><h3>Choose your area</h3><p>${guide.stay}</p></article>
      <article><b>03 · MOVE WELL</b><h3>Use the right ride</h3><p>${guide.move}</p></article>
      <article><b>04 · TRAVEL COMFORTABLY</b><h3>Family &amp; elder note</h3><p>${guide.comfort}</p></article>
    </div>
    <div class="rs-arrive-action"><span>Do not rely on old cab fares, timings or parking advice. Check the live route before leaving.</span><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(guide.map)}">Open arrival point in Maps ↗</a></div>`;

  const promise = document.querySelector('.promise');
  if (promise) promise.insertAdjacentElement('afterend', section);
  else document.querySelector('main')?.prepend(section);
})();
