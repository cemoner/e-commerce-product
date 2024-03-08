var hamburgerMenu = document.querySelector("#hamburgerMenu");
var mobileUl = document.querySelector("#mobileUl");
var backgroundOrnamentalD = document.querySelector("#backgroundOrnamental");
var imageElement = document.querySelector("#part1 #bigPicture");

function close() {
  hamburgerMenu.src = "images/download.png";
  hamburgerMenu.classList.remove("opened");
  mobileUl.classList.add("closed");
  backgroundOrnamentalD.classList.add("closed");
}

function open() {
  hamburgerMenu.src = "images/close.png";
  hamburgerMenu.classList.add("opened");
  mobileUl.classList.remove("closed");
  backgroundOrnamentalD.classList.remove("closed");
}

function mobileMenu() {
  if (hamburgerMenu.classList.contains("opened")) {
    close();
  } else {
    open();
  }
}

hamburgerMenu.addEventListener("click", function () {
  mobileMenu();
});

var myWindow = window.matchMedia("(max-width:769px)");
var myWindow2 = window.matchMedia("(min-width:769px)");
function closeMenu() {
  if (!myWindow.matches) {
    if (hamburgerMenu.classList.contains("opened")) {
      close();
      imageElement.src = "images/image-product-1.jpg";
    }
  }
}
var grid = document.querySelector("#grid");
function closeLightBox() {
  var clone = document.querySelector(".active");
  if (clone.classList.contains("active")) {
    backgroundOrnamentalD.classList.add("closed");
    clone.classList.remove("active");
    grid.removeChild(document.querySelector(".active"));
    imageElement.src = "images/image-product-1.jpg";
  }
}
myWindow.addListener(function () {
  closeMenu();
});
myWindow2.addListener(function () {
  closeLightBox();
});
