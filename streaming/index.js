localStorage.removeItem("media");
localStorage.removeItem("s");
let codes = ["f", "s"];
codes.forEach((e) => {
  document.querySelector("#" + e).addEventListener("click", function () {
    localStorage.setItem("s", e);
    document.body.innerHTML = "<input>";
    document.querySelector("input").focus()
    document.querySelector("input").addEventListener("keypress", (e) => {
      if (e.code == "Enter") {
        localStorage.setItem("media", document.querySelector("input").value);
        setTimeout(function () {
          localStorage.removeItem("media");
          localStorage.removeItem("s");
        }, 1000);
      }
    });
  });
});

