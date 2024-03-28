document.querySelectorAll('.app').forEach(e=>{
  e.addEventListener('click',function(){
    window.location.href='http://192.168.1.26:5000/fra?azione='+e.id
  })
})