document.addEventListener('DOMContentLoaded', function () {
  var facts = document.querySelector('.state-facts strong');
  if (facts) facts.textContent = '8 guides';
  var coming = document.querySelector('.state-coming');
  if (coming) coming.innerHTML = '<strong>Coming next:</strong> More Rajasthan guides will be added only after their route, map links and practical travel notes are complete—not as empty cards.';
  var grid = document.querySelector('.state-city-grid');
  if (!grid) return;
  var cards = [
    ['pushkar.html', 'SPIRITUAL TOWN · 1–2 DAYS', 'Pushkar', 'Lake, Brahma Temple, Savitri hill and market lanes planned at a respectful, walkable pace.'],
    ['ranthambore.html', 'WILDLIFE · 2–3 DAYS', 'Ranthambore', 'Official safari booking, realistic wildlife time and a plan that never promises a tiger sighting.'],
    ['chittorgarh.html', 'HILL FORT · 1–2 DAYS', 'Chittorgarh', 'Vijay Stambh, palaces and temples in one sensible fort route—without zig-zagging all day.'],
    ['mount-abu.html', 'HILL STATION · 1–3 DAYS', 'Mount Abu', 'Nakki Lake, Dilwara Temples, Guru Shikhar and Achalgarh in a practical hill-road plan.']
  ];
  cards.forEach(function (card) {
    if (grid.querySelector('a[href="cities/india/rajasthan/' + card[0] + '"]')) return;
    grid.insertAdjacentHTML('beforeend', '<a class="state-city-card" href="cities/india/rajasthan/' + card[0] + '"><div class="state-city-image"></div><div class="state-city-copy"><b>' + card[1] + '</b><h3>' + card[2] + '</h3><p>' + card[3] + '</p><span>Open ' + card[2] + ' guide →</span></div></a>');
  });

  var style = document.createElement('style');
  style.textContent = '.state-city-card:nth-child(8) .state-city-image{background-image:linear-gradient(0deg,rgba(12,38,34,.24),rgba(12,38,34,.08)),url("images/india/rajasthan/mount-abu/hero.jpg")}';
  document.head.appendChild(style);
});
