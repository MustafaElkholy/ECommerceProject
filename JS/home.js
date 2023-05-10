var images = [
  "Images/Slider/1.webp",
  "Images/Slider/2.webp",
  "Images/Slider/3.webp",
  "Images/Slider/4.webp",
  "Images/Slider/5.webp",
];

var i = 0;
function nextShow() {
  i++;
  if (i >= images.length) i = 0;
  myimg.src = images[i];
}

function prevShow() {
  i--;
  if (i < 0) i = images.length - 1;
  myimg.src = images[i];
}

function onLoad() {
  t = setTimeout("nextShow()", 1000);
}

/////////////////////////////////////////////////////////////////

var toTop = document.querySelector(".to-top");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000 ? toTop.classList.add("active") : toTop.classList.remove("active");
};

toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};