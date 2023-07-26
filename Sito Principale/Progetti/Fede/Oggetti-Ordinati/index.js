import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  //cambia
  databaseURL: "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app);
const DBScelto = ref(database, "Oggetti")


function eliminadalDB(id){
  let posizione = ref(database,`Oggetti/${id}`)
  remove(posizione);
}

let box= getid("box")
let ul = getid("myUl")
let cont1= getid("cont1")
let cont2= getid("cont2")
let input= getid("input")
let cestino= getid("cestino")
let statoelimina=0;


onValue(DBScelto ,function (snapshot){
      
  if(snapshot.exists()){
    //DB presente

    let s=snapshot.val();


    ul.innerHTML=""
    Object.entries(s).forEach(e=> {
      let nuovoLi = document.createElement("li");
      nuovoLi.textContent=e[1];
      let liID = e[0];

      nuovoLi.addEventListener("click", function(){
        if(statoelimina==1){
          remove(ref(database,`Oggetti/${liID}`))
          if(Object.values(s).length<=1){
            location.reload()
          }

        }
      })
      ul.append(nuovoLi);
    })
  }
  else{
    //DB vuoto
  }
})


input.addEventListener("keypress", e=>{
  if(input.value!==""&&e.key=="Enter"){
    push(DBScelto, input.value)
    input.value=""
  }

})

cestino.addEventListener("click", function(){
  if(statoelimina==0){
    document.body.classList.add("elimina")
    statoelimina=1;
  }
  else{
    
    document.body.classList.remove("elimina")
    statoelimina=0;
  }
})





