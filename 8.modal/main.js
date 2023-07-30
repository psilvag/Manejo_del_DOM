
const btn=document.querySelector('.boton')
const modal=document.querySelector('.modal')
const btncerrar=document.querySelector('.botoncerrar')

btn.addEventListener('click',()=>{
    modal.showModal()
})

btncerrar.addEventListener('click',()=>{
    modal.close()
})