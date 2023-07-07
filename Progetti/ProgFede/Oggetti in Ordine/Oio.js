const input = document.getElementById("myInput");
var div = document.getElementById("mydiv");
const piu = document.getElementById("piu");
const rimuovi = document.getElementById("rimuovi");
const modifica = document.getElementById("modifica");
const casellaCambio = document.getElementById("casellaCambio");
const elinput2 = document.getElementById("elinput2");
const elinput1 = document.getElementById("elinput1");
const rimInput = document.getElementById("rimInput");



let piuattivo =0;
let casCambioattiva =0;
let casRimattiva =0;
let myArray =[];

if(localStorage.getItem("piucliccato")==1){
  modifica.classList.add("active");
  rimuovi.classList.add("active");
  piu.innerHTML='-';
  piuattivo=1;
  localStorage.removeItem("piucliccato");
}

if(localStorage.getItem("myArr")){
  myArray = JSON.parse(localStorage.getItem("myArr"));
}
else{
  localStorage.setItem("myArr","");
}
function altriC(n){
  let a=1;
  let b="";
  while(a<myArray[n].length){
    b=`${b}${myArray[n][a]}`
    a++;
  }
  return b;
}
function settadiv(){
  div.innerHTML="";
  let i=0;
  while(i<JSON.parse(localStorage.getItem("myArr")).length){
    div.appendChild(document.createElement("div"));
    div.lastChild.innerHTML = JSON.parse(localStorage.getItem("myArr"))[i];
    div.lastChild.classList.add("elemento");
    i++;
  }
  myArray = JSON.parse(localStorage.getItem("myArr"));
}
function fine(){
  
  if(input.value!== ""){
  myArray[myArray.length]= input.value;}

  myArray.sort();


  let n=0;
  while(n<myArray.length){
    myArray[n] = `${myArray[n][0].toUpperCase()}${altriC(n)}`;
    n++;
  }
  
  myArray.sort();
  
  localStorage.setItem("myArr",JSON.stringify(myArray));
  settadiv();
  input.value="";
}
settadiv();

input.addEventListener("keypress",function(event){if(event.key=='Enter'){fine();}});

piu.addEventListener("click",function(){
  if(piuattivo==0&&localStorage.getItem("piucliccato")!==1){
    modifica.classList.add("active");
    rimuovi.classList.add("active");
    piu.innerHTML='-';
    piuattivo=1;
    
    localStorage.setItem("piucliccato",1);
    location.reload();
  }
  else if(piuattivo==1){
      
    modifica.classList.remove("active");
    rimuovi.classList.remove("active");
    piu.innerHTML='+';
    document.body.classList.remove("rim");
    casRimattiva=0;

    
    settadiv();
    piuattivo=0;
    location.reload();
  }

})
modifica.addEventListener("click",function(){
  if(casCambioattiva==0){
    document.body.classList.add("casella");
    casellaCambio.classList.add("active");
    casCambioattiva=1;
  }
})

rimuovi.addEventListener("click",function(){


  if(casRimattiva==0){
    document.body.classList.add("rim");

    casRimattiva=1;
  }
  else if(casRimattiva==1){
    
    document.body.classList.remove("rim");
    casRimattiva=0;
  }
})
document.querySelector(".fine1").addEventListener("click", function(){
  let a =JSON.parse(localStorage.getItem("myArr"));
  let c=0;
  while(c<a.length){
    if(a[c]== elinput1.value){
      a[c]=elinput2.value;
    }
      c++;
  }
  localStorage.setItem("myArr",JSON.stringify(a));

  document.body.classList.remove("casella");
  casellaCambio.classList.remove("active");
  casCambioattiva=0;
  location.reload();
})



document.querySelectorAll(".elemento").forEach(el=>{
  el.addEventListener("click", function(){
    if(casRimattiva==1){

      let a =JSON.parse(localStorage.getItem("myArr"));
      let index = a.indexOf(el.innerHTML);
      a.splice(index, 1);
      localStorage.setItem("myArr",JSON.stringify(a));
      console.log(JSON.parse(localStorage.getItem("myArr")));
      div.removeChild(el);
    }
  })
})
