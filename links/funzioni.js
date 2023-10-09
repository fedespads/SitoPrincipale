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
      //left swipe

    }
    else {
      //right swipe
    }                       
  }
  else {
    if ( yDiff > 0 ) {
      //swipe up
    }
    else { 
      
      //swipe down
    }                  
  }
  xDown = null;
  yDown = null;                       
};
///////////////////////////
///////////////////////////


function insertAfter(newElement, referenceElement) {   
  referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling); 
}

function data12(data){
  if(data.split('-')[0]==new Date().getFullYear()){
    
  return `${data.split('-')[2]}/${data.split('-')[1]}`
  }
  else{
    
  return `${data.split('-')[2]}/${data.split('-')[1]}/${data.split('-')[0]}`
  }
}

function regola(sog,cosa,min,max,unita){
  if(unita ==undefined){unita='px'}
  var bx = document.createElement('div');
  var scrt = document.createElement('div');
  var inp = document.createElement('input');

  inp.setAttribute('type','range');
  scrt.style=`font-family: 'SF'`;
  bx.style=`
    position: absolute;
    z-index:1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

  `



  document.querySelector(sog).style=  cosa+`: ${inp.value*((max-min)/100)+min}`+unita;
  scrt.innerHTML= `${inp.value*((max-min)/100)+min}`+unita;



  bx.appendChild(inp);
  bx.appendChild(scrt);
  insertAfter(bx,document.querySelector(sog));




  inp.addEventListener('input',function(){
    document.querySelector(sog).style=  cosa+`: ${inp.value*((max-min)/100)+min}`+unita;
    scrt.innerHTML= `${inp.value*((max-min)/100)+min}`+unita;
    if(inp.value ==0){ scrt.innerHTML+=' MIN'}
    else if(inp.value ==100){ scrt.innerHTML+=' MAX'} 

  })
}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function linkgenerati(testo, numero) {
  let risultati = [];

  for (let i = 2; i <= numero; i++) {
    const testoSostituito = testo.replace(/_1_/g, `_${i}_`);
    risultati.push(testoSostituito);
  }

  return risultati;
}

