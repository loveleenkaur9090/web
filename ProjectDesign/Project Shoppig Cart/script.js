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
    addToCart(product_id);
    }
})

const addToCart = (product_id) =>{
    let positionThisProductInCart= carts.findIndex((value)=> value.product_id == product_id);
    if(carts.length<=0){
        carts=[{
            product_id:product_id,
            quantity:1
        }]
     } 
    else if(positionThisProductInCart < 0){
            carts.push[{
                product_id:product_id,
                quantity:1
            }]
    }else{
        carts[positionThisProductInCart].quantity=carts[positionThisProductInCart].quantity=1;
    }
   addCartToHTML();
   addCartToMemory();
     
}
const addCartToMemory=()=>{
    localStorage.setItem('cart',JSON.stringify(carts));
}
const addCartToHTML=()=>{
    listCartHTML.innerHTML='';
    let totalQuantity= 0;
    if(carts.length > 0){
        carts.forEach(cart =>{
            totalQuantity=totalQuantity+cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id=cart.product_id;
            let positionProduct=listProducts.findIndex((value)=> value.id ==cart.product_id);
            let info=listProducts[positionProduct];
            newCart.innerHTML=`
              <div class="image">
            <img src="${info.image}" alt="">
          </div>
        <div class="name">${info.name}</div>
        <div class="totalPrice">${info.price}</div>
         <div class="quantity">
            <span class="minus">-</span>
            <span class="one">${cart.quantity}</span>
            <span class="plus">+</span>
         </div>
            `;
            listCartHTML=appendChild(newCart);
        })
    }
    iconCartSpan.innerText=totalQuantity;
}
listCartHTML.addEventListener(('click'),(revent)=>{
    
    let positionClick=event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
    let product_id=positionClick.parentElement.dataset.id;
    let type='minus';
    if(positionClick.classList.contains('plus')){
    type='plus';
   }
   changeQuantity(product_id,type);
   let positionClick=carts.carts.findIndex((value)=>value.product_id=product_id);
}
})
 const initApp=()=>{
    fetch('products.json')
    .then(response=> response.json())
    .then(data=>{
        listProducts=data;
        addDataToHTML();

        if(localStorage.getItem('data')){
            carts=JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
 }
 initApp();