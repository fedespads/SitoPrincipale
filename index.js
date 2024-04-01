if (localStorage.getItem("jGuIopLfFrTe4Tt6H")) {
  function t(t) {
    return document.querySelectorAll(t);
  }
  function e(t) {
    return document.querySelector(t);
  }
  function l() {
    i.sort(function (t, e) {
      return t.length - e.length;
    }),
      o.sort(function (t, e) {
        return t.length - e.length;
      });
  }
  function n() {
    let t = i.length;
    i.forEach((l) => {
      let n = document.createElement("div");
      n.classList.add("li"),
        (n.innerHTML = l),
        (n.style.zIndex = t),
        t--,
        e("#lf").appendChild(n);
    }),
      (t = o.length),
      o.forEach((l) => {
        let n = document.createElement("div");
        n.classList.add("li"),
          (n.innerHTML = l),
          (n.style.zIndex = t),
          t--,
          e("#ls").appendChild(n);
      });
  }
  function r() {
    var t = document.body.getBoundingClientRect(),
      e = window.pageXOffset || document.documentElement.scrollLeft;
    s = (t.left + t.width / 2 + e).toFixed(0);
  }
  let i = [
      "impegni",
      "classifica",
      "15Game",
      "chords",
      "flappy",
      "QuizItalia",
      "streaming",
    ],
    o = ["assenze", "calendario", "orario"];
  l(), n();
  let s;
  function c(l) {
    let n = 0;
    [...e("#lf").children].forEach((t) => {
      t.setAttribute("t", 45 * n),
        (t.style.translate = "0 -" + 45 * n + "px"),
        n++;
    }),
      (n = 0),
      [...e("#ls").children].forEach((t) => {
        t.setAttribute("t", 45 * n),
          (t.style.translate = "0 -" + 45 * n + "px"),
          n++;
      }),
      l == e("#lf") && e("#ls").setAttribute("o", !1),
      l == e("#ls") && e("#lf").setAttribute("o", !1),
      t(".li").forEach((t) => {
        t.style.backgroundColor = "#1E1E1E";
      }),
      (n = 0);
    let r = setInterval(function () {
      n < l.children.length - 1
        ? ([...l.children].forEach((t) => {
            t.setAttribute("t", t.getAttribute("t") - 45),
              (t.style.translate = "0 -" + t.getAttribute("t") + "px");
          }),
          n++)
        : (clearInterval(r),
          [...l.children].forEach((t) => {
            t.style.backgroundColor = "rgba(246, 246, 246, 0.12)";
          }));
    }, 100);
  }
  function a(t) {
    var e = t.getBoundingClientRect(),
      l = window.pageXOffset || document.documentElement.scrollLeft,
      n = e.left + e.width / 2 + l;
    return !!(Math.floor(n - s) >= -1 && 1 >= Math.floor(n - s));
  }
  function f() {
    a(e("#lf")) &&
      !JSON.parse(e("#lf").getAttribute("o")) &&
      (e("#lf").setAttribute("o", "true"), c(e("#lf"))),
      a(e("#ls")) &&
        !JSON.parse(e("#ls").getAttribute("o")) &&
        (e("#ls").setAttribute("o", "true"), c(e("#ls"))),
      requestAnimationFrame(f);
  }
  r(),
    t(".li").forEach((t) => {
      t.addEventListener("click", function () {
        window.open(t.innerHTML, "_self");
      });
    }),
    c(document.querySelector("#lf")),
    f();
} else document.body.innerHTML = "Non autorizzato";
