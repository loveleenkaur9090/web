var products=[
    {
    name:"Joyor LiteGO 350W 36V 13AH Electric scooter",
    price:"€569",
    strikeprice:"€599.00",
    image:"https://site-860621.mozfiles.com/files/860621/catitems/thumb/litego-joyor__6_-708ce4e12a2ff2d0b5d25bfdad27377d.jpg?5905586",
    },
    {
    name:"Joyor G5 500W 48V 13AH Electric scooter",
    price:"€559",
    strikeprice:"€599.00",
    image:"https://site-860621.mozfiles.com/files/860621/catitems/thumb/eride_lv-joyor-g5-2021-0789071a0e9b30c9fb04056506bf2c3b.jpeg?3974425" },
    {
    name:"Joyor Y10 500W 48V 26AH Electric scooter",
    price:"€1199.00",
    strikeprice:"€599.00",
    image:"https://site-860621.mozfiles.com/files/860621/catitems/thumb/y-series-y5s-y10-black-joyor-scooter-jpg_8af256f9-fbef-40ee-bf88-ff09dfdc742d_400x2x1-ezgif_com-webp-to-jpg-converter-7929d868bad2e0d24d25fc0b1559f86c.jpg?5923933"},
    {
    name:"NAVEE V50 Electric scooter",
    price:"€599",
    strikeprice:"€639.00",
    image:"https://site-860621.mozfiles.com/files/860621/catitems/thumb/ezgif_com-webp-to-jpg__42_-3cd9958e1d70a7e764219e13133ca435.jpg?5554675" }
];

var popular=[];


function addProduct(){
    var  clutter="";
    products.forEach(function(product) {
        clutter +=`<div class="product">
        <div class="item-image" >
         <img src="${product.image}" alt="">
        </div>
        <div class="item-details">
            <p class="item-title">${product.name}</p>
                <div class="item-price">
                    <span > <strike style="color: rgba(128, 128, 128, 0.566);">${product.strikeprice}</strike>${product.price}</span>
                </div>
                <button type="button" class="add-to-cart">${product.price}</button>
            </div>
    </div>`;
    })
    document.querySelector(".products").innerHTML=clutter;
}

addProduct();