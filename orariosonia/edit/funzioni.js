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