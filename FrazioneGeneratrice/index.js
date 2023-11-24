function semplifica(numeratore, denominatore) {
  const trovaMCD = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return trovaMCD(b, a % b);
    }
  };
  const mcd = trovaMCD(numeratore, denominatore);
  const numeratoreSemplificato = numeratore / mcd;
  const denominatoreSemplificato = denominatore / mcd;
  return [numeratoreSemplificato, denominatoreSemplificato];
}
let inp1 = document.querySelector("#inp1"),
  inp2 = document.querySelector("#inp2"),
  mp1 = document.getElementById("mp1"),
  mp2 = document.getElementById("mp2"),
  period = document.getElementById("period"),
  linea = document.getElementById("linea");
inp1.focus();

inp1.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    inp2.focus();
  }
});
inp2.addEventListener("keydown", (e) => {
  if (e.key == "Backspace" && inp2.value == "") {
    inp1.focus();
  }
});
inp2.addEventListener("input", function () {
  aggiorna();
});
inp1.addEventListener("input", function () {
  aggiorna();
});

function aggiorna() {
  if (inp2.value == "") {
    let el1 = inp1.value.split(".")[1]
      ? inp1.value.split(".")[0] + inp1.value.split(".")[1]
      : inp1.value.split(".")[0];
    let el3 = "1";
    if (inp1.value.split(".")[1]) {
      for (let i = 0; i < inp1.value.split(".")[1].length; i++) {
        el3 += "0";
      }
    }

    let fraz = semplifica(+el1, +el3);
    let num = fraz[0],
      den = fraz[1];
    document.querySelector("#num").innerHTML = num;
    document.querySelector("#den").innerHTML = den;
    mp1.textContent = inp2.value;
    mp2.textContent = num;
    period.style.width = mp1.offsetWidth;
    linea.style.width = mp2.offsetWidth;
  } else {
    let el1 = inp1.value.split(".")[0] + inp1.value.split(".")[1] + inp2.value;
    let el2 = inp1.value.split(".")[0] + inp1.value.split(".")[1];
    let el3 = "";
    for (let i = 0; i < inp2.value.length; i++) {
      el3 += "9";
    }
    if (inp1.value.split(".")[1]) {
      for (let i = 0; i < inp1.value.split(".")[1].length; i++) {
        el3 += "0";
      }
    }
    let el12 = +el1 - +el2;

    let fraz = semplifica(+el12, +el3);
    let num = fraz[0],
      den = fraz[1];
    document.querySelector("#num").innerHTML = num;
    document.querySelector("#den").innerHTML = den;
    mp1.textContent = inp2.value;
    mp2.textContent = num;
    period.style.width = mp1.offsetWidth;
    linea.style.width = mp2.offsetWidth;
  }
}
aggiorna()