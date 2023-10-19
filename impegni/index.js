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
if (localStorage.getItem("ipas")) {
  let he = document.querySelector(".he");
  let piu = document.querySelector(".piu");
  let int = document.querySelector(".int");
  let root = document.querySelector(":root");
  let boxgiorni = document.querySelector(".boxgiorni");
  let arrimp = [];

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
  const DBScelto = ref(database, "Impegni/Impegni1237");
  onValue(DBScelto, function (snapshot) {
    if (snapshot.exists()) {
      //DB presente

      let s = snapshot.val();
      Object.entries(s).forEach((e) => {
        arrimp.push(e);
      });

      let gh = Array.from(document.querySelectorAll(".rot"));
      gh.shift();
      let refs = [];
      gh.forEach((e) => {
        refs.push([e, data(e.innerHTML, he.innerHTML)]);
      });
      arrimp.forEach((e) => {
        if (e[1][1].includes(data(1, he.innerHTML).slice(0, 7))) {
          refs.forEach((el) => {
            if (el[1] == e[1][1]) {
              el[0].classList.add("rosso");
              el[0].setAttribute("data-impegno", e[1][0]);
              el[0].setAttribute("data-id", e[0]);
            }
          });
        }
      });
    } else {
      //DB vuoto
    }
  });

  let c = 1;
  let r = 1;
  let i = 0;
  if (localStorage.getItem("dc")) {
    i = +localStorage.getItem("dc");
  }
  let datacorrente = calcolaData(i);
  function creaHTML() {
    c = 1;
    r = 1;
    if (i <= 0) {
      document.querySelector(".arsx").classList.add("hi");
    } else {
      document.querySelector(".arsx").classList.remove("hi");
    }
    boxgiorni.innerHTML = "";
    datacorrente = calcolaData(i);
    he.innerHTML = meseCorrente(datacorrente);
    for (let i = 0; i < numeroquadrati(datacorrente); i++) {
      let a = document.createElement("div");
      a.classList.add(`sq`);
      a.classList.add(`p${r}${c}`);
      if (i + 2 - PrimoDelMese(datacorrente) > 0) {
        if (i + 2 - PrimoDelMese(datacorrente) < giornooggi(datacorrente)) {
          a.innerHTML = `
        <div class="pass">
          ${i + 2 - PrimoDelMese(datacorrente)}
        </div>

      `;
        } else {
          a.innerHTML = `
    <div class="rot">
      ${i + 2 - PrimoDelMese(datacorrente)}
    </div>

  `;
        }
      }
      c++;
      if (c == 8) {
        c = 1;
        r++;
      }
      boxgiorni.appendChild(a);
    }
    boxgiorni.innerHTML =
      `
    <div class="cerchioscelto rot"></div>
  ` + boxgiorni.innerHTML;
  }
  creaHTML();

  let ps = null;
  let action = true;
  document.addEventListener("click", (e) => {
    if (action) {
      action = false;
      if (e.target.classList[1] == "arsx" && i > 0) {
        i--;
        localStorage.setItem("dc", i);
        location.reload();
      } else if (e.target.classList[1] == "ardx") {
        i++;
        localStorage.setItem("dc", i);
        location.reload();
        creaHTML();
        action = true;
      } else if (
        e.target.classList[0] == "myinp" ||
        e.target.classList[0] == "cerchioscelto" ||
        e.target.classList[0] == "ni"
      ) {
      } else if (e.target.classList[0] == "rot") {
        document.querySelector(".cerchioscelto").classList.remove("active");

        void document.querySelector(".cerchioscelto").offsetWidth;
        e = e.target;
        ps = e;
        e.style.opacity = "0";
        r = 1.5 + 50 * (+e.parentElement.classList[1][1] - 1) + "px";
        c = 1.5 + 50 * (+e.parentElement.classList[1][2] - 1) + "px";
        root.style.setProperty("--c", c);
        root.style.setProperty("--r", r);
        if (e.classList.contains("rosso")) {
          root.style.setProperty("--bg", "#c52121");
        } else {
          root.style.setProperty("--bg", "#252525");
        }
        document.querySelector(".cerchioscelto").innerHTML = e.innerHTML;
        setTimeout(function () {
          document.querySelector(".cerchioscelto").classList.add("active");
        }, 10);

        root.style.setProperty("--zi", 0);
        int.style.filter = "blur(2px)";
        root.style.setProperty("--op", 1);
        setTimeout(function () {
          if (ps.getAttribute("data-impegno")) {
            document.querySelector(".cerchioscelto").innerHTML = `
          <div class="ni">${ps.getAttribute("data-impegno")}</div>
          <div class="meno">-</div>
          `;
          } else {
            document.querySelector(".cerchioscelto").innerHTML =
              '<input class="myinp">';
              document.querySelector('.myinp').focus()
          }
        }, 500);
      } else if (e.target.classList[0] == "meno") {
        eliminadalDB(ps.getAttribute("data-id"));
        location.reload();
      } else {
        if (ps) {
          document.querySelector(".cerchioscelto").innerHTML = ps.innerHTML;
        }
        action = false;
        root.style.setProperty("--tran", "0.5s");
        document.querySelector(".cerchioscelto").classList.remove("active");

        int.style.filter = "blur(0px)";
        setTimeout(function () {
          root.style.setProperty("--tran", "0s");
          root.style.setProperty("--op", 0);
          root.style.setProperty("--zi", -1);
          if (ps) {
            ps.style.opacity = "1";
            ps = null;
          }
        }, 500);
      }
      setTimeout(function () {
        action = true;
      }, 500);
    }
  });

  document.addEventListener("keypress", (e) => {
    if (
      e.key == "Enter" &&
      e.target == document.querySelector(".myinp") &&
      document.querySelector(".myinp").value != ""
    ) {
      push(DBScelto, [
        document.querySelector(".myinp").value,
        data(ps.innerHTML, he.innerHTML),
      ]);
      location.reload();
    }
  });
} else {
  document.body.innerHTML = '<div></div><input class="inputacc">';
  document.addEventListener("keypress", (e) => {
    if (
      e.key == "Enter" &&
      document.querySelector(".inputacc").value == "fed"
    ) {
      localStorage.setItem("ipas", true);
      location.reload();
    }
  });
}
