// esme throttling function ka use kiya gya hain

const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center")
.addEventListener("mousemove",
throttleFunction((dets) => {
      //   console.log("clicked")
     var div = document.createElement("div")   
     div.classList.add('imagediv');
     div.style.left=dets.clientX+'px';
     div.style.top=dets.clientY+'px';
     var img = document.createElement("img")   
     img.setAttribute("src","img-1.jfif")
     div.appendChild(img);
     document.body.appendChild(div);
     gsap.to(img,{
       y:"0",
       ease:Power1,
       duration:.6 ,
     });


     gsap.to(img,{
      y:"100%",
      delay:.4,
      ease:Power3,
      duration:.6,
    });
     setTimeout(function(){
      div.remove();
     },1560)
   }, 400));