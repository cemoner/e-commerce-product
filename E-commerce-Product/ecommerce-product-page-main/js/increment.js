var plus = document.querySelector("#quantity #plus");
var minus = document.querySelector("#quantity #minus");
var amount = document.querySelector("#quantity #amount");

number = amount.textContent;
function increment() {
  number++;
  amount.textContent = number;
}

function decrement() {
  if (number > 0) {
    number--;
    amount.textContent = number;
  }
}

plus.addEventListener("click", function () {
  increment();
});

minus.addEventListener("click", function () {
  decrement();
});
