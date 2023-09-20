

function numday() {
  const dataOggi = new Date();
  let giorno = dataOggi.getDay(); 
  giorno = (giorno + 6) % 7;
  if(giorno==6){giorno=0}
  return giorno;
}

function ora() {
  const dataOggi = new Date();
  const ore = dataOggi.getHours();
  const minuti = dataOggi.getMinutes();

  const orario = `${ore.toString().padStart(2, '0')}${minuti.toString().padStart(2, '0')}`;
  return (+orario);
}

function mo(x){
  let a= x.split(':')[0];
  let b= x.split(':')[1];
  return +(a+b);
}

function numdayt() {
  const dataOggi = new Date();
  let giorno = dataOggi.getDay(); 
  giorno = (giorno + 6) % 7;
  giorno++;
  if(giorno==6){
    giorno=0
  }
  else if(giorno==7){
    giorno=1;
  }

  return giorno;
}

