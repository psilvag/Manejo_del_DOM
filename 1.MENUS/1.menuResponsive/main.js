

   const btn=document.querySelector('.btn')
   const menu=document.querySelector('.menu')
   const barras=document.querySelectorAll('.btn span')

   btn.addEventListener('click',()=>{
    menu.classList.toggle('mostrar')
    barras.forEach(barra=>{
        barra.classList.toggle('animado')
    })
   })
     
