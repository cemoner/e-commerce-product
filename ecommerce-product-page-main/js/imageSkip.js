var imageSources = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

var m = 0;

// mobile image skip

var imageElement = document.querySelector("#part1 #bigPicture");
var previous = document.querySelector("#iconPrevious");
var next = document.querySelector("#iconNext");
var part1 = document.querySelector("#grid #part1");
var backgroundOrnamentalD = document.querySelector("#backgroundOrnamental");
var grid = document.querySelector("#grid");

var a = imageElement.src;
var indexHolder;
console.log(a);

function isEqual(n) {
  var holder = imageSources[n];
  var indexChecked = imageSources[n].length - 1;
  var indexCurrent = a.length - 1;
  for (; indexChecked >= 0; indexChecked--, indexCurrent--) {
    if (a[indexCurrent] != holder[indexChecked]) {
      return false;
    }
  }
  return true;
}

for (let m = 0; m <= imageSources.length - 1; m++) {
  if (isEqual(m)) {
    indexHolder = m;
    break;
  }
}

function previousPicture(element) {
  if (indexHolder > 0) {
    indexHolder--;
  } else {
    indexHolder = 3;
  }
  element.src = imageSources[indexHolder];
}

function nextPicture(element) {
  if (indexHolder < 3) {
    indexHolder++;
  } else {
    indexHolder = 0;
  }
  element.src = imageSources[indexHolder];
}

previous.addEventListener("click", function () {
  previousPicture(imageElement);
});

next.addEventListener("click", function () {
  nextPicture(imageElement);
});

// lightbox
var clone = part1.cloneNode(true);
var originals = document.querySelectorAll(".originals");

function openLightBox() {
  clone.classList.add("active");
  backgroundOrnamentalD.classList.remove("closed");
  clone.setAttribute("style", "position:absolute");
  grid.appendChild(clone);
  var clones = document.querySelectorAll(".active .originals");
  var previousClone = document.querySelector(".active #iconPrevious");
  var nextClone = document.querySelector(".active #iconNext");
  var imageElementClone = document.querySelector(".active #bigPicture");
  previousClone.setAttribute("style", "display:flex");
  nextClone.setAttribute("style", "display:flex");
  if (m == 0) {
    previousClone.addEventListener("click", function () {
      previousPicture(imageElementClone);
    });

    nextClone.addEventListener("click", function () {
      nextPicture(imageElementClone);
    });

    for (let i = 0; i <= clones.length - 1; i++) {
      clones[i].addEventListener("click", function () {
        imageElementClone.src = imageSources[i];
        indexHolder = i;
      });
    }
    m++;
  }
}

for (let i = 0; i <= originals.length - 1; i++) {
  originals[i].addEventListener("click", function () {
    openLightBox();
  });
}

var myWindow = window.matchMedia("(max-width:769px)");
function closeLightBox() {
  var imageElementClone = document.querySelector(".active #bigPicture");
  imageElementClone.src = imageSources[0];
  indexHolder = 0;
  clone.classList.remove("active");
  backgroundOrnamentalD.classList.add("closed");
  grid.removeChild(clone);
}

backgroundOrnamentalD.addEventListener("click", function () {
  if (!myWindow.matches) {
    closeLightBox();
  }
});
