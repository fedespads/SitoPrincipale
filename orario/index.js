let orario = [
  //LUN
  [
    "Lab Architettura",
    "Lab Architettura",
    `Storia Dell'Arte`,
    "Storia",
    "Prog Arch Amb",
    "Prog Arch Amb",
  ],

  //MAR
  ["Fisica", "Fisica", "Motoria", "Motoria", "Chimica", "Chimica"],

  //MER
  [
    "Matematica",
    "Matematica",
    "Prog Arch Amb",
    "Prog Arch Amb",
    "Italiano",
    "Italiano",
  ],

  //GIO
  [
    "Filosofia",
    "Filosofia",
    "Prog Arch Amb",
    "Prog Arch Amb",
    "Lab Architettura",
    "Lab Architettura",
  ],

  //VEN
  [
    "Rel-Alternativa",
    `Storia Dell'Arte`,
    `Storia Dell'Arte`,
    "Inglese",
    "Italiano",
    "Italiano",
  ],

  //SAB
  ["Lab Architettura", "Lab Architettura", "Inglese", "Inglese", "Storia"],
];
(function creaschede() {
  let a = ["08:10", "09:10", "10:15", "11:10", "12:15", "13:15"], g =['Lun', 'Mar','Mer','Gio','Ven','Sab'],ind=0
  orario.forEach((e) => {
    let b = '<div class="c"><div class="g">'+g[ind]+'</div><div class="scheda">';
    ind++;
    for (let i = 0; i < e.length; i++) {
      b += `<div class="r">
           <div class="o">${a[i]}</div>
           <div class="m">${e[i]}</div>
         </div>`;

      if (i == 1) {
        b += `<div class="ri">
          <div class="o">10:05</div>
          <div class="m">Ricreazione</div>
        </div>`;
      }
      if (i == 3) {
        b += `<div class="ri">
      <div class="o">12:05</div>
      <div class="m">Ricreazione</div>
    </div>`;
      }
    }
    b += '</div> <div class="sp"></div></div>';
    document.querySelector("#mainbox").innerHTML += b;
  });
  document.querySelector("#mainbox").innerHTML += '<div class="last"></div>';
})();
console.log(document.querySelector("#mainbox").children[gs()]);
document.querySelectorAll(".c")[gs()].scrollIntoView();

document.querySelector("#mainbox").addEventListener("scroll", function () {
  let sn = Math.floor(document.querySelector("#mainbox").scrollLeft / 320),
    pos = document.querySelector("#mainbox").scrollLeft - sn * 320;
  let a = (pos * -0.000625 + 1).toFixed(2);
  a < 0.8 ? (a = 0.8) : (a = a);
  a = "scale:" + a;
  document.querySelectorAll(".scheda")[sn].style = a;
  a = (pos * 0.000625 + 0.8).toFixed(2);
  a < 0.8 ? (a = 0.8) : (a = a);
  a = "scale:" + a;
  document.querySelectorAll(".scheda")[sn + 1].style = a;
});

if ((oa() <= 855 && gs() < 6) || (oa() <= 790 && gs() == 6)) {
  let o = 0;
  (function a() {
    if (geth(o) < oa()) {
      o++;
      a();
    } else {
      c1();
    }
  })();
  function c1() {
    o--;
    let sc = document.querySelectorAll(".scheda")[gs()];
    if (o == -1) {
      for (let i = 0; i < sc.children.length; i++) {
        if (sc.children[i].classList[0] == "ri") {
          sc.children[i].style.backgroundColor = "rgba(40, 84, 39, 0.2)";
        } else if (sc.children[i].classList[0] == "r") {
          sc.children[i].style.backgroundColor = "rgba(255,255,255, 0.2)";
        }
      }
    } else {
      sc.innerHTML += '<div class="f"></div>';
      let f = document.querySelector(".f");
      for (let i = o; i < sc.children.length; i++) {
        if (sc.children[i].classList[0] == "ri") {
          if (i == o) f.style.backgroundColor = "rgb(40, 84, 39)";
          sc.children[i].style.backgroundColor = "rgba(40, 84, 39, 0.2)";
        } else if (sc.children[i].classList[0] == "r") {
          if (i == o) f.style.backgroundColor = "white";
          sc.children[i].style.backgroundColor = "rgba(255,255,255, 0.2)";
        }
      }
      console.log();
      f.style.top = o * 68 + "px";
      console.log(oa() - geth(o), geth(o + 1) - geth(o));
      f.style.width =
        +((oa() - geth(o)) / (geth(o + 1) - geth(o))).toFixed(2) * 300 + "px";
    }
  }
}
