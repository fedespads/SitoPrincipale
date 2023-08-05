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

  
 document.querySelector(".Impegni").addEventListener("click",function(){
  window.open('Fede/Impegni','_self');
 })

 
 document.querySelector(".calendario").addEventListener("click",function(){
  window.open('Simo/Calendario','_self');
 })

 
 document.querySelector(".assenze").addEventListener("click",function(){
  window.open('Simo/Assenze','_self');
 })

 
 document.querySelector(".countdown").addEventListener("click",function(){
  window.open('Simo/Countdown','_self');
 })