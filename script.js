const animationOne = document.querySelector(".animation-one");
const animationTwo = document.querySelector(".animation-two");
const clik1 = document.querySelector(".clik-1");
const clik2 = document.querySelector(".clik-2");

// TODO: use card class for border and box shadow so that i dont have to say animateOne/animateTwo, its confusing that way
// TODO: create constant variables for the color/style values
// see if i can remove the repeatation of "style" from everything/anything
// change font family when switching cards? 🤔
// see if i can move some mouseover/mouseout properties in css, so that the code here is less

const bgImage = document.body;

const clikOne = () => {
  animationOne.style.display = "none";
  animationTwo.style.display = "flex";
  bgImage.style.backgroundImage = "url('./assets/images/3.jpg')";
};

const clikTwo = () => {
  animationOne.style.display = "flex";
  animationTwo.style.display = "none";
  bgImage.style.backgroundImage = "url('./assets/images/1.jpg')";
};

clik1.addEventListener("click", () => {
  clikOne();
  changeImage();
});

clik2.addEventListener("click", () => {
  clikTwo();
  changeImage();
});

var rotator = document.body;
var imageDir = "./assets/images/";
var delayInSeconds = 2;

var images = ["1.jpg", "2.png", "3.jpg", "4.jpg", "5.jpg", "h-1.png", "h-2.png"];

var num = 0;
var changeImage = function () {
  var len = images.length;
  rotator.style.backgroundImage = `url(${imageDir + images[num++]})`;
  if (num == len) {
    num = 0;
  }
};

// //TODO: write something other than 'clik me', kus doesnt like it
// var slideimages = new Array();
// slideimages[0] = new Image();
// slideimages[0].src = "1.jpg";
// function start() {
//   var rotator = document.body;
//   var imageDir = "./assets/images/";
//   var delayInSeconds = 2;

//   var images = ["1.jpg", "2.png", "3.jpg", "4.jpg", "5.jpg"];

//   var num = 0;
//   var changeImage = function () {
//     var len = images.length;
//     rotator.style.backgroundImage = `url(${imageDir + images[num++]})`;
//     if (num == len) {
//       num = 0;
//     }
//   };
//   setInterval(changeImage, delayInSeconds * 1000);
// }
// window.onload = function () {
//   start();
// };
