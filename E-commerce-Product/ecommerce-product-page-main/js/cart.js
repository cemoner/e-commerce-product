var cartView = document.querySelector("#cartView");

var trash = document.querySelector("#trash");
var cart = document.querySelector("#cart");
var empty = document.querySelector("#empty");
var items = document.querySelector("#items");
var finalPrice = document.querySelector("#cost span");
var amountHTML = document.querySelector("#cost");
var checkOut = document.querySelector("#checkOut");
var amount = document.querySelector("#amount");
var addToCart = document.querySelector("#addingToCart");
var cartSymbol = document.querySelector("#cartSymbol");

let x = 0;

function viewCart() {
  //open

  if (x == 0) {
    cartView.setAttribute("style", "display:block");
    x = 1;
    console.log(x);
    return 0;
  }
  // close
  if (x == 1) {
    cartView.setAttribute("style", "display:none");
    x = 0;
    console.log(x);
    return 0;
  }
}

function emptyCart() {
  items.setAttribute("style", "display:none");
  checkOut.setAttribute("style", "display:none");
  empty.setAttribute("style", "display:block");
  cartSymbol.setAttribute("style", "display:none");
}

function fillCart() {
  items.setAttribute("style", "display:flex");
  checkOut.setAttribute("style", "display:block");
  empty.setAttribute("style", "display:none");
  cartSymbol.setAttribute("style", "display:block");
}

function setCartValues() {
  let amountValue = parseInt(amount.textContent);
  console.log("setting cart values");
  console.log(amountValue);
  if (amountValue > 0) {
    var amountString = "125 * " + amountValue;
    amountHTML.innerHTML = amountString;
    var price = 125 * amountValue;
    var span = document.createElement("span");
    var textNode = document.createTextNode(" = " + price + ".00");
    span.appendChild(textNode);
    amountHTML.appendChild(span);
    cartSymbol.textContent = amountValue;
    fillCart();
  }
}

cart.addEventListener("click", function () {
  viewCart();
});

addToCart.addEventListener("click", function () {
  setCartValues();
});

trash.addEventListener("click", function () {
  emptyCart();
  viewCart();
});
