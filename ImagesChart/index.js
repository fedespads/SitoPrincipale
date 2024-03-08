localStorage.removeItem("fl");

let htmls = [
  ` 
  <style>
    @font-face {
      font-family: 'SF';
      src: url(https://fedespada.com/font/SF-Pro-Display-Bold.ttf);
    }

    @font-face {
      font-family: 'Bebas';
      src: url(https://fedespada.com/font/Bebas.ttf);
    }

    @font-face {
      font-family: 'Mogilte';
      src: url(font/Mogilte.otf);
    }

    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      background-color: #e0e0e0;
      display: flex;
      flex-direction: column;
    }

    .center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 70vw;
      margin: 20px;
      border-radius: 10px;
      max-width: 300px;
    }

    #b {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    #title {
      text-align: center;
      font-family: 'Mogilte';
      font-size: 40px;
      color: rgb(93, 19, 19);
      margin: 20px;
      user-select: none;
    }

    #addbut {
      margin: 20px;
      height: 70px;
      width: 70px;
      cursor: pointer;
      border-radius: 41px;
      background: linear-gradient(145deg, #f0f0f0, #cacaca);
      box-shadow: 10px 10px 20px #bebebe,
        -10px -10px 20px #ffffff;
      transition: background 10s;
    }

    #addbut.c {
      border-radius: 41px;
      background: linear-gradient(145deg, #cacaca, #f0f0f0);
      box-shadow: 10px 10px 20px #bebebe,
        -10px -10px 20px #ffffff;
    }

    #plus {
      fill: rgb(93, 19, 19);
      height: 30px;
      pointer-events: none;

    }
  </style>
  <div id="title">Classifica</div>
  <div id="b">
  </div>
  <script src="index.js" type="module">  </script>
  <script src="funzioni.js">  </script>
`,
  ` 
  <style>
    @font-face {
  font-family: 'SF';
  src: url(https://fedespada.com/font/SF-Pro-Display-Bold.ttf);
}

@font-face {
  font-family: 'Bebas';
  src: url(https://fedespada.com/font/Bebas.ttf);
}
@font-face {
  font-family: 'Mogilte';
  src: url(../font/Mogilte.otf);
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
}
.center{
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
  width: 100%; 
    height: 100%; 
    object-fit: contain; 
  border-radius: 10px;
}
#b{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
::-webkit-scrollbar {
  display: none;
}
#title{
  text-align: center;
  font-family: 'Mogilte';
  font-size: 40px;
  color: rgb(93, 19, 19);
  margin: 20px;
  user-select: none;
}
.img{
height: min-content;
}
#c,#d{
  flex:1;
  width: 100vw;
  margin: 20px;
  overflow: hidden;
}

  </style>
  <div id="title">Scegli</div>
  <div id="b" >
    <div id="c" class="center">
      <img src="" id="ci">
    </div>
    <div id="d" class="center">
      <img src="" id="di"></div>
  </div>
  <script src="index.js" type="module">  </script>
  <script src="funzioni.js">  </script>
`,
];

document.addEventListener("mousedown", (e) => {
  e = e.target;
  if (e.id == "addbut") {
    e.classList.add("c");
  }
});
document.addEventListener("mouseup", (e) => {
  e = e.target;
  if (e.id == "addbut") {
    e.classList.remove("c");
  }
});
document.addEventListener("click", (e) => {
  e = e.target;
  if (e.id == "addbut") {
    document.body.innerHTML +=
      ' <input type="file" id="inpImages" =accept=".jpg,.jpeg,.png,.gif,.heic,.heif" style="display:none;" multiple>';
    di();
    document.querySelector("#inpImages").click();
  }
});

function l1() {
  if (localStorage.getItem("fl")) {
    if (imagesArray.length < +localStorage.getItem("fl")) {
      console.log(imagesArray.length + "/" + +localStorage.getItem("fl"));
      requestAnimationFrame(l1);
    } else {
      console.log(imagesArray);
      c1();
    }
  } else {
    requestAnimationFrame(l1);
  }
}
l1();
pb();
function c1() {
  document.body.innerHTML = htmls[1];

  let ci = document.querySelector("#ci");
  let di = document.querySelector("#di");
  let c = document.querySelector("#c");
  let d = document.querySelector("#d");

  let images = imagesArray;
  let scelti = [];
  scelti.push(images[0]);
  images.shift();
  console.log(scelti);
  console.log(images);
  let min = -1,
    max = scelti.length,
    m;

  let elnow = images[0];
  images.shift();

  di.src = elnow;
  function g() {
    if (min == max - 1) {
      scelti.splice(max, 0, elnow);
      
      if (images.length > 0) {
        elnow = images[0];
        images.shift();
        min = -1;
        max = scelti.length;
        m = av(min, max);
        di.src = elnow;
        ci.src = scelti[m];
      } else {
        document.body.innerHTML = htmls[0];
        document.querySelector('#b').innerHTML = "";
        scelti.forEach((e) => (document.querySelector('#b').innerHTML += `<img src=${e}>`));
        console.log("qui");
      }
    } else {
      m = av(min, max);
      ci.src = scelti[m];
    }

    console.log(min, max, m);
  }
  g();
  ci.addEventListener("click", function () {
    min = m;
    g();
  });
  di.addEventListener("click", function () {
    max = m;
    g();
  });
}
