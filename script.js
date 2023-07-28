const modal = document.getElementById('signUp');
const sign = document.querySelectorAll('.sign');
const input = document.getElementById('.input');

sign.forEach(item=>{
  item.addEventListener('click', ()=>{
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    input.style.display='none'
  }
  )})

modal.addEventListener('click',()=>{
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  input.style.display="relative";

  
})