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