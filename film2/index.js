document.querySelector('input').addEventListener('keypress',e=>{
  if(e.key=='Enter'){
    window.location.href = 'https://cb01.financial/?s='+document.querySelector('input').value
  }
})