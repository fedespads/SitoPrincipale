import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const as = {
  //cambia
  databaseURL:
    "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/",
};

function eliminadalDB(id) {
  let a = "";
  DBScelto._path.pieces_.forEach((e) => {
    a += `${e}/`;
  });
  let posizione = ref(database, `${a}${id}`);
  remove(posizione);
}
const app = initializeApp(as);
const database = getDatabase(app);
const DBScelto = ref(database, "orariostefy");
const b = document.querySelector("#b");
let s,
  k,
  v,
  ev = [],
  tday = new Date().getDate();

onValue(DBScelto, function (snapshot) {
  if (snapshot.exists()) {
    //DB presente

    s = snapshot.val();
    k = Object.keys(s);
    v = Object.values(s);

    let k1 = [...k];
    k1.pop();
    k1.forEach((e) => {
      eliminadalDB(e);
    });
    v = JSON.parse(v);
    if (localStorage.getItem("change")) {
      let a = JSON.parse(localStorage.getItem("change"));
      localStorage.removeItem("change");
      v[a[0]] = a[1];
      push(DBScelto, JSON.stringify(v));
    } else {
      c1();
    }
  } else {
    //DB vuoto
  }
});

function c1() {
  if (isAndroidMobile()) {
    document.querySelector("#b").classList.add("bnoscroll");
    detectSwipeDirection();
  }
  (function setEv() {
    let type = [
        "RIPOSO",
        "VETRINE MATTINA",
        "VETRINE POMERIGGIO",
        "VETRINE MATTINA domenica",
        "VETRINE POMERIGGIO domenica",
        "VETRINE intero",
        "VETRINE intero domenica",
        "BARRIERE tutto il giorno",
        "BARRIERE",
        "BARRIERE intero domenica",
        "MATTINA + notturno",
      ],
      o = [
        "",
        "9:00-13:00",
        "14:30-19:30",
        "8:30-14:00",
        "14:00-19:30",
        "9:00-13:00 14:30-19:30",
        "8:30-19:30",
        "8:30-19:00",
        "8:30-13:00 14:30-20:00",
        "09:00 19:00",
        "09:00-13:00 19:30-06:00",
      ],
      no = [0, 4, 5, 5.5, 5.5, 9, 11, 10.5, 10, 10, 14.5];
    [...gmc()].forEach((e, i) => {
      let a = [e, type[v[i]], o[v[i]], no[v[i]]];
      ev.push(a);
    });
  })();
  for (let i = 1; i <= ev.length - 1; i++) {
    let e = ev[i];
    b.innerHTML += `
        <div class="c">
          <div class="s1">
            <div class="d">
              ${getd(i)}
            </div>
            <div class="g">
              ${e[0]}
            </div>
            <span class="line">
            </span>
          </div>
          <div class="s2">
            <div class="t1">
              sei a
            </div>
            <div class="t2">
              ${e[1].split(" ")[0]}
            </div>
            <div class="t3">
              ${e[1].includes(" ") ? e[1].substring(e[1].indexOf(" ") + 1) : ""}
            </div>
          </div>
          <div class="s3">
            <div class="o1">
              ${e[2].split(" ")[0]}
            </div>
            <div class="o2">
              ${e[2].includes(" ") ? e[2].substring(e[2].indexOf(" ") + 1) : ""}
            </div>
            <div class="edit" data-daY="${i},${v[i]}">
              Modifica
            </div>
          </div>
        </div>
        `;
  }

  b.scrollLeft = (new Date().getDate() - 1) * document.body.clientWidth;
  let sum = 0,
    tot = 0;
  for (let i = 0; i <= new Date().getDate(); i++) {
    sum += ev[i][3];
  }
  for (let i = 0; i <= ev.length - 1; i++) {
    tot += ev[i][3];
  }
  document.querySelector("#ore").innerHTML = "ORE: " + sum + " su " + tot;
}

document.addEventListener("click", (e) => {
  if (e.target.classList[0] == "edit") {
    localStorage.setItem("md", e.target.getAttribute("data-day"));
    window.location.href = "edit";
  }
});
if (isAndroidMobile()) {
}
