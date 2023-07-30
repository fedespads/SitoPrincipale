var stato=10;

document.querySelector('.boxS').addEventListener("click",function(){
  if(stato==10){
    document.body.classList.remove('a10');
    document.body.classList.add('a20');
    stato=20;
  }
})
document.querySelector('.boxF').addEventListener("click",function(){
  if(stato== 20){
    document.body.classList.add('a10');
    document.body.classList.remove('a20');
    stato=10;
  }
})

  
document.querySelector(".notalavoro").addEventListener("click",function(){
  window.open('Progetti/Fede/notaLavoro','_self');
 })

 document.querySelector(".OggettiOrdinati").addEventListener("click",function(){
  window.open('Progetti/Fede/Oggetti-Ordinati','_self');
 })
 document.querySelector(".Impegni").addEventListener("click",function(){
  window.open('Progetti/Fede/Impegni','_self');
 })

 document.querySelector(".calendario").addEventListener("click",function(){
  window.open('Progetti/Simo/sitosimo/calendario.html','_self');
 })

 
 document.querySelector(".assenze").addEventListener("click",function(){
  window.open('Progetti/Simo/sitosimo/assenze.html','_self');
 })

 
 document.querySelector(".countdown").addEventListener("click",function(){
  window.open('Progetti/Simo/sitosimo/fede.html','_self');
 })