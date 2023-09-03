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

function eliminadalDB(id) {
  let a = "";
  DBScelto._path.pieces_.forEach((e) => {
    a += `${e}/`;
  });
  let posizione = ref(database, `${a}${id}`);
  remove(posizione);
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const DBScelto = ref(database, "Cambiaqui");
let vuotoval;
let timer;

onValue(DBScelto, function (snapshot) {
  if (snapshot.exists()) {
    //DB presente

    let s = snapshot.val();
    console.log(s);
  } else {
    //DB vuoto
  }
});

let griglia = document.querySelector("#griglia");

for (let i = 1; i <= 9; i++) {
  let f = [11, 12, 13, 21, 22, 23, 31, 32, 33];
  let a = document.createElement("div");
  a.classList.add("quadrato");
  a.classList.add(`a${f[i - 1]}`);
  a.innerHTML = i;
  griglia.appendChild(a);
}
function controlla() {
  let f = [11, 12, 13, 21, 22, 23, 31, 32, 33];
  let c = 0;
  for (let i = 1; i <= 6; i++) {
    if (document.querySelector(`.a${f[i - 1]}`).innerHTML == i) {
      c++;
    }
  }
  if (document.querySelector(".a33").classList.length == 3) {
    c++;
  }
  if (c == 7) {
    document.querySelector(".a31").innerHTML = "7";
    document.querySelector(".a32").innerHTML = "8";
    document.querySelector(".a33").innerHTML = "9";
    document.querySelector(".a33").classList.remove("vuoto");
    vuotoval = "";

    document.querySelector('#titolo').innerHTML="Hai vinto!!";
    clearInterval(timer)
  }
}
function sistema(arr) {
  arr.forEach((e) => {
    let b = document.querySelector(`.a${e[1]}`);
    if (e[0] == "vuoto") {
      document.querySelectorAll(".quadrato").forEach((el) => {
        el.classList.remove("vuoto");
      });
      b.classList.add("vuoto");
      vuotoval = b.classList[1][1] + b.classList[1][2];
      b.innerHTML = "";
    } else {
      b.innerHTML = e[0];
    }
  });
}
function avvia() {
  
  document.querySelector('#titolo').innerHTML="";
  let arr = [];
  for (let i = 1; i <= 9; i++) {
    let vai = false;
    let x;
    while (!vai) {
      let d = 0;
      x =
        Math.floor(Math.random() * 3 + 1) * 10 +
        Math.floor(Math.random() * 3 + 1);
      arr.forEach((e) => {
        if (e[1] == x) {
          d++;
        }
      });
      if (d == 0) {
        vai = true;
      }
    }
    if (i == 9) {
      arr[i - 1] = ["vuoto", x];
    } else {
      arr[i - 1] = [i, x];
    }
  }
  sistema(arr);
}
document.getElementById("avviabut").addEventListener("click", function () {
  avvia();
  let timerval=0;
  timer = setInterval(function(){
    timerval+=0.01;

    document.getElementById('timerdiv').innerHTML=timerval.toFixed(2)+'s';
  },10)

});
document.querySelectorAll(".quadrato").forEach((e) => {
  let clickval;
  e.addEventListener("click", function () {
    clickval = e.classList[1][1] + e.classList[1][2];
    if (clickval[0] == vuotoval[0] || clickval[1] == vuotoval[1]) {
      let sottr;
      let dir;
      let k;
      if (clickval[0] == vuotoval[0]) {
        sottr = +clickval[1] - +vuotoval[1];
        dir = "r";
        k = clickval[0];
      } else if (clickval[1] == vuotoval[1]) {
        sottr = +clickval[0] - +vuotoval[0];
        dir = "c";
        k = clickval[1];
      }

      if (sottr == 1 || sottr == -1) {
        document.querySelector(`.a${vuotoval}`).innerHTML =
          document.querySelector(`.a${clickval}`).innerHTML;
        document.querySelector(`.a${clickval}`).innerHTML = "";

        document.querySelector(`.a${vuotoval}`).classList.remove("vuoto");
        document.querySelector(`.a${clickval}`).classList.add("vuoto");
        vuotoval = clickval;
      } else if (sottr == 2 || sottr == -2) {
        if (dir == "r") {
          document.querySelector(`.a${vuotoval}`).innerHTML =
            document.querySelector(`.a${k}2`).innerHTML;
          document.querySelector(`.a${k}2`).innerHTML = document.querySelector(
            `.a${clickval}`
          ).innerHTML;
          document.querySelector(`.a${clickval}`).innerHTML = "";

          document.querySelector(`.a${vuotoval}`).classList.remove("vuoto");
          document.querySelector(`.a${clickval}`).classList.add("vuoto");
          vuotoval = clickval;
        } else if (dir == "c") {
          document.querySelector(`.a${vuotoval}`).innerHTML =
            document.querySelector(`.a2${k}`).innerHTML;
          document.querySelector(`.a2${k}`).innerHTML = document.querySelector(
            `.a${clickval}`
          ).innerHTML;
          document.querySelector(`.a${clickval}`).innerHTML = "";

          document.querySelector(`.a${vuotoval}`).classList.remove("vuoto");
          document.querySelector(`.a${clickval}`).classList.add("vuoto");
          vuotoval = clickval;
        }
      }
    }

    controlla();
  });
});
