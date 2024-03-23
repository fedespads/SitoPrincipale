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
  let posizione = ref(database, `${DBScelto._path.pieces_[0]}/${id}`);
  remove(posizione);
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const DBScelto = ref(database, "ScuolaSimo");
onValue(DBScelto, function (snapshot) {
  if (snapshot.exists()) {
    //DB presente

    let s = snapshot.val();

    contimpegni.innerHTML = "";
    let arraycopia = [];
    Object.entries(s).forEach((e) => {
      let ar = {};
      // data
      ar["data"] = e[1][2];
      // tipo
      ar["tipo"] = e[1][0];
      // materia
      ar["materia"] = e[1][1];
      // id
      ar["id"] = e[0];
      ar["nota"] = e[1][3] ? e[1][3] : "";
      arraycopia.push(ar);
    });
    arraycopia.sort(function (a, b) {
      return new Date(a["data"]) - new Date(b["data"]);
    });
    arraycopia.forEach((el) => {
      contimpegni.innerHTML += `<div class="bb">
        <div class="c">
          <div class="edit">Modifica</div>
          <div class="contenitore-impegno-singolo">
            <div class="start ${el["tipo"]}1">${el["tipo"]}</div>
            <div class="center">${el["materia"]}</div>
            <div class="end">${data12(el["data"])}</div>
          </div>
          <div class='delete' id="${el["id"]}">Elimina</div>
        </div>
        ${!el["nota"] == "" ? '<div class="nota">' + el["nota"] + "</div>" : ""}
      </div>`;
    });

    after();
  } else {
    contimpegni.innerHTML = "Calendario vuoto";
  }
});

let i = document.getElementById("i");
let v = document.getElementById("v");
let piu = document.getElementById("piu");
let materie = document.getElementById("materie");
let finepiu = document.getElementById("finepiu");
let dataimp = document.getElementById("dataimp");
let notei = document.getElementById("notei");
let contimpegni = document.getElementById("contimpegni");
let testomateria = document.getElementById("testomateria");
let casellamateria = document.getElementById("casellamateria");

let muroblur = document.querySelector(".muroblur");
let imgfreccia = document.querySelector(".imgfreccia");
let contaggiunta = document.querySelector(".contaggiunta");

let materieArr = [
  "Arte",
  "Chimica",
  "Ed. Civica",
  "Filosofia",
  "Fisica",
  "Inglese",
  "Italiano",
  "Lab. Arch.",
  "Mate",
  "Motoria",
  "Potenz.",
  "Prog. Arch.",
  "Religione",
  "Storia",
];

document.addEventListener("click", (e) => {
  document.querySelectorAll(".c").forEach((el) => {
    el.scrollLeft = 100;
  });
  if (
    e.target.classList[0] == "contenitore-impegno-singolo" ||
    e.target.parentElement.classList[0] == "contenitore-impegno-singolo"
  ) {
    [...document.querySelectorAll(".nota")]
      .filter(
        (el) =>
          el != e.target.parentElement.parentElement.querySelector(".nota")
      )
      .forEach((e) => {
        e.classList.remove("open");
      });
    if (e.target.parentElement.parentElement.querySelector(".nota")) {
      console.log(e.target.parentElement.classList);
      if (
        !e.target.parentElement.parentElement
          .querySelector(".nota")
          .classList.contains("open") &&
        (e.target.parentElement.scrollLeft == 0 ||
          e.target.parentElement.scrollLeft == 200)
      ) {
        e.target.parentElement.classList.add("nc");
      }
      e.target.parentElement.parentElement
        .querySelector(".nota")
        .classList.toggle("open");
    }
  } else {
    document.querySelectorAll(".nota").forEach((e) => {
      e.classList.remove("open");
    });
  }

  if (e.target.classList[0] == "muroblur") {
    localStorage.removeItem('delete')
    removebox();
  }
});

materieArr.forEach((e) => {
  let a = document.createElement("div");
  a.classList.add("materia");
  a.innerHTML = e;
  materie.appendChild(a);
});

document.querySelectorAll(".materia").forEach((e) => {
  e.addEventListener("click", function () {
    testomateria.innerHTML = e.innerHTML;
    materie.classList.remove("active");
    imgfreccia.classList.remove("active");
  });
});
function removebox() {
  muroblur.classList.remove("active");
  contaggiunta.classList.remove("active");
  [...document.querySelector(".ContCose").children].forEach((e) => {
    e.classList.remove("active");
  });
  testomateria.innerHTML = "-";
  dataimp.value = "";
  notei.value = "";
}
piu.addEventListener("click", function () {
  muroblur.classList.add("active");
  contaggiunta.classList.add("active");
});
finepiu.addEventListener("click", function () {
  let arr = [
    document.querySelector(".ContCosa.active")?.innerHTML,
    testomateria.innerHTML,
    dataimp.value,
    notei.value,
  ];

  if (arr[0] && arr[1] != "-" && arr[2]) {
    push(DBScelto, arr);
  }
  localStorage.getItem('delete') && eliminadalDB(localStorage.getItem('delete'))
  removebox();
});
let cc = ["v", "i", "K"];
cc.forEach((e) => {
  document.querySelector("#" + e).addEventListener("click", function () {
    cc.forEach((el) => {
      document.querySelector("#" + el).classList.remove("active");
    });
    document.querySelector("#" + e).classList.add("active");
  });
});
casellamateria.addEventListener("click", function () {
  materie.classList.toggle("active");
  imgfreccia.classList.toggle("active");
});
function after() {
  document.querySelectorAll(".delete").forEach((e) => {
    e.addEventListener("click", function () {
      eliminadalDB(e.id);
    });
  });
  document.querySelectorAll(".edit").forEach((e) => {
    e.addEventListener("click", function () {
      let c = e.parentElement,
        cis = c.querySelector(".contenitore-impegno-singolo");
      let a1 = {
        C: "K",
        V: "v",
        I: "i",
      };
      localStorage.setItem('delete',c.querySelector('.delete').id)
      document
        .querySelector("#" + a1[cis.children[0].innerHTML])
        .classList.add("active");
      document.querySelector("#testomateria").innerHTML =
        cis.children[1].innerHTML;
      document.querySelector("#dataimp").value = data21(
        cis.children[2].innerHTML
      );
      if (c.parentElement.querySelector(".nota")) {
        document.querySelector("#notei").value =
          c.parentElement.querySelector(".nota").innerHTML;
      }

      muroblur.classList.add("active");
      contaggiunta.classList.add("active");
    });
  });
  document.querySelectorAll(".c").forEach((el) => {
    el.scrollLeft = 100;
    el.addEventListener("scroll", function () {
      if (el.classList.contains("nc")) {
        (function c() {
          if (el.scrollLeft == 100) {
            el.classList.remove("nc");
          } else {
            requestAnimationFrame(c);
          }
        })();
      } else {
        if (el.parentElement.querySelector(".nota.open")) {
          el.parentElement.querySelector(".nota.open").classList.remove("open");
        }
      }
    });
  });
  document.querySelector("#contimpegni").appendChild(
    (function () {
      let a = document.createElement("div");
      a.style = "height:1px;";
      return a;
    })()
  );
  document.querySelector("#cb").clientHeight <
  document.querySelector("#contimpegni").clientHeight
    ? (document.querySelector("#cb").style = "align-items: start")
    : (document.querySelector("#cb").style = "align-items: center");
}

if (document.documentElement.requestFullscreen) {
  document.documentElement.requestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
  document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
  document.documentElement.webkitRequestFullscreen();
} else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
  document.documentElement.msRequestFullscreen();
}