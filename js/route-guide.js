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

  /* Rajasthan guides use the same pre-trip card and position as the MP city
     guides: green checklist card above the hero image. */
  if(location.pathname.includes('/cities/india/rajasthan/')){
    const warning=document.querySelector('.route-warning');
    const hero=document.querySelector('.route-hero');
    if(warning && hero){
      const title=warning.querySelector('strong')?.textContent.trim() || 'Before you go / निकलने से पहले';
      const updated=warning.querySelector('small')?.textContent.trim() || '';
      const details=Array.from(warning.childNodes)
        .filter(node=>!(node.nodeType===1 && ['STRONG','SMALL','BR'].includes(node.tagName)))
        .map(node=>node.textContent).join(' ').replace(/\s+/g,' ').trim();
      warning.className='route-checklist';
      warning.innerHTML=`<strong>${title}</strong><p>${details}</p>${updated ? `<p class="route-updated">${updated}</p>` : ''}`;
      hero.insertAdjacentElement('beforebegin', warning);
    }
  }
})();
