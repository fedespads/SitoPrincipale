let orario=[
  
    //LUN
    ['Storia','Lab Architettura','Lab Architettura', `Storia Dell'Arte`, 'Prog Arch Amb'],

    //MAR
    ['Fisica','Fisica','Motoria','Motoria','Chimica'],

    //MER
    ['Italiano','Italiano','Prog Arch Amb','Prog Arch Amb','Matematica'],

    //GIO
    ['Rel-Alternativa','Filosofia','Prog Arch Amb','Prog Arch Amb','Lab Architettura'],

    //VEN
    ['Inglese','Filosofia',`Storia Dell'Arte`,`Storia Dell'Arte`,'Italiano'],

    //SAB
    ['Lab Architettura','Lab Architettura','Inglese','Inglese','Storia'],

  ]



document.body.innerHTML+=`
<div class="orariobox"></div>
`

let orariobox = document.querySelector('.orariobox');

for(let i=0; i< orario[numday()].length;i++){
  document.querySelector('.orariobox').innerHTML+=`
  <div class="rigaorario"></div>
  `
}
document.querySelectorAll('.rigaorario').forEach(e=>{
  e.innerHTML=`
    <div class="orariga ora"></div>
    <div class="materia"></div>
  `
})


let i=0;
document.querySelectorAll('.materia').forEach(e=>{
  e.innerHTML=orario[numday()][i]
  i++;
})


let ric = document.createElement('div');
ric.innerHTML=`
<div class="oraric">10:05</div>
<div>Ricreazione</div>
`
ric.classList.add('ricreazione');
orariobox.insertBefore(ric, orariobox.children[2]);


ric = document.createElement('div');
ric.innerHTML=`
<div class="oraric ora">12:05</div>
<div>Ricreazione</div>
`
ric.classList.add('ricreazione');
orariobox.insertBefore(ric, orariobox.children[5]);

let y=0;
document.querySelectorAll('.orariga').forEach(e=>{
  let oreriga = ['8:10','9:10','10:15','11:10','12:15']
  e.innerHTML=oreriga[y]
  y++
})

let sel;
let righe = orariobox.children;
for(let i=0; i<righe.length;i++){

  let primo= mo(righe[i].children[0].innerHTML)

  let secondo;

  if(i==righe.length-1){
    secondo =2359;
  }
  else{
    secondo = mo(righe[i+1].children[0].innerHTML);
  }

  if (ora()>=primo&&ora()<secondo)
  {
    sel=righe[i].children[0];
  }
}
sel.parentNode.classList.add('active')






