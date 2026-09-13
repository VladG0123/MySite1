let count = 0;
let total = 0;

document.querySelectorAll(".add-to-cart").forEach(function (button) {
  button.addEventListener("click", function () {
    const price = Number(button.dataset.price);

    count = count + 1;
    total = total + price;

    document.getElementById("cart-count").textContent = count;
    document.getElementById("cart-total").textContent = total;
  });
});