

function showCart(){
    document.querySelector(".shopping-icon").addEventListener("click",function(){
        document.querySelector(".atc-product").style.display="block";
    
        var clutter="";
        cart.forEach(function(product,index)
        {
           clutter += `<div class="atc-product">
                    <div class="atc-item-image" >
                     <img src="${product.image}" alt="">
                    </div>
                    <div class="atc-item-details">
                        <p class="atc-item-title">${product.name}</p>
                            <div class="atc-item-price">
                                <span > <strike style="color: rgba(128, 128, 128, 0.566);">${strikeprice.name}</strike>${product.price}</span>
                            </div>
                            <button  type="button" id="atc-add-to-cart" class="atc-add">${product.price}</button>
                        </div>`;
        }
      )
    document.querySelector(".atc-product").innerHTML=clutter;
    });
}

showCart()

document.getElementById('shopping-cart').addEventListener('click', function() {
    document.getElementById('cart-popup').classList.toggle('open');
    
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('cart-popup').classList.remove('open');
});


