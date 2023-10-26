let tasto = 3,
  corda = 3,
  boxmanico = document.querySelector(".boxmanico"),
  input = document.querySelector(".input"),
  accordo = [],
  accordotrovato = null,
  accordi = [
    [[1, 8], "5"],
    [[1, 5, 11], "7"],
    [[1, 4, 11], "m7"],
    [[1, 5, 8], ""],
    [[1, 4, 8], "m"],
    [[1, 5, 8, 11], "7"],
    [[1, 4, 7], " dim"],
    [[1, 5, 9], " aug"],
    [[1, 4, 10], " m6"],
    [[1, 3, 8], " sus2"],
    [[1, 6, 8], " sus4"],
    [[1, 3, 5, 11], " 9"],
    [[1, 3, 4, 11], " m9"],
    [[1, 4, 8, 11], " m7"],
    [[1, 4, 8, 10], " m6"],
    [[1, 5, 7, 11], "7b5"],
    [[1, 3, 5, 8], " add9"],
    [[1, 3, 5, 8, 11], " 9"],
    [[1, 3, 5, 12], " maj9"],
    [[1, 4, 7, 10], " dim7"],
    [[1, 3, 4, 8, 11], " m9"],
    [[1, 5, 8, 12], " maj7"],
    [[1, 3, 8, 11], " 7Sus2"],
    [[1, 6, 8, 11], " 7Sus4"],
    [[1, 5, 6, 12], " maj11"],
    [[1, 3, 5, 8, 12], " maj9"],
    [[1, 3, 4, 6, 8, 11], " m11"],
    [[1, 3, 5, 6, 8, 12], " maj11"],
  ];
for (let i = 0; i < 7 * 12; i++) {
  document.querySelector(".manico").append(document.createElement("div"));
}
Array.from(document.querySelector(".manico").children).forEach((e) => {
  e.appendChild(document.createElement("div"));
});
console.log(boxmanico.offsetWidth)
document.querySelector(':root').style.setProperty('--w',boxmanico.offsetWidth+'px')
input.addEventListener("input", function () {
  input.value = input.value.slice(0, 6);

  //elimina tutti i pallini
  if (document.querySelectorAll(".pallino")) {
    document.querySelectorAll(".pallino").forEach((el) => {
      el.remove();
    });
  }

  //setta accordo
  let valori = Array.from(input.value);
  for (let i = 6; i > 0; i--) {
    if (+valori[-i + 6] >= 0) {
      accordo[i] = +valori[-i + 6];
    } else {
      accordo[i] = null;
    }
  }

  //aggiungi pallini
  let i = 1;
  accordo.forEach((e) => {
    if (e) {
      let p = document.createElement("div");
      p.classList.add("pallino");
      let c = coordinate(
        Array.from(document.querySelector(".manico").children)[
          (i - 1) * 12 + e - 1
        ]
      );
      p.style = `
      top: ${c[0]};
      left: ${c[1]};
      `;
      console.clear();
      document.querySelector(".boxmanico").appendChild(p);
    }
    i++;
  });

  //trova accordo
  accordotrovato = trovaAccordo(accordo);
  let accordocorr = "?";
  var note = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];
  for (i = 0; i < 12; i++) {
    accordi.forEach((e) => {
      let a = JSON.stringify(e[0]);
      let b = JSON.stringify(accordotrovato);
      if (a === b) {
        accordocorr = note[i] + e[1];
      }
    });
    for (let a = 0; a < accordotrovato.length; a++) {
      accordotrovato[a] = accordotrovato[a] - 1;
      if (accordotrovato[a] <= 0) {
        accordotrovato[a] = accordotrovato[a] + 12;
      }
    }
    accordotrovato.sort(function (a, b) {
      return a - b;
    });
  }

  //scrivi accordo
  document.querySelector(".divacc").innerHTML = accordocorr;
});
