let btnCalculate = document.querySelector("[data-calculate]");
let display = document.querySelector("[data-display]");
btnCalculate.addEventListener("click", () => calculateBMI(display));

let height = document.querySelector("[data-height]");

let weight = document.querySelector("[data-weight]");

console.log(weight.value, height.value);

let bmi = weight.value;
console.log(bmi).value;
