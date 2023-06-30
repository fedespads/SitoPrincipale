
const c1= document.querySelector(".uno");
const c2= document.querySelector(".due");

c1.addEventListener("click",function(){

  if(c1.classList[2]&&!document.body.classList[0]){
    document.getElementById("uno").style.animation=" sali 0.5s backwards";
    document.getElementById("due").style.animation=" scompari 1s backwards";
      document.body.classList.add("sel1");
  }

  else if(c1.classList[2]&&document.body.classList[0]){
    document.getElementById("uno").style.animation=" scendi 0.5s backwards";
      document.body.classList.remove("sel1");

  }
    else{
  c1.classList.add("active");
  c2.classList.remove("active");
    }
  })

c2.addEventListener("click",function(){
  
  if(c2.classList[2]&&!document.body.classList[0]){
    
    document.getElementById("due").style.animation=" sali 0.5s backwards";
    document.getElementById("uno").style.animation=" scompari 1s backwards";
  document.body.classList.add("sel2");
}

else if(c2.classList[2]&&document.body.classList[0]){
  
  document.getElementById("due").style.animation=" scendi 0.5s backwards";

  document.body.classList.remove("sel2");

}
  else{
c2.classList.add("active");
c1.classList.remove("active");
  }
})

  
 document.querySelector(".notalavoro").addEventListener("click",function(){
  window.open('Progetti/ProgFede/notalavoro/notalavoro.html','_self');
 })

 document.querySelector(".calendario").addEventListener("click",function(){
  window.open('Progetti/ProgSimo/Sitosimo/calendario.html','_self');
 })

 
 document.querySelector(".assenze").addEventListener("click",function(){
  window.open('Progetti/ProgSimo/Sitosimo/assenze.html','_self');
 })

 
 document.querySelector(".countdown").addEventListener("click",function(){
  window.open('Progetti/ProgSimo/Sitosimo/fede.html','_self');
 })

document.querySelector(".titolo").innerHTML = screen.width;