var a = "selectImg"; var b = "itemName";
var a2 = "selectImg2";var b2 = "itemName2";
var a3 = "selectImg3";var b3 = "itemName3";
var a4 = "selectImg4";var b4 = "itemName4";
var a5 = "selectImg5";var b5 = "itemName5";
var a6 = "selectImg6";var b6 = "itemName6";
 
function MyselectImage(srce , name){
    let ImageSrc=document.getElementById(srce).src;
    let Name= document.getElementById(name).textContent;


//function selectImage(){
    
//let ImageSrc=document.getElementById("selectImg").src;
//let Name= document.getElementById('itemName').textContent;

var selected = {
    //imageSrc:ImageSrc,
    //item: Name
    imageSrc:ImageSrc,
    item: Name
   
};
return selected; 
   
}
function selectImage(){
var jsonStr = JSON.stringify( MyselectImage(a,b) );
sessionStorage.setItem( "selected", jsonStr );
   
    window.location.href = "selected.html";
    
  return false;
}
function selectImage2(){
    var jsonStr = JSON.stringify( MyselectImage(a2,b2) );
    sessionStorage.setItem( "selected", jsonStr );
       
        window.location.href = "selected.html";
        
      return false;
    }
    function selectImage3(){
        var jsonStr = JSON.stringify( MyselectImage(a3,b3) );
        sessionStorage.setItem( "selected", jsonStr );
           
            window.location.href = "selected.html";
            
          return false;
        }
        function selectImage4(){
          var jsonStr = JSON.stringify( MyselectImage(a4,b4) );
          sessionStorage.setItem( "selected", jsonStr );
             
              window.location.href = "selected.html";
              
            return false;
          }
          function selectImage5(){
            var jsonStr = JSON.stringify( MyselectImage(a5, b5) );
            sessionStorage.setItem( "selected", jsonStr );
               
                window.location.href = "selected.html";
                
              return false;
            }
            function selectImage6(){
              var jsonStr = JSON.stringify( MyselectImage(a6,b6) );
              sessionStorage.setItem( "selected", jsonStr );
                 
                  window.location.href = "selected.html";
                  
                return false;
              }

function addImage(){
    
    let Image = document.getElementById("itemImag");
    let Name = document.getElementById("itemName");
    let small1 = document.getElementById("itemImagSm1");
    let small2 = document.getElementById("itemImagSm2");
    let small3 = document.getElementById("itemImagSm3");
    // now the cart is {"item":"Product 1","price":35.50,"qty":2}
    var cartValue = sessionStorage.getItem( "selected" );
    var cartObj = JSON.parse( cartValue );
    console.log(cartObj);
    console.log(cartObj.item);

    var image = Image;
    var name = Name;
    

    
    image.innerHTML = "<img id = \"itemImage\" src=\""+cartObj.imageSrc+"\" alt=\"\">";
    name.innerHTML = "<p>"+cartObj.item+"</p>";
    small1.innerHTML = "<img id = \"itemImage\" src=\""+cartObj.imageSrc+"\" alt=\"\">"+" <img id = \"itemImage\" src=\""+cartObj.imageSrc+"\" alt=\"\">" ;
    small2.innerHTML = "<img id = \"itemImage\" src=\""+cartObj.imageSrc+"\" alt=\"\">";
    small3.innerHTML = "<img id = \"itemImage\" src=\""+cartObj.imageSrc+"\" alt=\"\">";


    return false;
}
