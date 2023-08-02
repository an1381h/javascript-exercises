//Fahrenheit to Celsius formula: 5/9(temp - 32)
const convertToCelsius = function(temp) {
  return parseFloat((5/9 * (temp - 32)).toFixed(1));
};

//Celsius to Fahrenheit formual: (temp * 9/5) + 32
const convertToFahrenheit = function(temp) {
  return parseFloat(((temp * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
