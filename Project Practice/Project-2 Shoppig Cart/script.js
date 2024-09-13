
let ArrProducts=[
    {
        id:1,
        name:"Think And Griw Rich",
        image:"img-1.jfif",
        price:"359",
        rating:4.5,
    },
    {
        id:2,
        name:"The Power Of Your Subconcious Mind",
        image:"img-2.jfif",
        price:"309",
        rating:4,

    },
    {
        id:3,
        name:"Thinking Fast and Slow",
        image:"img-3.jfif",
        price:"259",
        rating:4,

    },
    {
        id:4,
        name:"48 Laws Of Power",
        image:"img-4.jfif",
        price:"409",
        rating:4,
    },
    {
        id:5,
        name:"The Power of Positive Thinking",
        image:"img-5.jfif",
        price:"300",
        rating:5,
    },
]; 

const body=document.querySelector("body"),
      products= document.querySelector(".products"),
      shoppingBasket=document.querySelector(".shoppingBasket"),
      closeCart=document.querySelector(".close"),
      productList=document.querySelector(".productList"),
      quantity=document.querySelector(".quantity"),
      totalPrice=document.querySelector(".total")

let checkOutList=[];

shoppingBasket.onclick=()=>{
    body.classList.add("active");
}
closeCart.onclick=()=>{
    body.classList.remove("active");
}

function onInIt(){
    ArrProducts.forEach((item,key)=>{
     let div=document.createElement("div");
     div.classList.add("item");

     let star="";
     for(i=0; i<item.rating; i++){
       star += `<i class="fa fa-star"></i>`;
     }
     div.innerHTML=`
    <img src="${item.image}" alt="" srcset="">
    <div class="name">${item.name}</div> 
    <div>${star}</div> 
    <div class="price"><smaill>$</small> ${item.price}</div> 
    <button onclick="addToCart(${key})"><i class="fa fa-cart-shopping fa-xl"></i> Add To Cart</button>
    `;
     products.appendChild(div);
    });
}
onInIt();
function addToCart(Id){
    //  console.log(ArrProducts[Id]);
     if(checkOutList[Id]==null){
        checkOutList[Id]= ArrProducts[Id];
        checkOutList[Id].quantity=1;
     }else{
        checkOutList[Id].quantity+=1;
     }
     reloadCart();
}

function reloadCart(){
    productList.innerHTML="";
    let count=0;
    let total=0;
    
    checkOutList.forEach((item,key)=>{
        total += parseInt(item.price * item.quantity)
        count += item.quantity;
        let li=document.createElement("li");
        li.innerHTML=`
    <img src="${item.image}" alt="" srcset="">
    <div class="name">${item.name}</div> 
    <div class="price"><smaill>$</small> ${item.price}</div>
    <div>
    <button onclick="changeQuantity(${key},${item.quantity-1})">-</button>
    <div class="count">${item.quantity}</div> 
    <button  onclick="changeQuantity(${key},${item.quantity+1})">+</button>
    </div> 
    `;
   
        productList.appendChild(li);
    });

totalPrice.innerHTML=`<small>Subtotal (${count} items )</small>
    `+"$"+ total;
    quantity.innerHTML=count;
}
function changeQuantity(key,quantity){
    if(quantity==0){
       delete checkOutList [key]; 
    }
    else{
        checkOutList[key].quantity=quantity;
    }
    reloadCart();
}