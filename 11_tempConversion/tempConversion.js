const convertToCelsius = function(farenheitDegree) {
  let celsiusResult = (farenheitDegree - 32) * 5/9;
  if (!Number.isInteger(celsiusResult)) {
    celsiusResult = roundedNumber(celsiusResult, 1);
  }
  return celsiusResult;
};

const convertToFahrenheit = function(celsiusDegree) {
  let farenheitResult = (celsiusDegree * 9/5) + 32;
    if (!Number.isInteger(farenheitResult)) {
    farenheitResult = roundedNumber(farenheitResult, 1);
  }
  return farenheitResult;
};

function roundedNumber(number, decimalDigits = 0){
  let multiplier = Math.pow(10, decimalDigits);
  let finalResult = Math.round(number * multiplier) / multiplier;
  return Number(finalResult.toFixed(decimalDigits));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
