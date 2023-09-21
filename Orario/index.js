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
  <div class="mainbox">
    <div class="giorno giorno1"></div>
    <div class="giorno giorno2"></div>
    <div class="orariobox orariobox1"></div>
    <div class="orariobox orariobox2"></div>
  </div>
`

let orariobox1 = document.querySelector('.orariobox1');
let orariobox2 = document.querySelector('.orariobox2');
let giorno1 = document.querySelector('.giorno1');
let giorno2 = document.querySelector('.giorno2');
let c=0;

let giorni=['Lun','Mar','Mer','Gio','Ven','Sab'];
giorno1.innerHTML= giorni[numday()]
giorno2.innerHTML= giorni[numdayt()]

//agiugni righe all'orario di oggi
for(let i=0; i< orario[numday()].length;i++){
  document.querySelector('.orariobox1').innerHTML+=`
  <div class="rigaorario rigaorario1"></div>
  `
}

//agiugni righe all'orario di domani
for(let i=0; i< orario[numdayt()].length;i++){
  document.querySelector('.orariobox2').innerHTML+=`
  <div class="rigaorario rigaorario2"></div>
  `
}


//agiugni elementi alle righe della prima box
document.querySelectorAll('.rigaorario1').forEach(e=>{
  e.innerHTML=`
    <div class="orariga orariga1"></div>
    <div class="materia materia1"></div>
  `
})

//agiugni elementi alle righe della seconda box
document.querySelectorAll('.rigaorario2').forEach(e=>{
  e.innerHTML=`
    <div class="orariga orariga2"></div>
    <div class="materia materia2"></div>
  `
})


//aggiunge le materie alle righe della prima box
let i=0;
document.querySelectorAll('.materia1').forEach(e=>{
  e.innerHTML=orario[numday()][i]
  i++;
})


//aggiunge le materie alle righe della seconda box
i=0;
document.querySelectorAll('.materia2').forEach(e=>{
  e.innerHTML=orario[numdayt()][i]
  i++;
})


//ric 1 box 1
let ric = document.createElement('div');
ric.innerHTML=`
<div class="oraric">10:05</div>
<div>Ricreazione</div>
`
ric.classList.add('ricreazione');
orariobox1.insertBefore(ric, orariobox1.children[2]);

//ric 2 box 1
ric = document.createElement('div');
ric.innerHTML=`
<div class="oraric ora">12:05</div>
<div>Ricreazione</div>
`
ric.classList.add('ricreazione');
orariobox1.insertBefore(ric, orariobox1.children[5]);

//ric 1 box 2
ric = document.createElement('div');
ric.innerHTML=`
<div class="oraric">10:05</div>
<div>Ricreazione</div>
`
ric.classList.add('ricreazione');
orariobox2.insertBefore(ric, orariobox2.children[2]);

//ric 2 box 2
ric = document.createElement('div');
ric.innerHTML=`
<div class="oraric ora">12:05</div>
<div>Ricreazione</div>
`
ric.classList.add('ricreazione');
orariobox2.insertBefore(ric, orariobox2.children[5]);



//ore box1
i=0;
document.querySelectorAll('.orariga1').forEach(e=>{
  let oreriga = ['8:10','9:10','10:15','11:10','12:15','13:15']
  e.innerHTML=oreriga[i]
  i++
})

//ore box2
i=0;
document.querySelectorAll('.orariga2').forEach(e=>{
  let oreriga = ['8:10','9:10','10:15','11:10','12:15','13:15']
  e.innerHTML=oreriga[i]
  i++
})



let sel;
let righe = orariobox1.children;
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
let d=true;
sel.parentNode.classList.add('active')


let r=500;
setTimeout(function(){
  orariobox2.style.translate='-100px 0'
  giorno2.style.translate='-100px 100px'
},r)



function uno(){

  if(!document.body.classList.contains('dx')&&c==0){
    document.body.classList.add('dx')
    orariobox2.style.translate='0 0'
    giorno2.style.translate='0 0'
    giorno1.style.translate='0 100px';
    setTimeout(function(){
      orariobox1.style.translate='100px 0';
      giorno1.style.translate='100px 100px';
    },r) 
  
    c=1;
  }
}
function due(){
  if(document.body.classList[0]&&c==0){
    document.body.classList.remove('dx')
    orariobox1.style.translate='0 0'
    giorno1.style.translate='0 0'
    giorno2.style.translate='0 100px';
    setTimeout(function(){
      orariobox2.style.translate='-100px 0'
      giorno2.style.translate='-100px 100px'
    },r)
    
  c=1;
  }  
}



let mobile;
if(navigator.userAgent.split('(')[1].split(' ')[0].split(';')[0]=='Windows'){
  mobile=false;
}
else
{
  mobile=true;
  document.body.classList.add('mobile')
}



if(mobile){
  document.addEventListener('touchstart', handleTouchStart, false);        
  document.addEventListener('touchmove', handleTouchMove, false);
  var xDown = null;                                                        
  var yDown = null;
  function getTouches(evt) {
    return evt.touches ||             // browser API
          evt.originalEvent.touches; // jQuery
  }
  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };
  function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                          
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
      if ( xDiff > 0 ) {
        c=0;
        uno()
      }
      else {
        c=0;
        due()
      }                       
    }
    else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    xDown = null;
    yDown = null;                                             
  };
}
else{
  document.addEventListener('click',e=>{
    c=0;
    uno()
    due()
  })
  document.addEventListener('keypress',e=>{
    if(e.code=='Space'){
      c=0;
      uno()
      due()
    }
  })
}



