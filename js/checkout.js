document.getElementById("cart").addEventListener("click", function () {
    document.querySelector(".checkout").style.display = "flex";
    document.querySelector(".order-confirmation").style.display = "none";
})

document.querySelector('.checkout .checkout-top span ').onclick = () => {
    document.querySelector(".checkout").style.display = "none";
    document.querySelector(".order-confirmation").style.display = "none";
}

document.getElementById("order-now-button").addEventListener("click", function () {
    document.querySelector(".order-confirmation").style.display = "flex";
})