import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const appSettings = {
  //cambia
  databaseURL:
    "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/",
};
let s;
function eliminadalDB(id) {
  let a = "";
  DBScelto._path.pieces_.forEach((e) => {
    a += `${e}/`;
  });
  let posizione = ref(database, `${a}${id}`);
  remove(posizione);
}
function riempiDB(arr) {
  Object.keys(s).forEach((e) => {
    eliminadalDB(e);
  });

  arr.forEach((e) => {
    push(DBScelto, e[1]);
  });
  op = 0;
  location.reload();
}
function controlla(min, max, arr, titoloscelto) {
  if (min == max - 1) {
    for (let i = arr.length; i > max; i--) {
      arr[i] = arr[i - 1];
    }
    arr[max] = [max + 1, titoloscelto];
    for (let i = max + 1; i <= arr.length - 1; i++) {
      arr[i][0] = arr[i][0] + 1;
    }
    op = 1;
    riempiDB(arr);
  }
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
let DBScelto;
let arr = [];
let op = 0;
let email;
let cdm;
let testodacopiare = "";
Object.entries(localStorage).forEach((e) => {
  if (e[0].startsWith("DAC")) {
    email = JSON.parse(e[1])[0].replace(/[@.]/g, "");
  }
  if (e[0].startsWith("cdm")) {
    cdm = e[1];
  }
});
DBScelto = ref(database, `Classifica/${email}/${cdm}`);
document.querySelector(".titolo").innerHTML = cdm;

let boxlista = document.querySelector(".boxlista");

onValue(DBScelto, function (snapshot) {
  if (snapshot.exists()) {
    s = snapshot.val();
    if (op == 0) {
      arr = [];

      boxlista.innerHTML = "";
      let i = 1;
      Object.entries(s).forEach((e) => {
        let a = document.createElement("div");
        a.classList.add("elLista");
        a.setAttribute("id", e[0]);
        a.innerHTML = `
          <div class="posizione">${i}.</div>
          <div class="nome">${e[1]}</div>
        `;
        testodacopiare += `${i}. ${e[1]}\n`;
        arr.push([i, e[1]]);
        i++;
        boxlista.appendChild(a);
      });
    }
  } else {
    boxlista.innerHTML = "Classifica vuota";
  }
});

let piu = document.querySelector(".piu");
piu.addEventListener("click", function () {
  document.body.innerHTML = `
    
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
`;

  let nuovotitolo = document.querySelector(".nuovotitolo");
  nuovotitolo.addEventListener("keypress", (e) => {
    if (e.key == "Enter" && nuovotitolo.value != "") {
      let titoloscelto = nuovotitolo.value;
      let min = -1;
      let max = arr.length;

      if (arr.length > 0) {
        document.body.innerHTML = `
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
    `;

        let box1 = document.querySelector(".box1");
        let box2 = document.querySelector(".box2");
        box1.innerHTML = titoloscelto;
        let meta = Math.round((max - min) / 2 + min);
        box2.innerHTML = arr[meta][1];

        box1.addEventListener("click", function () {
          max = meta;
          meta = Math.round((max - min) / 2 + min);
          controlla(min, max, arr, titoloscelto);

          box2.innerHTML = arr[meta][1];
        });
        box2.addEventListener("click", function () {
          min = meta;
          meta = Math.round((max - min) / 2 + min);
          controlla(min, max, arr, titoloscelto);
          box2.innerHTML = arr[meta][1];
        });
      } else {
        push(DBScelto, titoloscelto);
        location.reload();
      }
    }
  });
});

document.querySelector(".freccia").addEventListener("click", function () {
  localStorage.removeItem("cdm");
  window.location.href = "../";
});
document.querySelector(".copia").addEventListener("click", function () {
  document.querySelector(":root").style.setProperty("--oc", 1);
  setTimeout(function () {
    document.querySelector(":root").style.setProperty("--oc", 0);
  }, 2000);
  // navigator.clipboard.writeText(testodacopiare);

  const storage = document.createElement("textarea");
  storage.value = testodacopiare;
  storage.classList.add("ta");
  document.body.appendChild(storage);

  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(storage);
});

document.querySelector(".cestino").addEventListener("click", function () {
  document.body.classList.toggle("elimina");
});

document.addEventListener('click',e=>{
  if(e.target==document.body&&!document.body.classList.contains('blur')){
    document.body.classList.remove('elimina')
    
    document.querySelector('.boxtitolo').innerHTML=`
      
    <div class="pulsante freccia">
      <svg fill="#fff" height="19px" width="19px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 330 330" xml:space="preserve">
      <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
        c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
        C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
        C255,161.018,253.42,157.202,250.606,154.389z"/>
      </svg>
    </div>
    <div class="titolo">${cdm}</div>
    <div class="spaziodx"></div>
    `
  }
  let idscelto=false;
  if(e.target.className=='elLista'){
    idscelto=e.target.id;
  }
  else if(e.target.className=='nome'||e.target.className=='posizione'){
    idscelto=e.target.parentNode.id;
  }
  if(idscelto&&document.body.classList.contains('elimina')){
    eliminadalDB(idscelto)
  }

  if(e.target.className=='titolo'){

    if(document.body.classList.contains('elimina')){ 
      let aapesso=false;
      let a = document.createElement('div');
      a.classList.add('caselladel');
      a.innerHTML=`
        <div class="titolocasella">Eliminare la classifica?</div>
        <div class="risposte">
          <div class=no>No</div>
          <div class=si>Sì</div>
        </div>
      `
      document.body.classList.add('blur')
      if(!aapesso){
        document.body.appendChild(a)
        aapesso=true;
      }
    }
    else{
      e.target.remove();
      document.querySelector('.boxtitolo').innerHTML=`
      
      <div class="pulsante freccia">
        <svg fill="#fff" height="19px" width="19px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	      viewBox="0 0 330 330" xml:space="preserve">
        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
          C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
          C255,161.018,253.42,157.202,250.606,154.389z"/>
        </svg>
      </div>
      <input class="inputtitolo">
      <div class="spaziodx"></div>
      `
      document.querySelector('.inputtitolo').focus()
      let inputtitolo =document.querySelector('.inputtitolo');
      inputtitolo.addEventListener('keypress',el=>{
        if(el.key=='Enter'&&inputtitolo.value!=""){
          Object.entries(s).forEach(v=>{
            push(ref(database, `Classifica/${email}/${inputtitolo.value}`),v[1])
            eliminadalDB(v[0])
          })
          localStorage.setItem('cdm',inputtitolo.value);
          location.reload();

        }
      })

    }
  }
  if(e.target.className=='no'){
    document.body.classList.remove('blur');
    document.querySelector('.caselladel').remove()
  }
  if(e.target.className=='si'){
    Object.keys(s).forEach(e=>{
      eliminadalDB(e);
    })
    window.location.href="../"
  }
})