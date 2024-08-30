let iconCart =document.querySelector('.icon-cart');
let classCart =document.querySelector('.close');
let body =document.querySelector('body');
let listProductHTML=document.querySelector(".listProduct");
let listCartHTML=document.querySelector(".listCart");
let iconCartSpan=document.querySelector(".icon-cart span");

let listProducts=[];
let carts=[];

iconCart.addEventListener('click', ()=> {
   body.classList.toggle('showCart')
})
classCart.addEventListener('click', ()=> {
    body.classList.toggle('showCart')
 })



const addDataToHTML=()=>{
    listProductHTML.innerHTML="";
    if(listProducts.length >0){
    listProducts.forEach(products => {
      let newProduct =document.createElement('div');
      newProduct.classList.add('item');
      newProduct.innerHTML=`
             <img src="${products.image}" alt="">
             <h2>${products.name}</h2>
             <div class="price">${products.price}</div>
             <button class="addCart">Add to cart</button>
             `; 

        listProductHTML.appendChild(newProduct);     
    })
 }
} 
listProductHTML.addEventListener('click',(event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id= positionClick.parentElement.dataset.id;
   alert('1');
    }
})


 const initApp=()=>{
    fetch('products.json')
    .then(response=> response.json())
    .then(data=>{
        listProducts=data;
        addDataToHTML();
    })
 }
 initApp();