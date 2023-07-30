

const menu=document.getElementById("menu")

// window.onscroll=function(){
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("menu").style.top = "0";
//     } else {
//         document.getElementById("menu").style.top = "-100px";
//     }
// }
 window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop>0){
        menu.style.top="0"
        //console.log("documentElement:",document.documentElement.scrollTop);
    }else{
        menu.style.top="-100px"
    }
 })