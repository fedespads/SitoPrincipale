import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
const database = getDatabase();
const DBScelto = ref(database, "film");

function elimnaDalDB(id) {
  const elementoRef = ref(database, `film/${id}`);
  remove(elementoRef);
}

let data, tim;

onValue(DBScelto, (snapshot) => {
  data = snapshot.val();
  if (data) {
    [...Object.entries(data)]
      .filter((e) => JSON.parse(e[1]).time < Date.now() - 60000)
      .map((e) => elimnaDalDB(e[0]));
    [...Object.entries(data)].forEach((e) => {
      if (JSON.parse(e[1]).type == "risposta2" && JSON.parse(e[1]).id == id) {
        let l = JSON.parse(e[1]).link;
        elimnaDalDB(e[0]);
        $("input").css("display", "block");
        $("#box").css("display", "none");
        $("#caricamento").css("display", "none");
        window.location.href = l;
      }
    });

    [...Object.entries(data)].forEach((e) => {
      if (JSON.parse(e[1]).type == "risposta1" && JSON.parse(e[1]).id == id) {
        let films = JSON.parse(e[1]).data;
        elimnaDalDB(e[0]);
        console.log(films);
        $("#box")[0].innerHTML = "";
        films.forEach((e) => {
          let box = $("#box"),
            d = $("<div></div>")[0],
            i = $("<img>"),
            h = $("<h></h>")[0];
          d.classList.add("el");
          i.attr("src", e.img);
          $(d).attr("data-url", e.url);
          h.innerHTML = e.title;
          i = i[0];
          d.append(i);
          d.append(h);
          box.append(d);
        });

        $("#caricamento").css("display", "none");
        clearTimeout(tim)
        $("#box").css("display", "flex");
      }
    });

    console.log(data);
  }
});

let i = $("input")[0],
  id = rand();
i.addEventListener("keypress", (e) => {
  if (e.key == "Enter" && i.value != "") {
    push(
      DBScelto,
      JSON.stringify({
        type: "domanda1",
        time: Date.now(),
        id: id,
        film: i.value,
      })
    );

    i.value = "";
    $("#caricamento").css("display", "block");
    tim = setTimeout(function () {
      $("#box")[0].innerHTML = "Film non trovato in tempo";
      $("#caricamento").css("display", "none");
      $("#box").css("display", "flex");
    }, 10000);
    $("#box")[0].innerHTML = "";
    setTimeout(function () {
      if (
        [...Object.values(data)].filter(
          (e) => JSON.parse(e).type == "ricevuto" && JSON.parse(e).id == id
        ).length > 0
      ) {
        elimnaDalDB(
          [...Object.entries(data)].filter(
            (e) =>
              JSON.parse(e[1]).type == "ricevuto" && JSON.parse(e[1]).id == id
          )[0][0]
        );
        console.log("arrivato");
      } else {
        console.log("non arrivato");
        [...Object.entries(data)]
          .filter(
            (e) =>
              JSON.parse(e[1]).id == id && JSON.parse(e[1]).type == "domanda1"
          )
          .map((e) => elimnaDalDB(e[0]));
        $("body")[0].innerHTML = "Server Spento";
      }
    }, 1000);
  }
});

function rand() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}
document.addEventListener("click", (e) => {
  if (
    e.target == $("#box")[0] ||
    (e.target == $("body")[0] && $("#box").css("display") == "flex")
  ) {
    location.reload();
  } else if (e.target.classList[0] == "el") {
    push(
      DBScelto,
      JSON.stringify({
        type: "domanda2",
        time: Date.now(),
        id: id,
        url: $(e.target).attr("data-url"),
      })
    );

    $("#caricamento").css("display", "block");
    $("#box").css("display", "none");
  }
});
