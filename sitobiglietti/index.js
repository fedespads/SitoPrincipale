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
    [//array tratte, ogni tratta in giallo
      ['Volo Catania Malpensa', {
        A:'',
        D:'',
        F:'',
      }],
      ['Volo Malpensa Parigi', {
        A:'',
        D:'',
        F:'',
        S:''
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
    [//array tratte, ogni tratta in giallo
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
    [//array tratte, ogni tratta in giallo
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
    [//array tratte, ogni tratta in giallo
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
    [//array tratte, ogni tratta in giallo
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
    [//array tratte, ogni tratta in giallo
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
    [//array tratte, ogni tratta in giallo
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
        S:''
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
        console.log(ele[1].A)
        b.innerHTML=`
          <a href="${ele[1].A}"  download=""><button>Alessio</button></a>
          
          <a href="${ele[1].D}"  download=""><button>Daniele</button></a>
          
          <a href="${ele[1].F}"  download=""><button>Federico</button></a>
          
          <a href="${ele[1].S}"  download=""><button>Simona</button></a>
        `
        
        e.appendChild(a);
        e.appendChild(b);


      })
    }
  })
  g++;
})
