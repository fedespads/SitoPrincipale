function stampaGiorni() {
  var oggi = new Date();
  var fine = new Date("2024-06-06"); // Data di fine
  var i = 0;
  while (oggi <= fine) {
    var giorno = oggi.getDate() + 1;
    var mese = oggi.getMonth() + 1;
    var data =
      giorno.toString().padStart(2, "0") +
      "/" +
      mese.toString().padStart(2, "0");
    if (!tutti.includes(data)) {
      i++;
    } else {
    }
    oggi.setDate(oggi.getDate() + 1);
  }
  document.querySelector("#gm").innerHTML = i;
}
let domeniche = [
    "18/02",
    "25/02",
    "03/03",
    "10/03",
    "17/03",
    "24/03",
    "31/03",
    "07/04",
    "14/04",
    "21/04",
    "28/04",
    "05/05",
    "12/05",
    "19/05",
    "26/05",
    "02/06",
  ],
  sabati = [
    "17/02",
    "24/02",
    "02/03",
    "09/03",
    "16/03",
    "23/03",
    "30/03",
    "06/04",
    "13/04",
    "20/04",
    "27/04",
    "04/05",
    "11/05",
    "18/05",
    "25/05",
    "01/06",
  ],
  feste = [
    "28/03",
    "29/03",
    "30/03",
    "31/03",
    "01/04",
    "02/04",
    "21/04",
    "22/04",
    "23/04",
    "24/04",
    "25/04",
    "01/05",
    "02/06",
  ],
  tutti = [...sabati, ...domeniche, ...feste],
  festesimo = ["05/06", "06/06"];
tutti.sort(function (a, b) {
  function c(d) {
    return +(d.split("/")[1] + d.split("/")[0]);
  }
  return c(a) - c(b);
});
stampaGiorni();
let ss = 1;
document.querySelector(".s1").addEventListener("click", function () {
  if (ss == 1) {
    ss = 0;
    document.querySelector(".s1").classList.remove("active");
    tutti = [...domeniche, ...feste, ...festesimo];

    stampaGiorni();
  } else {
    ss = 1;
    document.querySelector(".s1").classList.add("active");
    tutti = [...sabati, ...domeniche, ...feste];

    stampaGiorni();
  }
});
