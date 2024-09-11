let ar = [],
  direzione = "destra",
  i = 300,
  lunghezza = 3,
  inizio = Date.now();
(function riempiAr() {
  let box = $("<div></div>");
  box.addClass("box");
  for (let b = 0; b < 30; b++) {
    let c = [],
      row = $("<div></div>");
    row.addClass("row");
    for (let a = 0; a < 30; a++) {
      let el = $("<div></div>");
      el.addClass("el");
      c.push({
        testa: false,
        blocco: false,
        posizione: null,
        h: el,
      });
      row.append(el);
    }
    box.append(row);
    ar.push(c);
  }
  $("body").append(box);
  (function creaPrimaTesta() {
    let p = ar[0][0];
    p.testa = true;
    p.blocco = true;
    $(p.h).addClass("b");
    p.posizione = 1;
  })();
  for (let x = 0; x < 3; x++) {
    nuovopunto();
  }
})();
let game;
function frame() {
  let p = trovaPosizioneTesta();
  ar[p[0]][p[1]].testa = false;

  let el = (function assegnaEl() {
    if (direzione == "destra") {
      if (ar[p[0]] && ar[p[0]][p[1] + 1]) return ar[p[0]][p[1] + 1];
    } else if (direzione == "sinistra") {
      if (ar[p[0]] && ar[p[0]][p[1] - 1]) return ar[p[0]][p[1] - 1];
    } else if (direzione == "su") {
      if (ar[p[0] - 1] && ar[p[0] - 1][p[1]]) return ar[p[0] - 1][p[1]];
    } else if (direzione == "giu") {
      if (ar[p[0] + 1] && ar[p[0] + 1][p[1]]) return ar[p[0] + 1][p[1]];
    }
  })();
  if (el) {
    if (el.blocco == true) return haiPerso();
    if (el.blocco == "punto") {
      $(el.h).removeClass("p");
      nuovopunto();
      lunghezza++;
    }
    el.testa = true;
    el.blocco = true;

    $(el.h).addClass("b");
    (function scalaPosizioni() {
      for (let riga = 0; riga < ar.length; riga++) {
        for (let colonna = 0; colonna < ar[riga].length; colonna++) {
          if (ar[riga][colonna].posizione) {
            ar[riga][colonna].posizione = ar[riga][colonna].posizione + 1;
          }
        }
      }
      return null;
    })();
    el.posizione = 1;
    (function togliUltimo() {
      for (let riga = 0; riga < ar.length; riga++) {
        for (let colonna = 0; colonna < ar[riga].length; colonna++) {
          if (ar[riga][colonna].posizione >= lunghezza + 1) {
            ar[riga][colonna].testa = false;
            ar[riga][colonna].blocco = false;
            ar[riga][colonna].posizione = false;
            $(ar[riga][colonna].h).removeClass("b");
          }
        }
      }
      return null;
    })();
  } else {
    haiPerso();
  }

  game = setTimeout(frame, 100);
}
frame();

function trovaPosizioneTesta() {
  for (let riga = 0; riga < ar.length; riga++) {
    for (let colonna = 0; colonna < ar[riga].length; colonna++) {
      if (ar[riga][colonna].testa === true) {
        return [riga, colonna];
      }
    }
  }
  return null;
}

function haiPerso() {
  clearInterval(game);
  $("body").on("click", function () {
    location.reload();
  });
}

document.addEventListener("keydown", (e) => {
  let ds = {
    37: "sinistra",
    38: "su",
    39: "destra",
    40: "giu",
  };
  function ind(obj, value) {
    for (let key in obj) {
      if (obj[key] === value) {
        return key;
      }
    }
    return undefined;
  }
  if (Math.abs(ind(ds, direzione) - e.keyCode) != 2) direzione = ds[e.keyCode];
});

let startX, startY;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});
let f = true;
document.addEventListener("touchmove", (e) => {
  if (f) {
    f = false;
    let moveX = e.touches[0].clientX;
    let moveY = e.touches[0].clientY;
    let deltaX = moveX - startX;
    let deltaY = moveY - startY;
    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    if (angle > -45 && angle <= 45) {
      if (direzione != "sinistra") direzione = "destra";
    } else if (angle > 45 && angle <= 135) {
      if (direzione != "su") direzione = "giu";
    } else if (angle > 135 || angle <= -135) {
      if (direzione != "destra") direzione = "sinistra";
    } else {
      if (direzione != "giu") direzione = "su";
    }
    f = true;
  }
});

function nuovopunto() {
  let a;
  do {
    a = ar[randint(0, 29)][randint(0, 29)];
  } while (a.blocco);
  a.blocco = "punto";
  $(a.h).addClass("p");
}
