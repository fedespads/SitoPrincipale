function gmc() {
  const gs = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const dc = new Date();
  const ng = new Date(dc.getFullYear(), dc.getMonth() + 1, 0).getDate();
  const gm = [''];

  for (let i = 1; i <= ng; i++) {
    const g = new Date(dc.getFullYear(), dc.getMonth(), i);
    const ng = gs[g.getDay()];
    gm.push(`${ng} ${i}`);
  }

  return gm;
}
function getd(i) {
  const oggi = new Date().getDate();
  
  if (i === oggi) return 'OGGI';
  if (i === oggi + 1) return 'Domani';
  if (i === oggi + 2) return 'Dopodomani';
  if (i === oggi - 1) return 'Ieri';
  if (i === oggi - 2) return "L'altroieri";
  
  // Ritorna una stringa vuota se il giorno non corrisponde a nessuna delle condizioni sopra
  return '';
}
function isAndroidMobile() {
  // Controlla se l'agente utente contiene "Android" e "Mobile"
  return /Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent);
}
function detectSwipeDirection() {
  let startX;
  let startY;
  let distX;
  let distY;

  function handleTouchStart(event) {
      const firstTouch = event.touches[0];
      startX = firstTouch.clientX;
      startY = firstTouch.clientY;
  }

  function handleTouchEnd(event) {
      if (!startX || !startY) return;

      const lastTouch = event.changedTouches[0];
      const endX = lastTouch.clientX;
      const endY = lastTouch.clientY;

      distX = endX - startX;
      distY = endY - startY;

      if (Math.abs(distX) > Math.abs(distY)) {
          // swipe orizzontale
          if (distX > 0) {
            
            document.querySelector('#b').scrollLeft -= document.body.clientWidth;
              return 2;
          } else {
            document.querySelector('#b').scrollLeft += document.body.clientWidth;
              // swipe a sinistra
              return 1;
          }
      }
      // Se non è uno swipe orizzontale, ritorna 0
      return 0;
  }

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchend', handleTouchEnd, false);
}


