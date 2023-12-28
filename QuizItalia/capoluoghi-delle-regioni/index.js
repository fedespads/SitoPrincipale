 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  //cambia
  databaseURL: "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/"
}

function eliminadalDB(id){
  let a='';
  DBScelto._path.pieces_.forEach(e=>{
    a+=`${e}/`
  })
  let posizione = ref(database,`${a}${id}`);
  remove(posizione);
}
const app = initializeApp(appSettings)
const database = getDatabase(app);
const DBScelto = ref(database, "Cambiaqui")
onValue(DBScelto ,function(snapshot){
      
  if(snapshot.exists()){
    //DB presente

    let s=snapshot.val();
    console.log(s)
    
  }
  else{
    //DB vuoto
  }
})


