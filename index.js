var stato=1;
if(localStorage.getItem('s')){
  localStorage.removeItem('s');
  document.querySelector('.boxS').click()
}
document.querySelector('.boxS').addEventListener("click",function(){
  if(stato==1){
    document.body.classList.remove('a1');
    document.body.classList.add('a2');
    stato=2;
  }
})

document.querySelector('.boxF').addEventListener("click",function(){
  if(stato== 2){
    document.body.classList.add('a1');
    document.body.classList.remove('a2');
    stato=1;
  }
})



document.querySelectorAll('.lista').forEach(lista=>{
  Array.from(lista.children).forEach(figlio=>{
    figlio.addEventListener("click",function(){
      window.open(figlio.innerHTML,'_self'); })
  })
})

