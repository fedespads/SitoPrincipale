function gs() {
  // ritorna 0 se è lunedi fino a 6 se è sabato
  const oggi = new Date().getDay();
  if (oggi === 0) {
    return 0;
  } else {
    return oggi - 1;
  }
}
function oa() {
  //dice quanti minuti sono passati da mezzanotte

  const n = new Date();
  const h = n.getHours();
  const m = n.getMinutes();

  return h * 60 + m;
}

function geth(n) {
  // fornisce l'orario nella riga n del giorno corrente in numero
  if (!document.querySelectorAll(".scheda")[gs()].children[n])
    return geth(n - 1) + 60;
  let a =
    document.querySelectorAll(".scheda")[gs()].children[n].children[0]
      ?.innerHTML;
  if (!a) return geth(n - 1) + 60;
  return +a.split(":")[0] * 60 + +a.split(":")[1];
}
function nc(e) {
  let i = 0, a= true;
  document.querySelectorAll('.c').forEach(el=>{
    if(e==el) a =false;
    if(a)i++
  })
  return i
}
