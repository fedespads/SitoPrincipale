let input = [0, 1, 2, 3, 4].map((e) => document.querySelector("#i" + e));
document.querySelectorAll("input").forEach((e) => [
  e.addEventListener("input", () => {
    storevals();
    calcola();
  }),
]);

function calcola() {
  let vals = JSON.parse(localStorage.getItem("vals")) || null;
  if (vals) {
    vals[0] && (input[1].value = data2(vals[0]));
    vals[1] && (input[2].value = data2(vals[1]));
    input[3].value = +vals[2];
    input[4].value = +vals[3];
  }
  document.querySelector("#response").textContent = y3(
    data(1),
    val(3),
    data(2),
    val(4),
    Date.now()
  );
}
calcola();

function y3(x1, y1, x2, y2, x3) {
  return (
    ((y2 - y1) / (x2 - x1)) * x3 +
    (y1 - ((y2 - y1) / (x2 - x1)) * x1)
  ).toFixed(2);
}
function data(a) {
  return new Date(document.querySelector("#i" + a).value).getTime();
}
function val(a) {
  return +document.querySelector("#i" + a).value;
}
function storevals() {
  let a = [data(1), data(2), val(3), val(4)];
  localStorage.setItem("vals", JSON.stringify(a));
}
function data2(a) {
  let dateObject = new Date(a);
  return (
    dateObject.getFullYear() +
    "-" +
    ("0" + (dateObject.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dateObject.getDate()).slice(-2) +
    "T" +
    ("0" + dateObject.getHours()).slice(-2) +
    ":" +
    ("0" + dateObject.getMinutes()).slice(-2)
  );
};
(function loop(){
  calcola()
  requestAnimationFrame(loop)
})()
