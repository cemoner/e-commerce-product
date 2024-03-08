const hoverContainer = document.querySelectorAll(".hoverContainer");
const desktopLi = document.querySelectorAll("#desktopUl li");

function hoverEffect(i, element) {
  element.setAttribute("style", "border-color:orange");
}
function reset(i, element) {
  element.setAttribute("style", "border-color:transparent");
}

for (let i = 0; i <= hoverContainer.length - 1; i++) {
  hoverContainer[i].addEventListener("mouseover", function () {
    hoverEffect(i, desktopLi[i]);
  });
  hoverContainer[i].addEventListener("mouseout", function () {
    reset(i, desktopLi[i]);
  });
}
