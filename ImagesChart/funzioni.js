var imagesArray = [];

let b = document.querySelector("#b");
function pb() {
  if (!document.querySelector("#addbut")) {
    let a = `<div id="addbut" class="center">\n  <svg fill="#000000" id="plus" viewBox="0 0 45.402 45.402" xml:space="preserve">\n    <g>\n      <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141\n   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27\n   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435\n   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>\n    </g>\n  </svg>\n\n</div>`;

    document.querySelector("#b").innerHTML += a;
  }
}
function si(a) {
  document.querySelector('#b').innerHTML = "";
  a.forEach((e) => (document.querySelector('#b').innerHTML += `<img src=${e}>`));
  setTimeout(pb, 500);
}
function di() {
  document
    .getElementById("inpImages")
    .addEventListener("change", function (event) {
      var input = event.target;
      var files = input.files; // Ottiene i file selezionati

      if (files.length === 0) {
        alert("Nessuna immagine selezionata.");
        return;
      }

      imagesArray = [];

      function readFile(file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var base64String = e.target.result;
          imagesArray.push(base64String);
          if (imagesArray.length === files.length) {
            // localStorage.setItem("go", true);
          }
        };
        reader.readAsDataURL(file);
      }

      localStorage.setItem("fl", files.length);
      for (var i = 0; i < files.length; i++) {
        readFile(files[i]);
      }
    });
}
let l = localStorage.getItem("images");
function av(num1, num2) {
  return Math.floor((num1 + num2) / 2);
}
function loop() {
  if (localStorage.getItem("images") != l) {
    l = localStorage.getItem("images");
    window.location.href = "sort";
  }
  requestAnimationFrame(loop);
}
loop();
