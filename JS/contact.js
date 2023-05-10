var messageBtn = document.getElementById("send-message");
var userName = document.getElementById("username");
var email = document.getElementById("email");
var PhoneNumber = document.getElementById("phone");
var subject = document.getElementById("subject");
var message = document.getElementById("message");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var subjectError = document.getElementById("subjectError");
var messageError = document.getElementById("messageError");

var emailRegex = /\w+@\w+\.com/;

var phoneRegex = /(010|011|012|015)[0-9]{8}/;

// console.log(messageError);

messageBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validateSubject() &&
    validateMessage()
  ) {
    goHome();
  } else {
    validateName();
    validateEmail();
    validatePhone();
    validateSubject();
    validateMessage();
  }
});

function validateName() {
  if (userName.value.length < 5 || userName.value.length == 0) {
    nameError.innerHTML = "Please Enter a Valid Username";
    nameError.style.display = "block";
    nameError.style.color = "red";
  } else {
    nameError.innerHTML = "";
    nameError.style.display = "none";
    return true;
  }
}

function validateEmail() {
  if (!email.value.match(emailRegex)) {
    emailError.innerHTML = "Please Enter a Valid Email Address";
    emailError.style.display = "block";
    emailError.style.color = "red";
  } else {
    emailError.innerHTML = "";
    emailError.style.display = "none";
    return true;
  }
}

function validatePhone() {
  if (!PhoneNumber.value.match(phoneRegex)) {
    phoneError.innerHTML = "Please Enter a Valid Phone Number";
    phoneError.style.display = "block";
    phoneError.style.color = "red";
  } else {
    phoneError.innerHTML = "";
    phoneError.style.display = "none";
    return true;
  }
}

function validateSubject() {
  if (subject.value.length < 5 || subject.value.length == 0) {
    subjectError.innerHTML = "Please Enter a Subject For the message.";
    subjectError.style.display = "block";
    subjectError.style.color = "red";
  } else {
    subjectError.innerHTML = "";
    subjectError.style.display = "none";
    return true;
  }
}

function validateMessage() {
  if (message.value.length < 5 || message.value.length == 0) {
    messageError.innerHTML = "Please Enter a your Message.";
    messageError.style.display = "block";
    messageError.style.color = "red";
  } else {
    messageError.innerHTML = "";
    messageError.style.display = "none";
    return true;
  }
}

function goHome() {
  window.open("index.html", "_self");
}


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