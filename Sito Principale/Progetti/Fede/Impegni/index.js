 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  //cambia
  databaseURL: "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/"
}
function eliminadalDB(id){
  let posizione = ref(database,`Impegni/${id}`)
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
const DBScelto = ref(database, "Impegni")

let impinput= document.getElementById("impinput");
let datainput= document.getElementById("datainput");
let box= document.getElementById("box");
let copiadb =[];

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
      let uno = document.createElement('div');
      let due = document.createElement('div');
      let tre = document.createElement('div');
      let quattro = document.createElement('div');
      uno.classList.add("impegnosingolo");
      due.classList.add("scrittaimpegno");
      tre.classList.add("dataimpegno");
      quattro.classList.add("distanzaimpegno");
      due.innerHTML=e[1];
      tre.innerHTML=data12(e[0]);
      quattro.innerHTML=distanza(e[0]);
      uno.append(due);
      uno.append(tre);
      uno.append(quattro);
      uno.setAttribute("id",e[2]);
      box.append(uno);
    })

    
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

