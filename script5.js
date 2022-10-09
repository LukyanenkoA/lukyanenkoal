function PriceOfOrder() {
    let f1 = document.getElementsByName("priceOfOne");
    let f2 = document.getElementsByName("quantity");
    let r = document.getElementById("result");
    r.innerText = f1[0].value * f2[0].value;
}
window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("CalculateButton");
    b.addEventListener("click", PriceOfOrder);
},false);