/* RouteSathi common city-guide actions.
   A city page only needs: data-route-style, data-route-note and data-route-print. */
(()=>{
  document.querySelectorAll('[data-route-style]').forEach(button=>{
    button.addEventListener('click',()=>{
      const note=document.querySelector(button.dataset.routeNote || '#routeToolNote');
      const message=button.dataset.routeMessage;
      if(note && message) note.textContent=message;
    });
  });
  document.querySelectorAll('[data-route-print]').forEach(button=>{
    button.addEventListener('click',()=>window.print());
  });

  /* Rajasthan guides use the same clear pre-trip position as RouteSathi's
     other city pages: above the hero image, before planning begins. */
  if(location.pathname.includes('/cities/india/rajasthan/')){
    const warning=document.querySelector('.route-warning');
    const hero=document.querySelector('.route-hero');
    if(warning && hero) hero.insertAdjacentElement('beforebegin', warning);
  }
})();
