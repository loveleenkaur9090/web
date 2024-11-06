var con = document.querySelector("#container")
var heart = document.querySelector("i")

con.addEventListener("dblclick",function(){
    heart.style.transform="translate(-50%,-50%) scale(1)"
    heart.style.display="flex"
    heart.style.color="red"
    heart.style.opacity=0.8
    setTimeout(function(){
        heart.style.opacity=0;
    },2000)
    setTimeout(function(){
        heart.style.transform="translate(-50%,-50%) scale(0)"
    },2000)
})

