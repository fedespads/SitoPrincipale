import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const appSettings = {
  //cambia
  databaseURL:
    "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/",
};
let s;

const app = initializeApp(appSettings);
const database = getDatabase(app);

let utenti = [];
onValue(ref(database, `Classifica/utenti`), function (snapshot) {
  if (snapshot.exists()) {
    s = snapshot.val();
    Object.values(s).forEach((e) => {
      let a = JSON.parse(e);
      utenti.push(a);
    });
  } else {
    //
  }
});
console.log(utenti);
let email = document.getElementById("email");
console.log(email);
let password = document.getElementById("password");
email.addEventListener("change", function () {
  if (email.value != "") {
    let elboxp = document.createElement("div");
    elboxp.innerHTML = `
    <div id="boxp">
      <div>Password</div>
      <input id="password" type="password">
    </div>
  `;
    document.querySelector(".form").appendChild(elboxp);
    password = document.getElementById("password");
  } else {
    document.querySelector("#boxp").remove();
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter" && e.target.id == "password" && e.target.value != "") {
    let emailtrovata = false;
    let utentetrovato;
    utenti.forEach((e) => {
      if (e[0] == email.value) {
        emailtrovata = true;
        utentetrovato = e;
      }
    });
    if (emailtrovata) {
      if (utentetrovato[1] == password.value) {
        localStorage.setItem(
          `DAC`,
          JSON.stringify([email.value, e.target.value])
        );
        window.location.href = "../"
      } else {
        let elredtext = document.createElement('div');
        elredtext.classList.add('redtext');
        elredtext.innerHTML='Password Errata'
        document.querySelector('.box').appendChild(elredtext);
      }
    } else {
      push(
        ref(database, `Classifica/utenti`),
        JSON.stringify([email.value, e.target.value])
      );
      localStorage.setItem(
        `DAC`,
        JSON.stringify([email.value, e.target.value])
      );
      window.location.href = "../"
    }
  }
});
