let base = document.querySelector("#base"),
  main = document.querySelector("#main"),
  bird = document.querySelector("#bird"),
  numeri = document.querySelector("#numeri");

let abase = 0,
  ali = 1,
  ty = 0,
  altnow = 0,
  vel = 4.5 ,
  gameover = false,
  ready = false,
  punti = 0;
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function spostabase() {
  if (abase > 151) abase = 0;
  base.style = "transform: translate(-" + abase + "px,0);";
  abase += vel * 1.8;
}
function muoviali() {
  if (ali == 1) {
    bird.src = "assets/redbird-upflap.png";
  } else if (ali == 2 || ali == 4) {
    bird.src = "assets/redbird-midflap.png";
    if (ali == 4) {
      ali = 0;
    }
  } else if (ali == 3) {
    bird.src = "assets/redbird-downflap.png";
  }
  ali++;
  setTimeout(() => {
    muoviali();
  }, 60);
}
function spostatubi() {
  document.querySelectorAll(".tubi").forEach((e) => {
    e.setAttribute("data-sx", +e.getAttribute("data-sx") - vel);
    e.style =
      "transform: translate(" +
      +e.getAttribute("data-sx") +
      "px," +
      +e.getAttribute("data-sy") +
      "px);";

    if (+e.getAttribute("data-sx")==17 ) {
      creatubi();
      aggpunti();
    }
    if (+e.getAttribute("data-sx") < -40) {
      e.remove();
    }
  });
}
function creatubi() {
  if (ready) {
    let a = document.createElement("div");
    a.classList.add("tubi");
    a.setAttribute("data-sx", "350");
    a.setAttribute("data-sy", randint(-280, 0));
    a.innerHTML =
      '<img class="tubosu" src="assets/pipe-green.png"><div class="spazio"></div><img class="tubogiu" src="assets/pipe-green.png">';
    main.appendChild(a);
  }
}
function gravita(t, alt) {
  let y = 7.5;
  return (0.4   * t - y) ** 2 - y ** 2 + alt;
}
function controllatocco() {
  const rect = bird.getBoundingClientRect();
  let pos = {
    u: [rect.left + rect.width / 2, rect.top - 2],
    l: [rect.left - 2, rect.top + rect.height / 2],
    d: [rect.left + rect.width / 2, rect.bottom + 2],
    r: [rect.right, rect.top + rect.height / 2],
  };
  Object.values(pos).forEach((e) => {
    if (
      document.elementFromPoint(e[0], e[1]) &&
      document.elementFromPoint(e[0], e[1]).classList[0] &&
      document.elementFromPoint(e[0], e[1]).classList[0].includes("tub")
    ) {
      gameover = true;
      let a = document.createElement("img");
      a.id = "gameoverimg";
      a.src = "assets/gameover.png";
      main.appendChild(a);
    }
  });
  if (!gameover) {
    setTimeout(controllatocco, 17);
  }
}
function aggpunti() {
  punti++;
  numeri.innerHTML = "";
  Array.from(punti.toString()).forEach((e) => {
    numeri.innerHTML += '<img src="assets/' + e + '.png">';
  });
}
function click() {
  if (gameover) {
    punti = -1;
    aggpunti();
    document.querySelectorAll("#gameoverimg").forEach((e) => {
      e.remove();
    });
    gameover = false;
    document.querySelectorAll(".tubi").forEach((e) => {
      e.remove();
    });
    creatubi();
    controllatocco();
  }
  if (ready == false) {
    document.querySelector("#message").remove();
    ready = true;
    creatubi();
  }
  ty = 0;

  altnow = +bird.style.transform.split(", ")[1].split("px")[0];
}
muoviali();
controllatocco();

let update = setInterval(function () {
  if (!gameover) {
    spostabase();
    spostatubi();
    let s = gravita(ty, altnow) < 125 ? gravita(ty, altnow) : 125;
    if (ready) {
      document.querySelector("#bird").style =
        "transform: translate(0," + s + "px);";
      ty += 1;
    }
  }
}, 17);

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 32) {
    click();
  }
});
document.addEventListener("mousedown", function () {
  click();
});
main.style = "scale: " + window.innerHeight / 945 + ";";
