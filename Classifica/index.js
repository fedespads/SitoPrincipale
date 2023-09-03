 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  //cambia
  databaseURL: "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/"
}
let s;
let a =0;
let b=0;
function eliminadalDB(id){
  let a='';
  DBScelto._path.pieces_.forEach(e=>{
    a+=`${e}/`
  })
  let posizione = ref(database,`${a}${id}`);
  remove(posizione);
}
function riempiDB(arr){

  Object.keys(s).forEach(e=>{eliminadalDB(e)});


  arr.forEach(e=>{
    push(DBScelto,e[1]);
  })
  op=0;
  location.reload();
}
function controlla(min,max,arr,titoloscelto){
  if(min==(max-1)){
      
      for(let i=arr.length;i>max;i--){
        arr[i]=arr[i-1]
      }
      arr[max]=[max+1,titoloscelto];
      for(let i=max+1;i<=arr.length-1;i++){
        arr[i][0]=arr[i][0]+1
      }
      op=1;
      riempiDB(arr);
    
  }
}

const app = initializeApp(appSettings)
const database = getDatabase(app);
let DBScelto;
let arr=[];
let op= 0;
let PinExists=false;

Object.keys(localStorage).forEach(e=>{
  if(e.startsWith("Classifica")){
    DBScelto= ref(database, `Classifica/${e}`)
    PinExists=true;
  }
})


if(PinExists){
}
else{
  
  document.body.innerHTML=`<div class="box">
  <div>Inserisci Il codice</div>
  <input id="myInput">


  <style>
    

body{
  background-color: #000000;
  color: white;
  display: grid;
  align-items: center;
  justify-items: center;
  font-family: 'SF';
  font-size: 30px;
}
.box{
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
#myInput{
  font-family: 'SF';
  width: 80vw;
  border: none;
  border-radius: 17px;
  box-shadow: inset 4px 4px 5px #f1a43c;
  height: 60px;
  background-color: #f1a43c;
  -webkit-appearance: none;
  padding: 10px;
  color: white;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.178);
  font-size: 25px;
  text-align: center;
}
#myInput:focus{
  outline: none;
  caret-color: white;
}
  </style>
</div>`
let myInput = document.getElementById('myInput');
myInput.addEventListener('keypress', e=>{
  if(e.key=='Enter'&&myInput.value!=""){
    localStorage.setItem(`Classifica${myInput.value}`,true);
    location.reload();
  }
})
}

      let boxlista = document.querySelector('.boxlista');
onValue(DBScelto ,function(snapshot){
      
  if(snapshot.exists()){
    s=snapshot.val();
    if(op==0){
      arr=[];

      boxlista.innerHTML='';
      let i=1;
      Object.values(s).forEach(e=>{
        let a= document.createElement('div');
        a.classList.add('elLista');
        a.innerHTML=`
          <div class="posizione">${i}.</div>
          <div class="nome">${e}</div>
        `
        arr.push([i,e]);
        i++;
        boxlista.appendChild(a);
      })
    }
  }
  else{
    boxlista.innerHTML='Classifica vuota'
  }
})

let piu = document.querySelector('.piu');
piu.addEventListener("click", function(){
  document.body.innerHTML=`
    
  <style>
  @font-face {
    font-family: 'SF';
    src: url(font/SF-Pro-Display-Bold.ttf);
  }
  body{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
  }
  .box{
    display: grid;
    align-items: center;
    justify-items: center;
    font-family: 'SF';
    color: white;
    gap: 10px;
  }
  .titolo{
    font-size: 30px;
  }
  .nuovotitolo{
    width: 80vw;
    max-width: 500px;
    height: 40px;
    border: none;
    border-radius: 18px; 
    padding: 10px;
    font-family: 'SF';
    text-align: center;
    font-size: 20px;
    background-color: #f1a43c;
    color: white;
  }
  .nuovotitolo:focus{
    outline: none;
  caret-color: white;
  }
</style>
<div class="box">
  <div class="titolo">Nuovo titolo?</div>
  <input class="nuovotitolo">
</div>
`

 let nuovotitolo = document.querySelector('.nuovotitolo');
 nuovotitolo.addEventListener("keypress", e=>{
  if(e.key=='Enter'&&nuovotitolo.value!=""){
    let titoloscelto=nuovotitolo.value;
    let min=-1;
    let max=arr.length;

    if(arr.length>0){
      
      document.body.innerHTML=
    `
      <style>
        body{
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .box{
          display: grid;
          align-items: center;
          gap: 80px;
          flex-direction: column;
          
        }
        .box1, .box2{
          
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: 'SF';
          font-size: 25px;
          width: 250px;
          height: min-content;
          border-radius: 30px;
          background-color: #333333;
          padding: 20px;
          user-select: none;
          cursor: pointer;
        }
      </style>
      <div class="box">
        <div class="box1"></div>
        <div class="box2"></div>
      </div>
    `


    let box1 = document.querySelector('.box1')
    let box2 = document.querySelector('.box2')
    box1.innerHTML=titoloscelto;
    let meta=Math.round(((max-min)/2)+min);
    box2.innerHTML= arr[meta][1];

      box1.addEventListener("click", function(){
        
        
          
        max=meta;
        meta=Math.round(((max-min)/2)+min);
        controlla(min,max,arr,titoloscelto);
        
        box2.innerHTML= arr[meta][1];

        
        
      })
      box2.addEventListener("click", function(){
          min=meta;
          meta=Math.round(((max-min)/2)+min);
          controlla(min,max,arr,titoloscelto);
          box2.innerHTML= arr[meta][1];
        
      })
    }
    else{
      push(DBScelto,titoloscelto);
      location.reload();
    }


  }
 })
})

let esci = document.querySelector('.esci');
esci.addEventListener("click",function(){
  Object.keys(localStorage).forEach(e=>{
    if(e.startsWith("Classifica")){
      localStorage.removeItem(e);
      location.reload();
    }
  })
})


