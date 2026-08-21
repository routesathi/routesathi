document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.site-header nav');
  if (nav) nav.innerHTML = '<a href="index.html">Home</a><a href="destinations.html">Destinations</a><a href="#travel-style">Travel styles</a>';
  var cta = document.querySelector('.site-header .header-cta');
  if (cta) { cta.textContent = 'Plan a trip'; cta.href = '#plan-my-trip'; }
  var rajasthanCard = document.querySelector('.home-rajasthan');
  if (rajasthanCard) {
    rajasthanCard.hidden = false;
    rajasthanCard.style.display = '';
  }

  /* The page keeps the first copy of each useful section and hides
     accidental repeats added during earlier homepage updates. */
  ['.home-essentials', '.home-routes'].forEach(function (selector) {
    var sections = document.querySelectorAll(selector);
    for (var i = 1; i < sections.length; i += 1) {
      sections[i].hidden = true;
      sections[i].style.display = 'none';
    }
  });

  var extraGwaliorCard = document.querySelector('.trip-banner');
  if (extraGwaliorCard) {
    extraGwaliorCard.hidden = true;
    extraGwaliorCard.style.display = 'none';
  }
});
