let nuovotitolo = document.querySelector('.nuovotitolo')
nuovotitolo.addEventListener('keypress',e=>{
  if(e.key=='Enter'&&nuovotitolo.value!=""){
    localStorage.setItem('cdm',nuovotitolo.value);
    window.location.href = '../build';
  }
})