document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.site-header nav');
  if (nav) nav.innerHTML = '<a href="index.html">Home</a><a href="destinations.html">Destinations</a><a href="#travel-style">Travel styles</a>';
  var cta = document.querySelector('.site-header .header-cta');
  if (cta) { cta.textContent = 'Plan a trip'; cta.href = '#plan-my-trip'; }
  var oldCard = document.querySelector('.home-rajasthan');
  if (oldCard) {
    oldCard.hidden = true;
    oldCard.style.display = 'none';
  }
});
