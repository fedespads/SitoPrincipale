const input = document.getElementById("myInput");
const div = document.getElementById("mydiv");
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

if(localStorage.getItem("myArr")){
  myArray = JSON.parse(localStorage.getItem("myArr"));
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
function settadiv(a,n){
  
  while(n<myArray.length){
    a = `${a}${myArray[n]}<br>`;
    n++;
  }
  div.innerHTML =a;
}
function fine(){
  
  myArray[myArray.length]= input.value;
  myArray.sort();


  let n=0;
  while(n<myArray.length){
    myArray[n] = `${myArray[n][0].toUpperCase()}${altriC(n)}`;
    n++;
  }
  
  myArray.sort();
  settadiv("",0);
  input.value="";
  localStorage.setItem("myArr",JSON.stringify(myArray));
}
settadiv("",0);

input.addEventListener("keypress",function(event){if(event.key=='Enter'){fine();}});

piu.addEventListener("click",function(){

  if(piuattivo==0){
    modifica.classList.add("active");
    rimuovi.classList.add("active");
    piu.innerHTML='-';
    piuattivo=1;
  }
  else if(piuattivo==1){
      
    modifica.classList.remove("active");
    rimuovi.classList.remove("active");
    piu.innerHTML='+';
      piuattivo=0;
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
    document.body.classList.add("casella");
    casellaRim.classList.add("active");
    casRimattiva=1;
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


document.querySelector(".fine2").addEventListener("click", function(){
  let a =JSON.parse(localStorage.getItem("myArr"));
  let index = a.indexOf(rimInput.value);
  a.splice(index, 1); 

  localStorage.setItem("myArr",JSON.stringify(a));


  document.body.classList.remove("casella");
  casellaRim.classList.remove("active");
  casRimattiva=0;
  location.reload();
})

console.log(JSON.parse(localStorage.getItem("myArr")))