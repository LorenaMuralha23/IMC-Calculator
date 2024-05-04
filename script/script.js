const calculateBtn = document.getElementById("calculate-btn");
const weightInput = document.getElementById("weight-input");
const heightInput = document.getElementById("height-input");
const outputContainer = document.querySelector("#output-container");

function cleanInputString(str) {
  const regex = /[^0-9.]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  // Check for empty string, negative values, and scientific notation
  const regex = /^\s*$|^-|[+-\s]e\d+/i;
  return regex.test(str);
}

function calculateBMI() {
  let height = cleanInputString(heightInput.value);
  let weight = cleanInputString(weightInput.value);

  if (isInvalidInput(weight) || isInvalidInput(height)) {
    alert("Use numbers, please");
    return null;
  } else {
    height = height / 100;
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
  }
}

function classifyBMI(bmi) {
  if (bmi < 18.5) {
    return 'You are <span style="color: #34d2eb;  font-weight: bold;">underweight</span>';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'You are in a <span style="color: #37eb34;  font-weight: bold;">normal weight</span>';
  } else if (bmi >= 25 && bmi < 29.9) {
    return 'You are <span style="color: #ebe234;  font-weight: bold;">overweight</span>';
  } else if (bmi >= 30 && bmi < 34.9) {
    return 'You are <span style="color: #de1b1b;  font-weight: bold;">obese (class i)</span>';
  } else if (bmi >= 35 && bmi < 39.9) {
    return 'You are <span style="color: #de1b1b;  font-weight: bold;">obese (class ii)</span>';
  } else {
    return 'You are <span style="color: #de1b1b;  font-weight: bold;">obese (class iii)</span>';
  }
}

function showResult(bmiResult) {
  const result = classifyBMI(bmiResult);
  const HTMLtext = `
  <h1 id="output-title">Your BMI is ${bmiResult}</h1>
  <p id="result-text">${result}.</p>
  <img src="resourses/imgs/bmiTable.png" alt="BMI table result">
  `;
  outputContainer.innerHTML = HTMLtext;
  outputContainer.classList.remove("hide");
  outputContainer.classList.add("show");
}

let bmiResult;
calculateBtn.addEventListener("click", () => {
  bmiResult = calculateBMI();
  showResult(bmiResult);
});
