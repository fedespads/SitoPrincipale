 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
  //cambia
  databaseURL: "https://asgarra-60fc9-default-rtdb.europe-west1.firebasedatabase.app/"
}

function eliminadalDB(id){
  let posizione = ref(database,`${DBScelto._path.pieces_[0]}/${id}`);
  remove(posizione);
}
const app = initializeApp(appSettings)
const database = getDatabase(app);
const DBScelto = ref(database, "ScuolaSimo")
onValue(DBScelto ,function(snapshot){
      
  if(snapshot.exists()){
    //DB presente

    let s=snapshot.val();
    console.log(s)

    contimpegni.innerHTML='';
    let arraycopia=[]
    Object.entries(s).forEach(e=>{
      let ar=[];
      ar[0]=e[1][2];
      ar[1]=e[1][0];
      ar[2]=e[1][1];
      ar[3]=e[0];
      arraycopia.push(ar);
    })
    arraycopia.sort();
    arraycopia.forEach(el=>{
      
      let a= document.createElement('div');
      a.setAttribute('id',el[3]);
      a.classList.add('contenitore-impegno-singolo');

      let b= document.createElement('div');
      b.classList.add('start')
      b.classList.add(`${el[1]}`);
      b.innerHTML=el[1];

      let c= document.createElement('div');
      c.classList.add('center')
      c.innerHTML=el[2];

      
      let d= document.createElement('div');
      d.classList.add('end')
      d.innerHTML=data12(el[0]);

      a.appendChild(b);
      a.appendChild(c);
      a.appendChild(d);

      contimpegni.appendChild(a)
    })
  }
  else{
    contimpegni.innerHTML='Calendario vuoto'
  }
})



let i = document.getElementById('i');
let v = document.getElementById('v');
let piu = document.getElementById('piu');
let materie = document.getElementById('materie');
let finepiu = document.getElementById('finepiu');
let dataimp = document.getElementById('dataimp');
let contimpegni = document.getElementById('contimpegni');
let testomateria = document.getElementById('testomateria');
let casellamateria = document.getElementById('casellamateria');

let muroblur = document.querySelector('.muroblur');
let imgfreccia = document.querySelector('.imgfreccia');
let contaggiunta = document.querySelector('.contaggiunta');



let materieArr =['Arte', 'Chimica', 'Ed. Civica', 'Filosofia', 'Fisica', 'Inglese', 'Italiano', 'Lab. Arch.', 'Matematica', 'Motoria', 'Potenz.', 'Prog. Arch.', 'Religione', 'Storia'
]


document.addEventListener('click', e=>{
    if(e.target.classList[0]=="contenitore-impegno-singolo"||
      e.target.parentElement.classList[0]=="contenitore-impegno-singolo"){
      let a;
      if(e.target.classList[0]=="contenitore-impegno-singolo"){
        a = document.getElementById(e.target.id);
      }
      else{
        a = document.getElementById(e.target.parentElement.id);
      }
      if(a.classList[1]){
        eliminadalDB(a.id);
        a.classList.remove('el')
      }
      else{
        console.log('2')
        document.querySelectorAll('.contenitore-impegno-singolo').forEach(el=>{
          if(el.id!=a.id){
            el.classList.remove('el')
          }
        })
        a.classList.add('el')
      }
  }
  else{
    
    document.querySelectorAll('.contenitore-impegno-singolo').forEach(el=>{
        el.classList.remove('el')
    })

  }
})

materieArr.forEach(e=>{
  let a= document.createElement('div');
  a.classList.add('materia');
  a.innerHTML=e;
  materie.appendChild(a);
})

document.querySelectorAll('.materia').forEach(e=>{
  e.addEventListener('click',function(){
    
    testomateria.innerHTML=e.innerHTML;
    materie.classList.remove('active');
    imgfreccia.classList.remove('active');
  })
})

piu.addEventListener('click', function(){
  muroblur.classList.add('active');
  contaggiunta.classList.add('active');
})
finepiu.addEventListener('click',function(){
  let arr=[];

  if(i.classList[2]){
    arr[0]='I'
  }
  else if(v.classList[2]){
    arr[0]='V'
  }
  arr[1]=testomateria.innerHTML;
  arr[2]=dataimp.value;

  if(arr[0]&&arr[1]!="-"&&arr[2]){
    push(DBScelto,arr)
  }

  muroblur.classList.remove('active');
  contaggiunta.classList.remove('active');
  i.classList.remove('active');
  v.classList.remove('active');
  testomateria.innerHTML="-";
  dataimp.value="";
})
v.addEventListener('click',function(){
  v.classList.add('active');
  i.classList.remove('active');
})
i.addEventListener('click',function(){
  i.classList.add('active');
  v.classList.remove('active');
})
casellamateria.addEventListener('click',function(){
  materie.classList.toggle('active');
  imgfreccia.classList.toggle('active');
})



