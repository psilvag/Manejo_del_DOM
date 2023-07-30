
   const abrir=document.getElementById('abrir')
   const menu=document.getElementById('miMenu')
   const cerrar=document.getElementById('cerrarMenu')

   abrir.addEventListener('click',()=>{
     menu.style.width="300px"
   })
   
   cerrar.addEventListener('click',()=>{
   menu.style.width='0px'
   })