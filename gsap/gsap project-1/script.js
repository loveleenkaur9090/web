var main=document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var imageDiv=document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.1,
        ease:"back.out"
    })
})
imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML="hello"
    gsap.to(cursor,{
        scale:2
    })
})
imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1
    })
})