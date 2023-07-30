

 const container=document.querySelector('.container')

 container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('bloque')){
        e.target.parentElement.classList.toggle('scale')
        e.target.children[1].classList.toggle('rotate')
    }
         
     
 })