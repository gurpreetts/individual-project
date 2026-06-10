function add() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (n1 + n2);
}

function subtract() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (n1 - n2);
}

function multiply() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (n1 * n2);
}

function divide() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (n1 / n2);
}

function checkBMI() {
  let w = parseFloat(document.getElementById("weight").value);
  let h = parseFloat(document.getElementById("height").value) / 100;
  let bmi = w / (h * h);
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";
  document.getElementById("bmiResult").innerText = "BMI: " + bmi.toFixed(2) + " (" + category + ")";
}

function calculateTax() {
  let income = parseFloat(document.getElementById("income").value);
  let tax = 0;
  if (income <= 10000) tax = 0;
  else if (income <= 20000) tax = income * 0.1;
  else if (income <= 50000) tax = income * 0.2;
  else tax = income * 0.3;
  document.getElementById("taxResult").innerText = "Tax: RM " + tax.toFixed(2);
}

function cmToM() {
  let val = parseFloat(document.getElementById("value").value);
  document.getElementById("convertResult").innerText = val / 100 + " m";
}

function mToCm() {
  let val = parseFloat(document.getElementById("value").value);
  document.getElementById("convertResult").innerText = val * 100 + " cm";
}

function mToKm() {
  let val = parseFloat(document.getElementById("value").value);
  document.getElementById("convertResult").innerText = val / 1000 + " km";
}

function kmToM() {
  let val = parseFloat(document.getElementById("value").value);
  document.getElementById("convertResult").innerText = val * 1000 + " m";
}
