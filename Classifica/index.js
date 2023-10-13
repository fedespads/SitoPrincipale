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

const app = initializeApp(appSettings);
const database = getDatabase(app);
let DBScelto;
let PinExists = false;
let email;
Object.entries(localStorage).forEach((e) => {
  if (e[0].startsWith("DAC")) {
    email = JSON.parse(e[1])[0].replace(/[@.]/g, "");

    DBScelto = ref(database, `Classifica/${email}`);
    PinExists = true;
  }
});
if (PinExists) {
} else {
  window.location.href = "login";
}
let boxlista = document.querySelector(".boxlista");
onValue(DBScelto, function (snapshot) {
  if (snapshot.exists()) {
    s = snapshot.val();
    boxlista.innerHTML = "";
    Object.keys(s).forEach((e) => {
      let a = document.createElement("div");
      a.classList.add("elLista");
      a.setAttribute("id", e);
      a.innerHTML = `<div class="contenuto">${e}</div>`;
      boxlista.appendChild(a);
    });

    let a = document.createElement("div");
    a.classList.add("elLista");
    a.setAttribute("id", "piu");
    a.innerHTML = "+";
    boxlista.appendChild(a);
  } else {
    let a = document.createElement("div");
    a.classList.add("elLista");
    a.setAttribute("id", "piu");
    a.innerHTML = "+";
    boxlista.appendChild(a);
  }
});
let esci = document.querySelector(".esci");
esci.addEventListener("click", function () {
  Object.keys(localStorage).forEach((e) => {
    if (e.startsWith("DAC")) {
      localStorage.removeItem(e);
      location.reload();
    }
  });
});
document.addEventListener("click", (e) => {
  if (e.target.className == "elLista"&&e.target.id!="piu") {
    localStorage.setItem("cdm", e.target.id);
    window.location.href = "build";
  }
  else if(e.target.id=='piu'){
    window.location.href='create'
  }
});
