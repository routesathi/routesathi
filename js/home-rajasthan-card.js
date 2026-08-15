document.addEventListener('DOMContentLoaded', function () {
  var box = document.querySelector('.home-rajasthan');
  if (!box) return;
  var title = box.querySelector('h2');
  var copy = box.querySelector('p:last-of-type');
  if (title) title.innerHTML = 'Seven Rajasthan guides,<br>ready for your next trip.';
  if (copy) copy.textContent = 'From Jaipur and Udaipur to Pushkar, Ranthambore and Chittorgarh—choose a practical RouteSathi guide with day plans, map routes and travel notes.';
});
