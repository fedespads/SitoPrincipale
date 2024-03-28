document.querySelectorAll('.ret').forEach(e=>{
  e.addEventListener('click',function(){
    window.location.href='http://192.168.1.26:5000/'+e.id
  })
})

let moving= false,x1,y1,x2,y2,datat,c=document.querySelector('#c'),dd=null;
document.addEventListener('touchstart',e=>{
  let a = (document.querySelector('#volume').scrollLeft*(-2/3)+100).toFixed(0);
  a>100?a=100:(a<0?a=0:a=a)
  if(e.target.parentElement.id=='c') {
    moving = true;
    x1=e.touches[0].clientX;
    datat=+c.getAttribute('data-t')
  } 
})
document.addEventListener('touchmove',e=>{
  if(moving){
    x2=e.touches[0].clientX;
    let diff= x2-x1;
    dd = datat+diff>0?0:(datat+diff<-150?-150:datat+diff)
    c.setAttribute('data-t',dd)
    c.style.translate=dd+'px 0px'
  }
})
document.addEventListener('touchend',function(){
  if(moving){
    let  volvalue=+(dd*(2/3)+100).toFixed(0)
    window.location.href='http://192.168.1.26:5000/volume?v='+volvalue
  }
  moving=false
})

