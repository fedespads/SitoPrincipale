
const c1= document.querySelector(".uno");
const c2= document.querySelector(".due");

c1.addEventListener("click",function(){

  if(c1.classList[2]&&!document.body.classList[0]){
    document.getElementById("due").style.animation=" vaiadx 0.5s backwards";
    document.getElementById("uno").style.animation=" sali 0.6s  ease-out backwards";
    
    document.getElementById("contprog1").style.animation=" comprog 0.5s  ease-out backwards";
    document.getElementById("titolo").style.opacity="0";
    setTimeout(function(){
      document.body.classList.add("sel1");
      document.getElementById("due").style.animation=""
      
    document.getElementById("titolo").style.opacity="1";
    
    document.getElementById("contprog1").style.animation="";
    },500)
    
  }

  else if(c1.classList[2]&&document.body.classList[0]){
    document.getElementById("uno").style.animation=" scendi 0.3s ease-out backwards";
    
    document.getElementById("due").style.animation="vienidadx 0.3s ease-out backwards";
    document.getElementById("contprog1").style.animation=" scomprog 0.5s  ease-out backwards";
    document.body.classList.remove("sel1");


  }

    else{
  c1.classList.add("active");
  c2.classList.remove("active");
    }
  })

c2.addEventListener("click",function(){
  
  if(c2.classList[2]&&!document.body.classList[0]){
    document.getElementById("uno").style.animation=" vaiasx 0.5s backwards";
    document.getElementById("due").style.animation=" sali 0.6s  ease-out backwards";
    
    document.getElementById("contprog2").style.animation=" comprog 0.5s  ease-out backwards";
    document.getElementById("titolo").style.opacity="0";
    setTimeout(function(){
      document.body.classList.add("sel2");
      document.getElementById("uno").style.animation=""
      
    document.getElementById("titolo").style.opacity="1";
    
    document.getElementById("contprog2").style.animation="";
    },500)
    
}

else if(c2.classList[2]&&document.body.classList[0]){
  document.getElementById("due").style.animation=" scendi 0.3s ease-out backwards";
  
  document.getElementById("uno").style.animation=" vienidasx 0.3s ease-out backwards";
  document.getElementById("contprog2").style.animation=" scomprog 0.5s  ease-out backwards";
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


/*setInterval(function(){
  
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
 const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
 document.querySelector(".titolo").innerHTML =`vw = ${vw}, vh= ${vh}`;
},250);*/