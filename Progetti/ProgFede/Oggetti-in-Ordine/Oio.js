const input = document.getElementById("myInput");
const div = document.getElementById("mydiv");
const fineBut = document.getElementById("fine");
let myArray =[];
if(localStorage.getItem("myArr")!==""){
  myArray = JSON.parse(localStorage.getItem("myArr"));
}
console.log(myArray);
function altriC(n){
  let a=1;
  let b="";
  while(a<myArray[n].length){
    b=`${b}${myArray[n][a]}`
    a++;
  }
  return b;
}
function settadiv(a,n){
  
  while(n<myArray.length){
    a = `${a}${myArray[n]}<br>`;
    n++;
  }
  div.innerHTML =a;
}
function fine(){
  
  myArray[myArray.length]= input.value;
  myArray.sort();


  let n=0;
  while(n<myArray.length){
    myArray[n] = `${myArray[n][0].toUpperCase()}${altriC(n)}`;
    n++;
  }
  
  myArray.sort();
  settadiv("",0);
console.log(myArray);
  input.value="";
  localStorage.setItem("myArr",JSON.stringify(myArray));
}
settadiv("",0);

input.addEventListener("keypress",function(event){
  if(event.key=='Enter'){fine();
  }
});

fineBut.addEventListener("click",function(){fine();
})


