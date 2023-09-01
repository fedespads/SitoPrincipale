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
const DBScelto = ref(database, "immagini")
const imagePreview = document.getElementById('imagePreview');
onValue(DBScelto ,function(snapshot){
      
  if(snapshot.exists()){
    //DB presente

    let s=snapshot.val();
    var ultimoel = Object.values(s)[Object.values(s).length-1].split('"')[1];
    imagePreview.src = ultimoel;
    imagePreview.style.display = 'block';
    if(Object.keys(s).length>=2){
      localStorage.setItem('riag',true);
      eliminadalDB(Object.keys(s)[0])
    }


    let altezza =imagePreview.naturalHeight;
    let larghezza = imagePreview.naturalWidth;
    if(altezza>larghezza){
      imagePreview.style.width= `calc(${(larghezza/altezza)} * 80vh)`
      imagePreview.style.height= `80vh`
    }
    else{
      
      imagePreview.style.height= `calc(${(altezza/larghezza)} * 80vw)`
      imagePreview.style.width= `80vw`
    }
    Object.keys(localStorage).forEach(e=>{
      if(e=='riag'){
        localStorage.removeItem('riag');
        location.reload();
      }
    })
    
  }
  else{
    //DB vuoto
  }
})

const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', function() {
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    if (selectedFile.type.match(/^image\//)) {
      const fileReader = new FileReader();

      fileReader.onload = function(event) {
        push(DBScelto,JSON.stringify(event.target.result));
      };
      fileReader.readAsDataURL(selectedFile);
    } else {
      alert('Seleziona un file immagine valido.');
    }
  }
});

