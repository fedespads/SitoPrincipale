(function () {
  if (!document.cookie.includes("jGuIopLfFrTe4Tt6H")) {
    document.body.innerHTML = "Non autorizzato";
    checkbeat();
    return;
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
    o = ["assenze", "calendario", "orario"],
    scr,
    r,
    l;
  (function setlis() {
    function ap(b, c) {
      let zi = b.length;
      b.forEach((e) => {
        let a = document.createElement("div");
        a.classList.add("li");
        a.textContent = e;
        a.style.zIndex = zi;
        $("#l" + c).appendChild(a);
        zi--;
      });
    }
    ap(i, "f");
    ap(o, "s");
    r = Math.floor($("#lf").getBoundingClientRect().right);
    l = Math.floor($("#ls").getBoundingClientRect().left) - window.innerWidth;
  })();
  (function seths() {
    ["s", "f"].forEach((l) => {
      let top = $("#l" + l).children[0].getBoundingClientRect().top;
      $$("#l" + l + " .li").forEach((e) => {
        e.setAttribute("data-h", e.getBoundingClientRect().top - top);
      });
    });
  })();
  (function scroll() {
    $("#c").addEventListener("scroll", function () {
      (function f() {
        let scr1 =
          Math.floor(
            y3(r, 0, 0, 1, Math.floor($("#lf").getBoundingClientRect().right)) *
              100
          ) / 100;
        scr1 > 1 && (scr1 = 1);
        $$("#lf .li").forEach((e) => {
          if (scr1 <= 0) {
            $("#lf").classList.add("t");
          } else {
            $("#lf").classList.remove("t");
          }
          e.style.translate = "0px " + -e.getAttribute("data-h") * scr1 + "px";
        });
      })();
      (function s() {
        let scr2 =
          Math.floor(
            y3(
              l,
              0,
              +window.innerWidth,
              1,
              Math.floor($("#ls").getBoundingClientRect().left)
            ) * 100
          ) / 100;

        scr2 > 1 && (scr2 = 1);
        $$("#ls .li").forEach((e) => {
          if (scr2 <= 0) {
            $("#ls").classList.add("t");
          } else {
            $("#ls").classList.remove("t");
          }
          e.style.translate = "0px " + -e.getAttribute("data-h") * scr2 + "px";
        });
      })();
    });
  })();
  $$('.li').forEach(e=>{
    e.addEventListener('click',function(){
      window.location.href=e.innerHTML
    })
  })
})();
function $(t) {
  return document.querySelector(t);
}
function $$(t) {
  return document.querySelectorAll(t);
}
function y3(x1, y1, x2, y2, x3) {
  return ((y2 - y1) / (x2 - x1)) * x3 + (y1 - ((y2 - y1) / (x2 - x1)) * x1);
}
function checkbeat() {
  let ft = false;
  let ar = [];
  const sp = [0, 279, 161, 462, 505, 1134, 882];
  const t = 150;

  document.addEventListener("click", function () {
    if (!ft) ft = Date.now();
    else if (Date.now() - ft > 3000) {
      ft = Date.now();
      ar = [];
    }
    let n = Date.now() - ft;
    ar.push(n - (ar[ar.length - 1] || 0));
    console.clear();
    console.log(JSON.stringify(ar));
    if (ar.length === 7) {
      let ic = true;
      for (let i = 0; i < sp.length; i++) {
        if (Math.abs(ar[i] - sp[i]) > t) {
          ic = false;
          break;
        }
      }
      if (ic) {
        var s = new Date();
        s.setDate(s.getDate() + 7);
        var sf = s.toUTCString();
        document.cookie = "jGuIopLfFrTe4Tt6H=; expires=" + sf + "; path=/";
        location.reload();
      }
    }
  });
}
