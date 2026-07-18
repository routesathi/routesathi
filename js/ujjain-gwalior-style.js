(() => {
  if (!location.pathname.endsWith('/cities/india/mp/ujjain.html')) return;
  const toolkit = document.querySelector('.rs-toolkit');
  const morePlaces = document.querySelector('.more-places');
  if (toolkit && morePlaces) morePlaces.insertAdjacentElement('afterend', toolkit);
})();
