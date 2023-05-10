filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";

  // console.log(c);
  // console.log("------------");
  for (i = 0; i < x.length; i++) {
    // console.log(x[i]);

    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      // console.log(x[i].className);
      AddClass(x[i], "show");
    }
  }
}

function AddClass(element, name) {
  var i, elementClassName, nameArr;
  elementClassName = element.className.split(" ");
  // console.log(elementClassName);
  // console.log(name);
  nameArr = name.split(" ");
  // console.log(arr2);
  for (i = 0; i < nameArr.length; i++) {
    if (elementClassName.indexOf(nameArr[i]) == -1) {
      // // not found
      // console.log(arr2[i]);
      // console.log(arr1.indexOf(arr2[i]));
      element.className += " " + nameArr[i];
    }
  }
}
// console.log("---------------");

function RemoveClass(element, name) {
  var i, elementClassName, nameArr;
  elementClassName = element.className.split(" ");
  nameArr = name.split(" ");
  for (i = 0; i < nameArr.length; i++) {
    while (elementClassName.indexOf(nameArr[i]) > -1) {
      elementClassName.splice(elementClassName.indexOf(nameArr[i]), 1);
    }
  }
  element.className = elementClassName.join(" ");
  // console.log(element); // removed elements
}
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

cartDiv = document.getElementById("cart");
var numOfProducts;
console.log(document.cookie);
if(document.cookie == "")
{
    cartDiv.innerText = "";
    numOfProducts = 0;
}
else
{
    
    cartDiv.innerText = ""+(document.cookie).split("=")[1]+"";
    numOfProducts = parseInt((document.cookie).split("=")[1]);

}
var cartShopping = document.querySelectorAll(".layer-content .fa-shopping-cart");
console.log(cartShopping);
cartShopping.forEach(element => {
    element.onclick = function()
    {
        numOfProducts++;
        document.cookie=`item=${numOfProducts};`
        cartDiv.innerText = (document.cookie).split("=")[1];
    }
});

