var aa=document.querySelector("#main i")
var main=document.querySelector("#main")
main.addEventListener("dblclick", function(){
    aa.style.transform='translate(-50%,-50%)scale(1.4)'
    aa.style.opacity=1
    // aa.style.color="red"

    setTimeout(function(){
        aa.style.opacity=0
    },1200)

    setTimeout(function(){
        aa.style.transform='translate(-50%,-50%)scale(0)'
    },2000)
    setTimeout(function(){
        aa.style.transform='translate(-50%,-50%)scale(1)'
    },1000)
   
})
   
   
