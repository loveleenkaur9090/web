var arr = [
    {name:"Petals Of roses", image:"https://unsplash.com/photos/red-rose-with-droplets-gcWd0ts4RCo"},
    {name:"Red sose", image:"https://unsplash.com/photos/red-rose-flower-photo-in-dark-surface-_FSA44MuXn4"},
    {name:"green and brown leaf plant", image:"https://unsplash.com/photos/green-and-brown-leaf-plant-5sF6NrB1MEg"},
    {name:"rubber plant", image:"https://unsplash.com/photos/closeup-photography-of-rubber-plant-KpuWtiszFQw"},
    {name:"a potted plant hanging from a rope", image:"https://unsplash.com/photos/a-potted-plant-hanging-from-a-rope-vfPhI0I1p8w"},
    {name:"potted green plant beside wall", image:"https://unsplash.com/photos/potted-green-plant-beside-wall-DpphPG9ENsI"}
]
function showTheCards(){
    var clutter="";
    arr.forEach(function(obj){
        clutter +=`<div class="box">
        <img class=="cursor-pointer" src="${obj.image}"
        alt="image"> <div class="capation">Lorem Ipsum</div>`;
    })
    // console.log(clutter)
  document.querySelector(".container").innerHTML=clutter;
}
function handleFunctionlity(){
    document.querySelector("#serachinput").addEventListener("focus",function(){
        document.querySelector(".overlay").computedStyleMap.display="block";
    })
    //  document.querySelector(".overlay").style.display="block";
}
handleFunctionlity()
showTheCards();