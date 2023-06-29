
const c1= document.querySelector(".uno");
const c2= document.querySelector(".due");

c1.addEventListener("click",function(){

  if(c1.classList[2]&&!document.body.classList[0]){
    document.body.classList.add("sel1");
  }

  else if(c1.classList[2]&&document.body.classList[0]){
    document.body.classList.remove("sel1");

  }
    else{
  c1.classList.add("active");
  c2.classList.remove("active");
    }
  })

c2.addEventListener("click",function(){
  
  if(c2.classList[2]&&!document.body.classList[0]){
  document.body.classList.add("sel2");
}

else if(c2.classList[2]&&document.body.classList[0]){
  document.body.classList.remove("sel2");

}
  else{
c2.classList.add("active");
c1.classList.remove("active");
  }
})

  
 

console.log(c1.classList);