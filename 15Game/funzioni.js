let g = document.querySelector("#g"),
  ft = false,
  st,
  sg,
  endgame = false;
document.querySelector("#reset").addEventListener("click", function () {
  location.reload();
});
document.querySelector("#plus").addEventListener("click", function () {
  sg++;
  localStorage.setItem("sg", sg);
  location.reload();
});
document.querySelector("#min").addEventListener("click", function () {
  if (sg > 3) {
    sg--;
    localStorage.setItem("sg", sg);
    location.reload();
  }
});
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function chain(a, b, c, d) {
  [a, b] = [Math.min(+a, +b), Math.max(+a, +b)];
  let r = [];
  for (let i = a; i <= b; i++) {
    d == 1 ? r.push(i + c) : r.push(c + i);
  }
  r[r.length - 1] == document.querySelector("#bl").getAttribute("data-p") &&
    (r = r.reverse());
  r = r.map((e) => document.querySelector('[data-p="' + e + '"'));
  return r;
}

function ca(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
function mobile() {
  const userAgent = navigator.userAgent;
  const mobileKeywords = [
    "Android",
    "iPhone",
    "iPad",
    "iPod",
    "BlackBerry",
    "Windows Phone",
  ];

  return mobileKeywords.some((keyword) => userAgent.includes(keyword));
}

function time() {
  let diff = Date.now() - st;
  var millisecondiTot = Math.abs(diff);
  var millisecondi = ("00" + (millisecondiTot % 1000)).slice(-3);
  var secondiTot = Math.floor(millisecondiTot / 1000);
  var secondi = ("0" + (secondiTot % 60)).slice(-2);
  var minuti = ("0" + Math.floor(secondiTot / 60)).slice(-2);

  return [minuti, secondi, millisecondi];
}
