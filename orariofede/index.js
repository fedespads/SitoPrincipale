let orario = [
  //LUN
  [
    "Accoglienza ITP",
    "Accoglienza ITP",
    "Accoglienza ITP",
    "Inglese",
    "Matematica",
    "Italiano",
    "Italiano",
  ],

  //MAR
  [
    "Francese",
    "Alimentazione",
    "Religione",
    "Matematica ITP",
    "Matematica",
    "Accoglienza TIC",
    "Diritto ",
  ],

  //MER
  [
    "LAB Cucina Sala",
    "LAB Cucina Sala",
    "LAB Cucina Sala",
    "LAB Cucina Sala",
    "LAB Cucina Sala",
    "Geografia",
    "Geografia",
  ],

  //GIO
  [
    "Italiano",
    "Italiano",
    "Diritto ",
    "Matematica",
    "Cucina Alimentazione",
    "Inglese",
    "Inglese",
  ],

  //VEN
  [
    "Biologia",
    "Biologia Cucina",
    "Sc. Motorie",
    "Sc. Motorie",
    "Francese",
    "LAB Cucina Sala",
    "LAB Cucina Sala",
  ],
];
(function creaschede() {
  let a = [
      "08:10",
      "09:00",
      "09:55",
      "10:40",
      "11:30",
      "12:25",
      "13:10",
      "14:00",
    ],
    g = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    ind = 0;
  orario.forEach((e) => {
    let b =
      '<div class="c"><div class="g">' + g[ind] + '</div><div class="scheda">';
    ind++;
    for (let i = 0; i < e.length; i++) {
      b += `<div class="r">
           <div class="o">${a[i]}</div>
           <div class="m">${e[i]}</div>
         </div>`;

      if (i == 1) {
        b += `<div class="ri">
          <div class="o">09:45</div>
          <div class="m">Ricreazione</div>
        </div>`;
      }
      if (i == 4) {
        b += `<div class="ri">
      <div class="o">12:15</div>
      <div class="m">Ricreazione</div>
    </div>`;
      }
    }
    b += '</div> <div class="sp"></div></div>';
    document.querySelector("#mainbox").innerHTML += b;
  });
  document.querySelector("#mainbox").innerHTML += '<div class="last"></div>';
})();
(function rescale() {
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
})();
(function setf() {
  if ((oa() <= 840 && gs() < 4) || (oa() <= 980 && gs() == 4)) {
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
        o > sc.children.length - 1 ? (o = sc.children.length - 1) : (o = o);

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
        f.style.top = o * 68 + "px";
        f.style.width =
          +((oa() - geth(o)) / (geth(o + 1) - geth(o))).toFixed(2) * 300 + "px";
      }
    }
  }
})();
(function scrollonclick() {
  document.addEventListener("click", (e) => {
    document.querySelector("#mainbox").scrollLeft = 320 * nc(e.target);
  });
})();
if(isMobile()) document.querySelector(':root').style.setProperty('--t','0.5s')
if (gs() == 0) document.querySelector(".scheda").style = "scale: 1";
document.querySelector("#mainbox").scrollLeft = 320 * gs();
