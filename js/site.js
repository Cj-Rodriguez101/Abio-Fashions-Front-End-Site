


function addtoCart(){
    let price= document.getElementById('itemPrice').textContent;
let qty= document.getElementById('itemQty').textContent;
let Name= document.getElementById('itemName').textContent;
let imgSrc=document.getElementById("itemImage").src
if(Name =="" || Name==undefined)
{
    alert("Please Select Item");
    return false;
}

var cartItem = {
    id:1,
    item: Name,
    price: parseFloat(price),
    qty: parseInt(qty),
    imgSrc:imgSrc
};

var jsonStr = JSON.stringify( cartItem );
sessionStorage.setItem( "cartItem", jsonStr );
   
    window.location.href = "cart.html";
   return false;
}
{/* <td><div class="cart_info">
                    <img src="images/Ankara 1.jpg" alt="">
                    <div class="picture_items">
                      <p>Confam Traditional Wear</p>
                      <small>Price: $50.00</small>
                      <br>
                      <a href="#">Remove</a>
                    </div>
                  </div></td>
                  <td><input type="number" name="" value="1" class="qty"></td>
                  <td>$50.00</td> */}
function addItem(){
    let table = document.getElementById("cartTable");

    // now the cart is {"item":"Product 1","price":35.50,"qty":2}
    var cartValue = sessionStorage.getItem( "cartItem" );
    if(cartValue ==null){
        return;
    }
    var cartObj = JSON.parse( cartValue );
   

var cart=sessionStorage.getItem( "cart" );
if(cartObj !==null){
   
    if(cart == null){
       
        let cartItems = [];
        cartItems.push(cartObj);
        var jsonStrCartItems = JSON.stringify( cartItems );
        sessionStorage.setItem( "cart", jsonStrCartItems );
       
    }
    else 
    {
       
        var previousCartObj = JSON.parse(cart);
        if(!previousCartObj.length){
            let cartItems = [];
            cartItems.push(cartObj);
            var jsonStrCartItems = JSON.stringify( cartItems );
            sessionStorage.setItem( "cart", jsonStrCartItems );
        }else{
            var lastItemId = previousCartObj[previousCartObj.length-1].id;
            cartObj.id=lastItemId+1;
            previousCartObj.push(cartObj);
            var jsonCartItems = JSON.stringify( previousCartObj );
            sessionStorage.setItem( "cart", jsonCartItems );

        }
      
    }
   

}

cartObj=null;
sessionStorage.setItem( "cartItem",null );

var newCart=sessionStorage.getItem( "cart" ); 
var newCartObj = JSON.parse( newCart );
var subTotal=0;
for(let i =0; i<newCartObj.length; i++){
subTotal +=newCartObj[i].price;
     //Insert into table
     newCartObj[i].id=i+1;
     var row = table.insertRow(1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     cell1.innerHTML = "<div class=\"cart_info\"> <img src=\""+newCartObj[i].imgSrc+"\" alt=\"\"><div class=\"picture_items\"><p>"+newCartObj[i].item+"</p><small>Price: $"+newCartObj[i].price+"</small><br><button onclick=\"Remove("+newCartObj[i].id+")\">Remove</a></div></div>";
     cell2.innerHTML = "<input type=\"number\" name=\"\" value="+newCartObj[i].qty+" class=\"qty\">";
     cell3.innerHTML = "$"+newCartObj[i].price;
}
let total = subTotal+35;
document.getElementById("subTotalId").textContent="$"+subTotal;
document.getElementById("totalId").textContent="$"+total;
if(!newCartObj.length){
    
   document.getElementById('totalSecId').style.display = 'none';

}else{
    // document.getElementById('totalSecId').style.display = 'block';
}
    return false;
}
function Remove(itemId){
    let id = parseInt(itemId);
    let newCar=sessionStorage.getItem( "cart" ); 
let newCartOb = JSON.parse( newCar );
newCartOb.splice(id-1,1);
let jsonCartItem = JSON.stringify( newCartOb );
sessionStorage.setItem( "cart", jsonCartItem );
console.log(newCartOb);
window.location.reload();
  
}

