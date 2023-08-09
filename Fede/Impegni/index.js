 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  //cambia
  databaseURL: "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/"
}
function eliminadalDB(id){
  let posizione = ref(database,`Impegni/${DBScelto._path.pieces_[1]}/${id}`)
  remove(posizione);
}
function submit(e){
  if(e.key=="Enter"&&datainput.value!=""){
    if(impinput.value!=""&&distanza(datainput.value)<=0){
      let oggetto= [impinput.value,datainput.value];
      push(DBScelto,oggetto)
    }
    impinput.value=""
    datainput.value=""
  }
}
const app = initializeApp(appSettings)
const database = getDatabase(app);
let DBScelto = ref(database, "Impegni");

let dispositivo=navigator.userAgent.split('(')[1].split(' ')[0].split(';')[0];
let mobile;
if(dispositivo=='Windows'){
  mobile=false;
}
else{mobile=true;
  document.body.classList.add('mobile')}




let impinput= document.getElementById("impinput");
let datainput= document.getElementById("datainput");
let box= document.getElementById("box");
let copiadb =[];

let i=0;
Object.keys(localStorage).forEach(e=>{
  if(e.startsWith("Impegni")){
    DBScelto= ref(database, `Impegni/${e}`)
    i++;
  }
})
if(i==0){
    document.body.classList.add('first');
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
    myInput.addEventListener('keypress',e=>{
      if(e.key=="Enter"&&myInput.value!=""){
        localStorage.setItem(`Impegni${myInput.value}`,"")
        location.reload();
    }

    })

  }


onValue(DBScelto ,function(snapshot){
      
  if(snapshot.exists()){
    let s=snapshot.val();
    box.innerHTML="";
    copiadb=[]
    Object.entries(s).forEach(e=>{
      if(distanza(e[1][1])>0){
        eliminadalDB(e[0]);
      }

      let o =[e[1][1],e[1][0],e[0]];
      copiadb.push(o);
    })
    copiadb.sort()
    copiadb.forEach(e=>{
      let boximpegno = document.createElement('div');
      let uno = document.createElement('div');
      let due = document.createElement('div');
      let tre = document.createElement('div');
      let quattro = document.createElement('div');
      uno.classList.add("impegnosingolo");
      due.classList.add("scrittaimpegno");
      tre.classList.add("dataimpegno");
      boximpegno.classList.add('boximpegno')
      quattro.classList.add("distanzaimpegno");
      due.innerHTML=e[1];
      tre.innerHTML=data12(e[0]);
      quattro.innerHTML=distanza(e[0]);
      uno.append(due);
      uno.append(tre);
      uno.append(quattro);

      boximpegno.appendChild(uno);
      if(mobile){
        let cinque = document.createElement('div');
        cinque.classList.add('del');
        cinque.innerHTML='Elimina';
        cinque.setAttribute("id",e[2]);
        boximpegno.appendChild(cinque);
      }
      else{
        uno.setAttribute("id",e[2]);
      }

      box.appendChild(boximpegno);
    })
    if(mobile){
      document.querySelectorAll('.del').forEach(e=>{
        e.addEventListener("click", function(){
          eliminadalDB(e.id)
        })
      })
    }
    else{
      document.querySelectorAll('.impegnosingolo').forEach(e=>{
        e.addEventListener("click", function(){
          document.querySelectorAll('.impegnosingolo').forEach(el=>{
          if(el!=e)  el.classList.remove('el')}) 
          e.classList.toggle('el')
          if(!e.classList[1]){
            eliminadalDB(e.id)
          }
        })
      })
    }
    
    let i=0;
    document.querySelectorAll('.boximpegno').forEach(e=>{
      e.style.animation = `muovi ${0.5+i*0.07}s ${i*0.06}s`
      i++;
    })

  }
  else{
    //DB vuoto
  }
})



document.body.addEventListener("keypress", e=>{submit(e)})
datainput.addEventListener("keypress", e=>{submit(e)})

document.body.addEventListener("click", e=>
{

if(e.target.classList[0]!="impegnosingolo"&&
e.target.classList[0]!="distanzaimpegno"&&
e.target.classList[0]!="dataimpegno"&&
e.target.classList[0]!="scrittaimpegno"
){
  document.querySelectorAll('.impegnosingolo').forEach(e=>{
    e.classList.remove('el')
  })
}}
)

document.querySelector('.esci').addEventListener('click', function(){
Object.keys(localStorage).forEach(e=>{
  if(e.startsWith("Impegni")){
    localStorage.removeItem(e);
    location.reload();
  }
})
})

