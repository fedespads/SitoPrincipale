document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
var xDown = null;
var yDown = null;
function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}
function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
var xDown = null;
var yDown = null;
function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
}
function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}
function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      //left swipe
    } else {
      //right swipe
    }
  } else {
    if (yDiff > 0) {
      //swipe up
    } else {
      //swipe down
    }
  }
  xDown = null;
  yDown = null;
}
///////////////////////////
///////////////////////////

function insertAfter(newElement, referenceElement) {
  referenceElement.parentNode.insertBefore(
    newElement,
    referenceElement.nextSibling
  );
}

function data12(data) {
  if (data.split("-")[0] == new Date().getFullYear()) {
    return `${data.split("-")[2]}/${data.split("-")[1]}`;
  } else {
    return `${data.split("-")[2]}/${data.split("-")[1]}/${data.split("-")[0]}`;
  }
}

function regola(sog, cosa, min, max, unita) {
  if (unita == undefined) {
    unita = "px";
  }
  var bx = document.createElement("div");
  var scrt = document.createElement("div");
  var inp = document.createElement("input");

  inp.setAttribute("type", "range");
  scrt.style = `font-family: 'SF'; color:white;`;
  bx.style = `
    position: absolute;
    z-index:1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

  `;

  let valore = Math.floor(inp.value * ((max - min) / 100) + min);

  document.querySelector(sog).style =
    cosa + `: ${Math.floor(inp.value * ((max - min) / 100) + min)}` + unita;
  scrt.innerHTML =
    `${Math.floor(inp.value * ((max - min) / 100) + min)}` + unita;

  bx.appendChild(inp);
  bx.appendChild(scrt);
  insertAfter(bx, document.querySelector(sog));

  inp.addEventListener("input", function () {
    document.querySelector(sog).style =
      cosa + `: ${Math.floor(inp.value * ((max - min) / 100) + min)}` + unita;
    scrt.innerHTML =
      `${Math.floor(inp.value * ((max - min) / 100) + min)}` + unita;
    if (inp.value == 0) {
      scrt.innerHTML += " MIN";
    } else if (inp.value == 100) {
      scrt.innerHTML += " MAX";
    }
  });
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function trovaregpol(arr) {
  let regpol = "RegPol({";
  let i = 0;
  arr.forEach((e) => {
    regpol += `(${i},${arr[i]})`;
    if (e != arr[arr.length - 1]) regpol += ",";
    i++;
  });
  regpol += "})";
  return regpol;
}
function q(x) {
  return document.querySelector(x);
}

// function tx(x) {
//   return (
//     0.0000002812099 * Math.pow(x, 12) -
//     0.000020989909 * Math.pow(x, 11) +
//     0.0006915991512 * Math.pow(x, 10) -
//     0.0132381916887 * Math.pow(x, 9) +
//     0.1629993179564 * Math.pow(x, 8) -
//     1.3501499255953 * Math.pow(x, 7) +
//     7.6419207520394 * Math.pow(x, 6) -
//     29.4035830715393 * Math.pow(x, 5) +
//     74.9543620756185 * Math.pow(x, 4) -
//     119.9881990189612 * Math.pow(x, 3) +
//     108.3400259740274 * Math.pow(x, 2) -
//     33.6448088023093 * x
//   ).toFixed(1);
// }

// function ty(x, y) {
//   return (
//     0.0069444444444 * Math.pow(y, 6) -
//     0.1316666666667 * Math.pow(y, 5) +
//     0.9569444444444 * Math.pow(y, 4) -
//     3.3416666666667 * Math.pow(y, 3) +
//     5.7361111111111 * Math.pow(y, 2) -
//     2.2266666666667 * y -
//     x * (1 / 12) * ((-y + 7) * (1 / 6)) * 0.4
//   );
// }
// function ytx(x) {
//   [0, 0];
//   return;
// }
function trovaAccordo(accordo) {
  let acctrovato = [];
  for (let i = 1; i <= 6; i++) {
    if (typeof accordo[i] === "number") {
      var note = [
        0,
        "C",
        "C#",
        "D",
        "Eb",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "Bb",
        "B",
      ];
      var notecorde = [
        null,
        note.indexOf("E"),
        note.indexOf("B"),
        note.indexOf("G"),
        note.indexOf("D"),
        note.indexOf("A"),
        note.indexOf("E"),
      ];
      nota = notecorde[i] + +accordo[i];
      while (nota > 12) {
        nota = nota - 12;
      }
      while (nota < 1) {
        nota = nota + 12;
      }
      if (!acctrovato.includes(nota)) {
        acctrovato.push(nota);
      }
    }
  }
  acctrovato.sort(function (a, b) {
    return a - b;
  });
  return acctrovato;
}
function tr(ar,w){
  for(let i=0;i<ar.length;i++){
    ar[i]=ar[i]/100*w
  }
}
function coordinate(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2 + window.scrollX;
  const bottomY = rect.bottom + window.scrollY;
  return [bottomY+'px',centerX+'px'];
}
// let tx = [0,6.7,16.4,25,33,40,46.6,52.3,57.5,62.5,66.8,71.3,75.2]
// let ty = [0, 1, 3.3, 5.3, 7.6, 9.7,11.7];
