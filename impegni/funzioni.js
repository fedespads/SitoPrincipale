
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

function data12(data){
  if(data){
    if(data.split('-')[0]==new Date().getFullYear()){
      
    return `${data.split('-')[2]}/${data.split('-')[1]}`
    }
    else{
      
    return `${data.split('-')[2]}/${data.split('-')[1]}/${data.split('-')[0]}`
    }
  }
}
function distanza(data){
  let ora = new Date().getTime()
  let g = new Date(data).getTime();
  let diff = -Math.ceil(((g-ora)/1000/60/60/24));
  return diff;}

