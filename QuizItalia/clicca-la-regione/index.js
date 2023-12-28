function rescale() {
  const svgElement = document.querySelector("svg");
  const windowWidth = document.body.getBoundingClientRect().width;

  if (windowWidth < 648) {
    const scaleFactor = windowWidth / 648;
    const svgRect = svgElement.getBoundingClientRect();
    const svgWidth = svgRect.width;
    const svgHeight = svgRect.height;

    document
      .querySelector(":root")
      .style.setProperty("--sc", scaleFactor * 0.85);
  }
}
rescale();
window.addEventListener("resize", rescale);

let i = 0, str=0, riavvia= false;
let titles = [
  "Abruzzo",
  "Basilicata",
  "Calabria",
  "Campania",
  "Emilia-Romagna",
  "Friuli-Venezia Giulia",
  "Lazio",
  "Liguria",
  "Lombardia",
  "Marche",
  "Molise",
  "Piemonte",
  "Puglia",
  "Sardegna",
  "Sicilia",
  "Toscana",
  "Trentino-Alto Adige",
  "Umbria",
  "Valle d'Aosta",
  "Veneto",
];
document.querySelectorAll("path").forEach((p) => {
  i++;
  if (i >= 5) {
    p.classList.add("itpath");
  }
  p.addEventListener("mouseover", function () {});
});
let regione = document.querySelector("#regione"),
listaregioni= Array.from(document.querySelectorAll(".itpath"))
function nuovaregione() {
  if(listaregioni.length<=0){location.reload()}
  let rand = Math.floor(Math.random() * listaregioni.length)
  let nuovascelta = listaregioni[rand];
  listaregioni.splice(rand, 1);
  regione.innerHTML = nuovascelta.getAttribute("title");
  regione.setAttribute("data-id", nuovascelta.id);
}
nuovaregione();

document.querySelectorAll(".itpath").forEach((e) => {
  e.addEventListener("click", function () {
    if (e.id == regione.getAttribute("data-id")) {
      e.classList.add("r");
      if(riavvia){location.reload()}
      str++;
      document.querySelector('#streak').innerHTML='streak: '+str
      document.querySelectorAll(".w").forEach((el) => {
        el.classList.remove("w");
      });
      setTimeout(() => {
        e.classList.remove("r");
        nuovaregione();
      }, 2000);
    } else {
      e.classList.add("w");
      riavvia=true;
    }
  });
});
