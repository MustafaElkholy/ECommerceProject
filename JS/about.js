cartDiv = document.getElementById("cart");
var numOfProducts;
console.log(document.cookie);
if(document.cookie == "")
{
    cartDiv.innerText = "0";
    numOfProducts = 0;
}
else
{
    
    cartDiv.innerText = ""+(document.cookie).split("=")[1]+"";
    numOfProducts = parseInt((document.cookie).split("=")[1]);

}