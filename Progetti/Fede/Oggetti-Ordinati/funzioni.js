

function animazione(sog,min,max,unita,tempoms){
  let root = document.querySelector(':root');
  let i=min;
  let cresci = 1;
  var intervallo= setInterval(function(){
    if(cresci==1){i++;}
    if(i==max){cresci=0; clearInterval(intervallo);}
  root.style.setProperty(sog, `${i}`+unita);
  console.log(i+'%');
  },(tempoms/max));
}
function getid(a){
  return document.getElementById(a)
}
