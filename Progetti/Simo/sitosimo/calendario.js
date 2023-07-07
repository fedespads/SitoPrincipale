let contimpegni = document.getElementById("contimpegni");
let cosa;
let aperta=0;
let materia;
let statoelimina=0;
let diveliminato =0;

let seldel = {
  imp1: 0,
  imp2: 0,
  imp3: 0,
  imp4: 0,
  imp5: 0,
  imp6: 0,
  imp7: 0,
  imp8: 0,
  imp9: 0,
  imp10: 0,
}


let impegni={
  imp1:[],
  imp2:[],
  imp3:[],
  imp4:[],
  imp5:[],
  imp6:[],
  imp7:[],
  imp8:[],
  imp9:[],
  imp10:[],
}
function copiaLS(){

  impegni.imp1 = localStorage. imp1;
  impegni.imp2 = localStorage. imp2;
  impegni.imp3 = localStorage. imp3;
  impegni.imp4 = localStorage. imp4;
  impegni.imp5 = localStorage. imp5;
  impegni.imp6 = localStorage. imp6;
  impegni.imp7 = localStorage. imp7;
  impegni.imp8 = localStorage. imp8;
  impegni.imp9 = localStorage. imp9;
  impegni.imp10 = localStorage. imp10;
  
  if(!impegni.imp1){impegni.imp1=[,,1300];}
  if(!impegni.imp2){impegni.imp2=[,,1300];}
  if(!impegni.imp3){impegni.imp3=[,,1300];}
  if(!impegni.imp4){impegni.imp4=[,,1300];}
  if(!impegni.imp5){impegni.imp5=[,,1300];}
  if(!impegni.imp6){impegni.imp6=[,,1300];}
  if(!impegni.imp7){impegni.imp7=[,,1300];}
  if(!impegni.imp8){impegni.imp8=[,,1300];}
  if(!(impegni.imp9)){impegni.imp9=[,,1300];}
  if(!impegni.imp10){impegni.imp10=[,,1300];}

  if(typeof impegni.imp1 == "string"){impegni.imp1= impegni.imp1.split(',')}
  if(typeof impegni.imp2 == "string"){impegni.imp2= impegni.imp2.split(',')}
  if(typeof impegni.imp3 == "string"){impegni.imp3= impegni.imp3.split(',')}
  if(typeof impegni.imp4 == "string"){impegni.imp4= impegni.imp4.split(',')}
  if(typeof impegni.imp5 == "string"){impegni.imp5= impegni.imp5.split(',')}
  if(typeof impegni.imp6 == "string"){impegni.imp6= impegni.imp6.split(',')}
  if(typeof impegni.imp7 == "string"){impegni.imp7= impegni.imp7.split(',')}
  if(typeof impegni.imp8 == "string"){impegni.imp8= impegni.imp8.split(',')}
  if(typeof impegni.imp9 == "string"){impegni.imp9= impegni.imp9.split(',')}
  if(typeof impegni.imp10 == "string"){impegni.imp10= impegni.imp10.split(',')}

  impegni.imp1[2]=+impegni.imp1[2];
  impegni.imp2[2]=+impegni.imp2[2];
  impegni.imp3[2]=+impegni.imp3[2];
  impegni.imp4[2]=+impegni.imp4[2];
  impegni.imp5[2]=+impegni.imp5[2];
  impegni.imp6[2]=+impegni.imp6[2];
  impegni.imp7[2]=+impegni.imp7[2];
  impegni.imp8[2]=+impegni.imp8[2];
  impegni.imp9[2]=+impegni.imp9[2];
  impegni.imp10[2]=+impegni.imp10[2];
  
}
function settaLS(){
  Object.keys(impegni).forEach((chiave)=>{
    if(impegni[chiave][0] !== "undefined"){localStorage.setItem(`${chiave}`,[`${impegni[chiave][0]}`,`${impegni[chiave][1]}`,`${impegni[chiave][2]}`,]);}
  })

}
copiaLS();
function attivaDiv(){

    
  let num1=0;
  Object.keys(impegni).forEach((chiave)=>{
    if(impegni[chiave][0] !== "V"&&impegni[chiave][0] !== "I"){
      num1++;
    }
  })
  num1= 10-num1;
   
  let i=1;
  while(i<=num1){
    document.getElementById(`divimp${i}`).classList.add("active");
    i++;
}
  i++;
  
  while(i<=10){
    document.getElementById(`divimp${i}`).classList.remove("active");
    i++;
  }
}
attivaDiv();
function aggData(i){
  let a= Object.values(impegni)[i-1][2].toString()[Object.values(impegni)[i-1][2].toString().length -2];
  let b= Object.values(impegni)[i-1][2].toString()[Object.values(impegni)[i-1][2].toString().length -1];
  let c;
  if(Object.values(impegni)[i-1][2].toString()[Object.values(impegni)[i-1][2].toString().length -4] !== undefined){
  
    c=Object.values(impegni)[i-1][2].toString()[Object.values(impegni)[i-1][2].toString().length -4];
  }
  else{
    c=0;
  }
  let d= Object.values(impegni)[i-1][2].toString()[Object.values(impegni)[i-1][2].toString().length -3];
  return(`${a}${b}/${c}${d}`)
}
function settaIH(){


  let i=1;
  while(i<=10){
    document.getElementById(`i${i}1`).innerHTML = Object.values(impegni)[i-1][0];

    
    document.getElementById(`i${i}2`).innerHTML = Object.values(impegni)[i-1][1];

    
    document.getElementById(`i${i}3`).innerHTML = aggData(i);

    i++;
  }
}
settaIH();
function aggSfondo(){
  let i=1;
  while(i<=10){
    if(document.getElementById(`i${i}1`).innerHTML == 'V'){
      document.getElementById(`i${i}1`).style.backgroundColor = 'rgb(202, 202, 38)'
    }
    i++;
  }
}
aggSfondo();
function EliminaDiv(DE){
  let i=DE;
  localStorage.setItem(`imp${i}`,"");
  while(i<=9){
    localStorage.setItem(`imp${i}`, localStorage.getItem(`imp${i+1}`))
    i++;
  }
  localStorage.setItem("imp10","");
  copiaLS();
  settaIH();
  aggSfondo();
  let a=1;
  let b=0;
  while(a<=10){
    if(localStorage.getItem(`imp${a}`)[0] == 'I'){
    b++;
    }
    if(localStorage.getItem(`imp${a}`)[0] == 'V'){
      b++;
    }
    a++;
  }
  document.getElementById(`divimp${b+1}`).classList.remove("active");

  document.querySelectorAll(".del").forEach(el=>{
    el.classList.remove("del");
  })

  diveliminato=0;
}




console.log(impegni);
console.log(localStorage);






document.getElementById("piu").addEventListener("click", function ApriAggiungiImpegno(){
  document.getElementById("muroblur").classList.add("active");
  document.getElementById("contaggiunta").classList.add("active");
  window.scrollTo(0,0);
  document.body.style.overflowY = "hidden";
});


document.getElementById("finepiu").addEventListener("click", function FineAggiungiImpegno(){

  //parte iniziale
  document.getElementById("muroblur").classList.remove("active");
  document.getElementById("contaggiunta").classList.remove("active");
  document.getElementById("i").classList.remove("active");
  


  
  //setta valore data
  let data = +`${document.getElementById("dataimp").value.split('-')[1]}${document.getElementById("dataimp").value.split('-')[2]}`;

  //inserisci impegno nel primo libero nel Ob
  function InsImpegno(){


  
    let num1=0;
    Object.keys(impegni).forEach((chiave)=>{
      if(impegni[chiave][0] !== "V"&&impegni[chiave][0] !== "I"){
        num1++;
      }
    })
    num1= 11-num1;
  
    if(num1<=10){
  
      let num2=0;
      Object.keys(impegni).forEach((chiave)=>{
        num2++;
        if(num2==num1){
          impegni[chiave]=[`${cosa}`,`${materia}`,+`${data}`];
        }
      })
    }
  }
  InsImpegno();

  //ordina Ob
  function ordinaOb(){
    i=9;
    while(i>=1){
      if(Object.values(impegni)[i][2]<Object.values(impegni)[i-1][2]){
  
        let vol= Object.values(impegni)[i-1]
  
        let num=0;
        Object.keys(impegni).forEach((chiave)=>{
          
          if(num==i-1){
            impegni[chiave]=Object.values(impegni)[i];
          }
          num++;
        })
          
        num=0;
        Object.keys(impegni).forEach((chiave)=>{
          
          if(num==i){
            impegni[chiave]=vol;
          }
          num++;
        })
        
      }
      i--
    }
  }
  ordinaOb();
  settaLS();
  console.log(impegni);
  console.log(localStorage);


  //sblocca nuovo impegno active
  attivaDiv();


  //setta innerHTML impegni
  settaIH();
  aggSfondo();





    


  //reset finale
  cosa = null;
  materia = null;
  data=null;
  document.getElementById("dataimp").value =null;
  document.getElementById("testomateria").innerHTML ="-";
  document.body.style.overflowY ="auto";
});


document.getElementById("i").addEventListener("click",
function Interrog(){
  document.getElementById("i").classList.add("active");
  document.getElementById("v").classList.remove("active");
  cosa= "I";
});
document.getElementById("v").addEventListener("click",function Verifica(){
  document.getElementById("v").classList.add("active");
  document.getElementById("i").classList.remove("active");
  cosa= "V";
});
document.getElementById("casellamateria").addEventListener("click",function Casella(){
  document.getElementById("materie").classList.toggle("active");
  document.getElementById("imgfreccia").classList.toggle("active");
});




//IMPORTANTE
document.querySelectorAll('.materia').forEach(el => {
  el.addEventListener('click', function (){
    
  document.getElementById("testomateria").innerHTML=
  el.innerHTML;
  materia = el.innerHTML;
  
  document.getElementById("materie").classList.remove("active");
  document.getElementById("imgfreccia").classList.remove("active");
  });
});


document.querySelectorAll('.contenitore-impegno-singolo').forEach(el=>{
  el.addEventListener("click", function(){
    c++;
  el.classList.add('del');

  document.querySelectorAll('.contenitore-impegno-singolo').forEach(e=>{
    if (e !== el){
      e.classList.remove('del');
    }
  })


  })
})

document.querySelector(".titolo").addEventListener("click", function(){
    document.querySelectorAll('.contenitore-impegno-singolo').forEach(cont=>{
      cont.classList.remove('del');
    })
  
})

function contaimpegni(){
  let numimpegni =0;
  document.querySelectorAll('.impegno').forEach(imp => {
    numimpegni++;
  });
};

setInterval(function(){
  if(document.querySelector('.del')){
    setTimeout(function(){
      document.querySelector('.del').addEventListener("click", function(){
        diveliminato = +document.querySelector('.del').id[document.querySelector('.del').id.length -1];
        console.log('cliccato un del');
        EliminaDiv(diveliminato);
      })

    },500)
    console.log('si');
  }
  else{
    console.log('no');
  }
  aggSfondo();
},500);




