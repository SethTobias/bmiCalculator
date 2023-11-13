let height = document.querySelector("[data-height]");

let weight = document.querySelector("[data-weight]");

let btnCalculate = document.querySelector("[data-calculate]");
let display = document.querySelector("[data-display]");
btnCalculate.addEventListener("click", () => calculateBMI(display));

let calculateBMI = function () {
  let bmi = (weight.value / ((height / 100) ^ 2)).value;
  display = bmi;
};

console.log(calculateBMI);
