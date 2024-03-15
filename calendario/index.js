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
      contimpegni.innerHTML +=
        '<div class="bb"><div class="c"><div id="' +
        el["id"] +
        '" class="contenitore-impegno-singolo"><div class="start ' +
        el["tipo"] +
        '1">' +
        el["tipo"] +
        '</div><div class="center">' +
        el["materia"] +
        '</div><div class="end">' +
        data12(el["data"]) +
        "</div></div> <div class='delete'>Elimina</div>   </div><div class='nota'>" +
        el["nota"] +
        "</div></div>";
    });

    document.querySelectorAll(".delete").forEach((e) => {
      e.addEventListener("click", function () {
        eliminadalDB(e.parentElement.children[0].id);
      });
    });
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
  console.log(e.target);
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

    e.target.parentElement.parentElement
      .querySelector(".nota")
      .classList.toggle("open");
  } else {
    document.querySelectorAll(".nota").forEach((e) => {
      e.classList.remove("open");
    });
  }

  if (e.target.classList[0] == "muroblur") {
    muroblur.classList.remove("active");
    contaggiunta.classList.remove("active");
    console.log(1);
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

  muroblur.classList.remove("active");
  contaggiunta.classList.remove("active");
  i.classList.remove("active");
  v.classList.remove("active");
  testomateria.innerHTML = "-";
  dataimp.value = "";
  notei.value = "";
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
