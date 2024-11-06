var main=document.querySelector("#main")
var crsr= document.querySelector("#cursor")


main.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
    crsr.style.height="25px"
    crsr.style.width="25px"
    crsr.style.top= dets.x+"px"
})