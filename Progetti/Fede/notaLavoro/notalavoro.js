

let corrente = 0;

const oggetti = ['cintura','cibo','chiavi','gigomme','tirabuscion','scarpe','grembiule','portafoglio','toglipeli','deodorante','profumo','caricabat','auricolari','casco']

let uno = document.getElementById("uno");
let pulsante = document.getElementById("pulsanti");
let si = document.getElementById("si");
let no = document.getElementById("no");

uno.innerHTML= oggetti[corrente];
pulsante.onclick = function ciao(){
  if(corrente<oggetti.length-1){
    corrente++;
    uno.innerHTML= oggetti[corrente];
  }
  else{
    uno.innerHTML= oggetti[oggetti.length-1];
  }
};

si.onclick = function(){
  si.classList.add('active');
  setTimeout(()=>{
    si.classList.remove('active');
  },300)
}
no.onclick = function(){
  no.classList.add('active');
  setTimeout(()=>{
    no.classList.remove('active');
  },300)
}





