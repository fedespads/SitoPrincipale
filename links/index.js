
let myInput = document.querySelector('#myInput');
let myNumber = document.querySelector('#myNumber');
let boxrisposte = document.querySelector('#boxrisposte');
myNumber.value =3;


function aggiorna(){
  
  boxrisposte.innerHTML='';
  let links = linkgenerati(myInput.value,myNumber.value);
  let i =2;
  links.forEach(link=>{
    boxrisposte.innerHTML+=`
      <a href=${link}  target="_blank">
      ${i}. link
      </a>
    `
  i++;
  })
}
myNumber.addEventListener('change', function(){
  aggiorna()
})
myInput.addEventListener('change', function(){
  aggiorna()
})