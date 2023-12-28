
document.querySelectorAll("path").forEach((p) => {
  p.addEventListener("click", function () {});
});
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
let pageval = 1,
  gioca = document.querySelector("#gioca"),
  svg = document.querySelector("svg"),
  mainbox = document.querySelector("#mainbox");
window.addEventListener("resize", rescale);
document.querySelector("#gioca").addEventListener("click", function () {
  page(2);
});
function page(i) {
  pageval = i;
  if (i == 1) {
    document.querySelector("#arrow").classList.remove("on");
    document.querySelector("#menu").classList.remove("on");
    document
      .querySelector("#menu")
      .addEventListener("transitionend", function () {
        if (pageval == 1) {
          document.querySelector("#menu").remove();
          document.querySelector("#arrow").remove();

          document.querySelector("svg").classList.remove("p2");
          gioca.classList.remove("g");
        }
      });
  } else if (i == 2) {
    gioca.classList.add("g");
    svg.classList.add("p2");
    let livelli = [
      "Regione dalla Posizione",
      "Provincia dalla Sigla",
      "Clicca la Regione",
      "Regione da una Provincia",
      "Capoluoghi delle Regioni",
    ];

    let a = document.createElement("div");
    a.id = "menu";
    for (let x = 0; x < livelli.length; x++) {
      let b = document.createElement("div");
      b.classList.add("elmenu");
      b.innerHTML = livelli[x];
      a.appendChild(b);
    }

    let c = document.createElement("img");
    c.src = "right-arrow.png";
    c.id = "arrow";
    mainbox.appendChild(a);
    mainbox.appendChild(c);
  }
}
svg.addEventListener("transitionend", function () {
  if (pageval == 2) {
    document.querySelector("#menu").classList.add("on");
    document.querySelector("#arrow").classList.add("on");
  }
});
document.addEventListener("click", (e) => {
  if (e.target.id == "arrow") {
    page(1);
  } else if (e.target.classList.contains("elmenu")) {
    window.location.href = e.target.innerHTML.toLowerCase().replace(/ /g, "-");
  }
});
const provinceItaliane = [
  ["AG", "Agrigento", "Sicilia"],
  ["AL", "Alessandria", "Piemonte"],
  ["AN", "Ancona", "Marche"],
  ["AO", "Aosta", "Valle d'Aosta"],
  ["AQ", "L'Aquila", "Abruzzo"],
  ["AR", "Arezzo", "Toscana"],
  ["AP", "Ascoli-Piceno", "Marche"],
  ["AT", "Asti", "Piemonte"],
  ["AV", "Avellino", "Campania"],
  ["BA", "Bari", "Puglia"],
  ["BT", "Barletta-Andria-Trani", "Puglia"],
  ["BL", "Belluno", "Veneto"],
  ["BN", "Benevento", "Campania"],
  ["BG", "Bergamo", "Lombardia"],
  ["BI", "Biella", "Piemonte"],
  ["BO", "Bologna", "Emilia Romagna"],
  ["BZ", "Bolzano", "Trentino Alto Adige"],
  ["BS", "Brescia", "Lombardia"],
  ["BR", "Brindisi", "Puglia"],
  ["CA", "Cagliari", "Sardegna"],
  ["CL", "Caltanissetta", "Sicilia"],
  ["CB", "Campobasso", "Molise"],
  ["CI", "Carbonia Iglesias", "Sardegna"],
  ["CE", "Caserta", "Campania"],
  ["CT", "Catania", "Sicilia"],
  ["CZ", "Catanzaro", "Calabria"],
  ["CH", "Chieti", "Abruzzo"],
  ["CO", "Como", "Lombardia"],
  ["CS", "Cosenza", "Calabria"],
  ["CR", "Cremona", "Lombardia"],
  ["KR", "Crotone", "Calabria"],
  ["CN", "Cuneo", "Piemonte"],
  ["EN", "Enna", "Sicilia"],
  ["FM", "Fermo", "Marche"],
  ["FE", "Ferrara", "Emilia Romagna"],
  ["FI", "Firenze", "Toscana"],
  ["FG", "Foggia", "Puglia"],
  ["FC", "Forli-Cesena", "Emilia Romagna"],
  ["FR", "Frosinone", "Lazio"],
  ["GE", "Genova", "Liguria"],
  ["GO", "Gorizia", "Friuli Venezia Giulia"],
  ["GR", "Grosseto", "Toscana"],
  ["IM", "Imperia", "Liguria"],
  ["IS", "Isernia", "Molise"],
  ["SP", "La-Spezia", "Liguria"],
  ["LT", "Latina", "Lazio"],
  ["LE", "Lecce", "Puglia"],
  ["LC", "Lecco", "Lombardia"],
  ["LI", "Livorno", "Toscana"],
  ["LO", "Lodi", "Lombardia"],
  ["LU", "Lucca", "Toscana"],
  ["MC", "Macerata", "Marche"],
  ["MN", "Mantova", "Lombardia"],
  ["MS", "Massa-Carrara", "Toscana"],
  ["MT", "Matera", "Basilicata"],
  ["VS", "Medio Campidano", "Sardegna"],
  ["ME", "Messina", "Sicilia"],
  ["MI", "Milano", "Lombardia"],
  ["MO", "Modena", "Emilia Romagna"],
  ["MB", "Monza-Brianza", "Lombardia"],
  ["NA", "Napoli", "Campania"],
  ["NO", "Novara", "Piemonte"],
  ["NU", "Nuoro", "Sardegna"],
  ["OG", "Ogliastra", "Sardegna"],
  ["OT", "Olbia Tempio", "Sardegna"],
  ["OR", "Oristano", "Sardegna"],
  ["PD", "Padova", "Veneto"],
  ["PA", "Palermo", "Sicilia"],
  ["PR", "Parma", "Emilia Romagna"],
  ["PV", "Pavia", "Lombardia"],
  ["PG", "Perugia", "Umbria"],
  ["PU", "Pesaro-Urbino", "Marche"],
  ["PE", "Pescara", "Abruzzo"],
  ["PC", "Piacenza", "Emilia Romagna"],
  ["PI", "Pisa", "Toscana"],
  ["PT", "Pistoia", "Toscana"],
  ["PN", "Pordenone", "Friuli Venezia Giulia"],
  ["PZ", "Potenza", "Basilicata"],
  ["PO", "Prato", "Toscana"],
  ["RG", "Ragusa", "Sicilia"],
  ["RA", "Ravenna", "Emilia Romagna"],
  ["RC", "Reggio-Calabria", "Calabria"],
  ["RE", "Reggio-Emilia", "Emilia Romagna"],
  ["RI", "Rieti", "Lazio"],
  ["RN", "Rimini", "Emilia Romagna"],
  ["Roma", "Roma", "Lazio"],
  ["RO", "Rovigo", "Veneto"],
  ["SA", "Salerno", "Campania"],
  ["SS", "Sassari", "Sardegna"],
  ["SV", "Savona", "Liguria"],
  ["SI", "Siena", "Toscana"],
  ["SR", "Siracusa", "Sicilia"],
  ["SO", "Sondrio", "Lombardia"],
  ["TA", "Taranto", "Puglia"],
  ["TE", "Teramo", "Abruzzo"],
  ["TR", "Terni", "Umbria"],
  ["TO", "Torino", "Piemonte"],
  ["TP", "Trapani", "Sicilia"],
  ["TN", "Trento", "Trentino Alto Adige"],
  ["TV", "Treviso", "Veneto"],
  ["TS", "Trieste", "Friuli Venezia Giulia"],
  ["UD", "Udine", "Friuli Venezia Giulia"],
  ["VA", "Varese", "Lombardia"],
  ["VE", "Venezia", "Veneto"],
  ["VB", "Verbania", "Piemonte"],
  ["VC", "Vercelli", "Piemonte"],
  ["VR", "Verona", "Veneto"],
  ["VV", "Vibo-Valentia", "Calabria"],
  ["VI", "Vicenza", "Veneto"],
  ["VT", "Viterbo", "Lazio"]
];