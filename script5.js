function calc() {
    let form = document.forms.calculator;
    let a = form.elements.price;
    let b = form.elements.count;
    let a0 = form.elements.price0;
    let b0 = form.elements.count0;
    let a1 = form.elements.price1;
    let b1 = form.elements.count1;
    let a2 = form.elements.price2;
    let b2 = form.elements.count2;
    let a3 = form.elements.price3;
    let b3 = form.elements.count3;
    let a4 = form.elements.price4;
    let b4 = form.elements.count4;
    let a5 = form.elements.price5;
    let b5 = form.elements.count5;
    let result = document.getElementById("result");
    let r = a.value * b.value + a0.value * b0.value + a1.value * b1.value + a2.value * b2.value + a3.value * b3.value + a4.value * b4.value + a5.value * b5.value;
    if(isNaN(r)) {
        result.innerHTML = "You entered something wrong";
    }
    else {
        result.innerHTML = "Total cost: " + r;
    }
}
window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("CalculateButton");
  b.addEventListener("click", calc);
});