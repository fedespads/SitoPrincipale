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
  window.open('Impegni','_self');
 })
 document.querySelector(".Classifica").addEventListener("click",function(){
  window.open('Classifica','_self');
 })
 document.querySelector(".NineGame").addEventListener("click",function(){
  window.open('NineGame','_self');
 })
 document.querySelector(".calendario").addEventListener("click",function(){
  window.open('Calendario','_self');
 })
 document.querySelector(".assenze").addEventListener("click",function(){
  window.open('Assenze','_self');
 })
 document.querySelector(".countdown").addEventListener("click",function(){
  window.open('Countdown','_self');
 })
 document.querySelector(".orario").addEventListener("click",function(){
  window.open('Orario','_self');
 })
 

