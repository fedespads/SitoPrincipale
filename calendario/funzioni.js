
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
  if(data.split('-')[0]==new Date().getFullYear()){
    
  return `${data.split('-')[2]}/${data.split('-')[1]}`
  }
  else{
    
  return `${data.split('-')[2]}/${data.split('-')[1]}/${data.split('-')[0]}`
  }
}
function data21(data){
  let a  = data.split('/')
  a.reverse();
  let anno=new Date().getFullYear();
  let r= a.join('-');
  (!a[2])&&(r=anno+'-'+r);
  return r
}