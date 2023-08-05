for(let i=7;i<=13;i++){
  let a = document.createElement('div');
  a.classList.add("blocco");
  let b;
  if(i<10){b=`0${i}`;}
  else{b=i;}
  a.innerHTML=`
  <div class="data">${b}/09</div>`;
  document.body.appendChild(a);
}
let arr=[
  [7,
    [
      ['Volo Catania-Malpensa', {
        A:'',
        D:'',
        F:'',
      }],
      ['Volo Malpensa-Parigi', {
        A:'malpensaorlyalessio.pkpass',
        D:'malpensaorlydaniele.pkpass',
        F:'malpensaorlyfederico.pkpass',
        S:'malpensaorlysimona.pkpass'
      }],
      ['Ostello a Parigi', {
        A:'',
        D:'',
        F:'',
        S:''
      }]
    ]
  ]
  ,
  [8,
    [
      ['Flixbus Parigi-Amsterdam', {
        A:'',
        D:'',
        F:'',
        S:''
      }]
    ]
  ]
  ,
  [9,
    [
      ['Ostello Amsterdam', {
        A:'',
        D:'',
        F:'',
        S:''
      }]
    ]
  ]
  ,
  [10,
    [
      ['Flixbus Amsterdam-Berlino', {
        A:'',
        D:'',
        F:'',
        S:''
      }]
    ]
  ]
  ,
  [11,
    [
      ['Flixbus Berlino-Praga', {
        A:'',
        D:'',
        F:'',
        S:''
      }],
      ['Ostello Praga', {
        A:'',
        D:'',
        F:'',
        S:''
      }]
    ]
  ]
  ,
  [12,
    [
      ['Ostello Praga', {
        A:'',
        D:'',
        F:'',
        S:''
      }]
    ]
  ]
  ,
  [13,
    [
      ['Volo Praga-Malpensa', {
        A:'',
        D:'',
        F:'',
        S:''
      }],
      ['Volo Malpensa-Catania', {
        A:'',
        D:'',
        F:'',
      }]
    ]
  ]
  ,
]

let g=7;
document.querySelectorAll('.blocco').forEach(e=>{
  let a= document.createElement('div');
  arr.forEach(el=>{
    if(el[0]==g){
      el[1].forEach(ele=>{
        let a = document.createElement('div');
        a.classList.add('titolobiglietto')
        a.innerHTML=ele[0];
        let b= document.createElement('div');
        b.classList.add('boxbiglietti');

        if(ele[1].A!=""){
        b.innerHTML=`
          <a href="biglietti/${ele[1].A}"  download=""><button class="a">Alessio</button></a>`
        }
        else{
          b.innerHTML=`
          <a href="biglietti/${ele[1].A}"  download=""><button >Alessio</button></a>`
        }

        if(ele[1].D!=""){
          b.innerHTML+=`
            <a href="biglietti/${ele[1].D}"  download=""><button class="a">Daniele</button></a>`
          }
          else{
            b.innerHTML+=`
            <a href="biglietti/${ele[1].D}"  download=""><button >Daniele</button></a>`
          }
          
        if(ele[1].F!=""){
          b.innerHTML+=`
            <a href="biglietti/${ele[1].F}"  download=""><button class="a">Federico</button></a>`
          }
          else{
            b.innerHTML+=`
            <a href="biglietti/${ele[1].F}"  download=""><button >Federico</button></a>`
          }




        if(ele[0]!="Volo Catania-Malpensa"&&ele[0]!="Volo Malpensa-Catania"){

          if(ele[1].S!=""){
            b.innerHTML+=`
              <a href="biglietti/${ele[1].S}"  download=""><button class="a">Simona</button></a>`
            }
            else{
              b.innerHTML+=`
              <a href="biglietti/${ele[1].S}"  download=""><button >Simona</button></a>`
            }


        }
        

        e.appendChild(a);
        e.appendChild(b);


      })
    }
  })
  g++;
})