if (localStorage.getItem("jGuIopLfFrTe4Tt6H")) {
  function $$(a) {
    return document.querySelectorAll(a);
  }
  function $(a) {
    return document.querySelector(a);
  }
  function so() {
    lf.sort(function (a, b) {
      return a.length - b.length;
    });
    ls.sort(function (a, b) {
      return a.length - b.length;
    });
  }
  function cl() {
    let i = lf.length;
    lf.forEach((e) => {
      let a = document.createElement("div");
      a.classList.add("li");
      a.innerHTML = e;
      a.style.zIndex = i;
      i--;
      $("#lf").appendChild(a);
    });

    i = ls.length;
    ls.forEach((e) => {
      let a = document.createElement("div");
      a.classList.add("li");
      a.innerHTML = e;
      a.style.zIndex = i;
      i--;
      $("#ls").appendChild(a);
    });
  }
  function setbc() {
    var rect = document.body.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    bc = (rect.left + rect.width / 2 + scrollLeft).toFixed(0);
  }
  let lf = [
      "impegni",
      "classifica",
      "ninegame",
      "chords",
      "flappy",
      "QuizItalia",
      "streaming",
    ],
    ls = ["assenze", "calendario", "orario"];
  so();
  cl();

  let bc;
  setbc();

  $$(".li").forEach((e) => {
    e.addEventListener("click", function () {
      window.open(e.innerHTML, "_self");
    });
  });

  function an(l) {
    let i = 0;
    [...$("#lf").children].forEach((e) => {
      e.setAttribute("t", 45 * i);
      e.style.translate = "0 -" + 45 * i + "px";
      i++;
    });
    i = 0;
    [...$("#ls").children].forEach((e) => {
      e.setAttribute("t", 45 * i);
      e.style.translate = "0 -" + 45 * i + "px";
      i++;
    });

    if (l == $("#lf")) $("#ls").setAttribute("o", false);
    if (l == $("#ls")) $("#lf").setAttribute("o", false);
    $$(".li").forEach((e) => {
      e.style.backgroundColor = "#1E1E1E";
    });

    i = 0;
    let a = setInterval(function () {
      if (i < l.children.length - 1) {
        [...l.children].forEach((e) => {
          e.setAttribute("t", e.getAttribute("t") - 45);

          e.style.translate = "0 -" + e.getAttribute("t") + "px";
        });
        i++;
      } else {
        clearInterval(a);
        [...l.children].forEach((e) => {
          e.style.backgroundColor = "rgba(246, 246, 246, 0.12)";
        });
      }
    }, 100);
  }
  an(document.querySelector("#lf"));

  function c(element) {
    var rect = element.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var centerX = rect.left + rect.width / 2 + scrollLeft;
    // return Math.floor(centerX-bc)==(-1)?true:false;
    return Math.floor(centerX - bc) >= -1 && Math.floor(centerX - bc) <= 1
      ? true
      : false;
  }
  function animate() {
    if (c($("#lf")) && !JSON.parse($("#lf").getAttribute("o"))) {
      $("#lf").setAttribute("o", "true");
      an($("#lf"));
    }
    if (c($("#ls")) && !JSON.parse($("#ls").getAttribute("o"))) {
      $("#ls").setAttribute("o", "true");
      an($("#ls"));
    }
    requestAnimationFrame(animate);
  }
  animate();
} else {
  document.body.innerHTML = "Non autorizzato";
}
