let i = +localStorage.getItem("md").split(",")[0],
  t = +localStorage.getItem("md").split(",")[1];
let type = [
    "RIPOSO",
    "VETRINE MATTINA",
    "VETRINE POMERIGGIO",
    "BARRIERE tutto il giorno",
    "BARRIERE",
  ],
  o = ["", "8:30-13:00", "14:30-19:30", "8:30-19:00", "8:30-13:00 14:30-20:00"],
  no = [0, 4.5, 5, 10.5, 10];
b.innerHTML += `
        <div class="c">
          <div class="s1">
            <div class="d">
              ${getd(i)}
            </div>
            <div class="g">
              ${gmc()[i]}
            </div>
            <span class="line">
            </span>
          </div>
          <div class="s2">
            <div class="as">
            <
            </div>
            <div class="ad">
            >
            </div>
            <div class="t2">
              ${type[t].split(" ")[0]}
            </div>
            <div class="t3">
              ${
                type[t].includes(" ")
                  ? type[t].substring(type[t].indexOf(" ") + 1)
                  : ""
              }
            </div>
          </div>
          <div class="s3">
            <div class="o1">
              ${o[t].split(" ")[0]}
            </div>
            <div class="o2">
              ${o[t].includes(" ") ? o[t].substring(o[t].indexOf(" ") + 1) : ""}
            </div>
            <div id="conferma">
              Conferma
            </div>
          </div>
        </div>
        `;
document.addEventListener("click", (e) => {
  if (e.target.classList[0] == "as") {
    if (t == 0) t = 4;
    else t--;
    reset();
  }

  if (e.target.classList[0] == "ad") {
    if (t == 4) t = 0;
    else t++;
    reset();
  }
  function reset() {
    document.querySelector(".t2").innerHTML = type[t].split(" ")[0];
    document.querySelector(".t3").innerHTML = type[t].includes(" ")
      ? type[t].substring(type[t].indexOf(" ") + 1)
      : "";

    document.querySelector(".o1").innerHTML = o[t].split(" ")[0];
    document.querySelector(".o2").innerHTML = o[t].includes(" ")
      ? o[t].substring(o[t].indexOf(" ") + 1)
      : "";
  }

  if(e.target.id=='conferma'){
  localStorage.setItem('change',JSON.stringify([i,t]))
  window.location.href='../'
}
});
