function giorniDiQuestoMese(a) {
  const dataCorrente = new Date(a);
  const meseCorrente = dataCorrente.getMonth() + 1; // Nota: getMonth restituisce un valore da 0 a 11, quindi aggiungiamo 1 per ottenere il mese corrente.
  const annoCorrente = dataCorrente.getFullYear();
  
  const giorniNelMese = new Date(annoCorrente, meseCorrente, 0).getDate();

  return giorniNelMese;
}

function PrimoDelMese(a) {
  const dataCorrente = new Date(a);
  const annoCorrente = dataCorrente.getFullYear();
  const meseCorrente = dataCorrente.getMonth();

  const primaDelMese = new Date(annoCorrente, meseCorrente, 1);

  let giornoSettimana = primaDelMese.getDay();

  if (giornoSettimana === 0) {
    giornoSettimana = 7;
  }

  return giornoSettimana;
}

function numeroquadrati(a){
  let b = PrimoDelMese(a) + giorniDiQuestoMese(a) -1;
  return b;
}

function giornooggi(a) {
  const dataCorrente = new Date(a);
  let b= new Date()
  let c = `${b.getFullYear()}-${(b.getMonth() + 1).toString().padStart(2, '0')}-${b.getDate().toString().padStart(2, '0')}`;
  if(a==c){
    const giornoDelMese = dataCorrente.getDate();
    return giornoDelMese;
  }
  else{
    return 1
  }
}

function meseCorrente(inputDate) {
  const currentDate = new Date();
  const inputYear = new Date(inputDate).getFullYear();
  const inputMonth = new Date(inputDate).getMonth();
  const monthNames = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ];

  const monthName = monthNames[inputMonth];

  if (currentDate.getFullYear() !== inputYear) {
    return `${monthName} ${inputYear.toString().slice(-2)}`;
  } else {
    return monthName;
  }
}

function calcolaData(i) {
  if (i === 0) {
    var oggi = new Date(); // Ottieni la data di oggi

    // Formatta la data nel formato 'YYYY-MM-DD'
    var anno = oggi.getFullYear();
    var mese = (oggi.getMonth() + 1).toString().padStart(2, '0');
    var giorno = oggi.getDate().toString().padStart(2, '0');
    var dataFormattata = `${anno}-${mese}-${giorno}`;

    return dataFormattata;
  } else {
    var oggi = new Date(); // Ottieni la data di oggi
    var dataDesiderata = new Date(oggi.getFullYear(), oggi.getMonth() + i, 1);

    // Formatta la data nel formato 'YYYY-MM-DD'
    var anno = dataDesiderata.getFullYear();
    var mese = (dataDesiderata.getMonth() + 1).toString().padStart(2, '0');
    var giorno = '01';
    var dataFormattata = `${anno}-${mese}-${giorno}`;

    return dataFormattata;
  }
}
function data(a,d){
  a=+a;
  if(a<=9){
    a='0'+a;
  }
  const mesi = {
  'Gennaio': 1,
  'Febbraio': 2,
  'Marzo': 3,
  'Aprile': 4,
  'Maggio': 5,
  'Giugno': 6,
  'Luglio': 7,
  'Agosto': 8,
  'Settembre': 9,
  'Ottobre': 10,
  'Novembre': 11,
  'Dicembre': 12
};
  let b=mesi[d.split(' ')[0]];
  if(b<=9){
    b='0'+b;
  }
  let c = new Date().getFullYear();
  if(d.split(' ')[1]){
    c=+('20'+d.split(' ')[1])
  }
  return c+'-'+b+'-'+a

}

function du(a){
  let b=a.split('-')
  return +(b[0]+b[1]+b[2])
}