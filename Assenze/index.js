 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  //cambia
  databaseURL: "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/"
}



let OreDiAssenzaMassime =235;



function eliminadalDB(id){
  let posizione = ref(database,`${DBScelto._path.pieces_[0]}/${id}`);
  remove(posizione);
}
const app = initializeApp(appSettings)
const database = getDatabase(app);
const DBScelto = ref(database, "AssenzeSimo");


let inputAss = document.getElementById('inputAss');
let bottInvia = document.getElementById('bottInvia');
let inputPres = document.getElementById('inputPres');
let PercAssVal = document.getElementById('PercAssVal');
let AssMancVal = document.getElementById('AssMancVal');
let GiorniPresManc23 = document.getElementById('GiorniPresManc23');
let GiorniPresManc24 = document.getElementById('GiorniPresManc24');

let presenze;
let assenze;

onValue(DBScelto ,function(snapshot){
      
  if(snapshot.exists()){
    //DB presente

    let s=snapshot.val();
    if(Object.entries(s).length>1){
      eliminadalDB(Object.entries(s)[0][0])
    }
    presenze = +Object.entries(s)[Object.entries(s).length-1][1][0];
    assenze = +Object.entries(s)[Object.entries(s).length-1][1][1];
    inputPres.setAttribute('placeholder',presenze)
    inputAss.setAttribute('placeholder',assenze)
    PercAssVal.innerHTML=((assenze/(assenze+presenze))*100).toFixed(1)+'%'
    

    AssMancVal.innerHTML= ((OreDiAssenzaMassime-assenze)/6).toFixed(0);

    let a=((((77/23)*assenze)-presenze)/6).toFixed(2);
    if(a>=0){GiorniPresManc23.innerHTML =a}
    else{GiorniPresManc23.innerHTML =0}

    let b=((((16/6)*assenze)-presenze)/6).toFixed(2);
    if(b>=0){GiorniPresManc24.innerHTML =b}
    else{GiorniPresManc24.innerHTML =0}

  }
  else{
  }
})

function clickk(){

      let a=[]
      if(inputPres.value!=""&&
      inputAss.value==""){
        a=[
          inputPres.value,
          assenze
        ]
      }
      else if(inputPres.value==""&&
      inputAss.value!=""){
        a=[
          presenze,
          inputAss.value,
        ]
      }
      else if(inputPres.value!=""&&
      inputAss.value!=""){
        a=[
          inputPres.value,
          inputAss.value,
        ]
      }
      else{}
      push(DBScelto,a);
      
      inputPres.value="";
      inputAss.value="";
    
}

bottInvia.addEventListener('click',clickk())
inputPres.addEventListener('keypress',e=>{
  if(e.key=='Enter'){clickk()}
})
inputAss.addEventListener('keypress',e=>{
  if(e.key=='Enter'){clickk()}
})

