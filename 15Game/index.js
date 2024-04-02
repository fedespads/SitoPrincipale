(function getsg() {
  if (!localStorage.getItem("sg")) localStorage.setItem("sg", 4);
  sg = +localStorage.getItem("sg");
  document.querySelector("#num").innerHTML = sg;
  document.querySelector(":root").style.setProperty("--sg", sg);
})();
(function creaGe() {
  for (let x = 0; x < sg; x++) {
    for (let y = 0; y < sg; y++) {
      let a = document.createElement("div");
      a.classList.add("center");
      a.classList.add("ge");
      a.setAttribute("data-p", x + 1 + "" + (y + 1));
      g.appendChild(a);
    }
  }
})();
(function riempiGe() {
  document.querySelector("#bl") && (document.querySelector("#bl").id = "");
  let a = [];
  for (let i = 1; i <= sg * sg - 1; i++) a.push(i);
  a.push(" ");
  let i = 0;
  while (a.length > 0) {
    let rn = randint(0, a.length - 1),
      gen = document.querySelectorAll(".ge")[i];
    gen.innerHTML = a[rn];
    a[rn] == " " && (gen.id = "bl");
    a.splice(rn, 1);
    i++;
  }
})();
(function resizegrid() {
  let a = document.querySelector("#b").getBoundingClientRect().width,
    b = window.innerWidth - 20;
  if (a > b) {
    document.querySelector("#b").style.scale = b / a;
  }
})();
(function sposta() {
  document.querySelectorAll(".ge").forEach((e) => {
    if (mobile()) {
      e.addEventListener("touchstart", function () {
        md(e);
      });
    } else {
      e.addEventListener("mousedown", function () {
        md(e);
      });
    }
  });
})();
function md(e) {
  if (e.id != "bl" && !endgame) {
    if (!ft) {
      ft = true;
      st = Date.now();
      loop();
    }
    let c = e.getAttribute("data-p").split(""),
      v = document.querySelector("#bl").getAttribute("data-p").split("");
    let r;
    if (c[0] == v[0]) {
      r = chain(c[1], v[1], c[0], 2);
    } else if (c[1] == v[1]) {
      r = chain(c[0], v[0], c[1], 1);
    }
    if (r) {
      document.querySelector("#bl").id = "";
      e.id = "bl";
      for (let i = 0; i < r.length - 1; i++) {
        let x = r[i].innerHTML;
        r[i].innerHTML = r[i + 1].innerHTML;
        r[i + 1].innerHTML = x;
      }
      let gr = [...document.querySelectorAll(".ge")]
          .map((e) => +e.innerHTML)
          .slice(0, sg * sg - sg),
        nms = [];
      for (let i = 1; i <= sg * sg - sg; i++) {
        nms.push(i);
      }
      if (ca(gr, nms)) {
        endgame = true;
        document.querySelector("#bl").id = "";
        document.querySelectorAll(".ge")[sg * sg - 1].id = "bl";
        let i = 1;
        document.querySelectorAll(".ge").forEach((e) => {
          e.innerHTML = i;
          i++;
        });
      }
    }
  }
}
function loop() {
  let t = time();
  document.querySelector("#timer").innerHTML = t[0] + ":" + t[1] + ":" + t[2];
  !endgame && requestAnimationFrame(loop);
}
if(window.navigator.standalone==false){
  document.body.innerHTML='Aggiungi il sito alla schermata home'
}