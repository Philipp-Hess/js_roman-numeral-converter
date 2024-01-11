document.getElementById("convert-btn").addEventListener("click", () => {
  const inputNumber = parseInt(document.getElementById("number").value);
  const outputElement = document.getElementById("output");

  if (inputNumber === -1) {
    outputElement.textContent =
      "Please enter a number greater than or equal to 1";
  } else if (isNaN(inputNumber) || inputNumber <= 0) {
    outputElement.textContent = "Please enter a valid number";
  } else if (inputNumber >= 4000) {
    outputElement.textContent =
      "Please enter a number less than or equal to 3999";
  } else {
    outputElement.textContent = convertToRoman(inputNumber);
  }
});

function convertToRoman(num) {
  const romanNumerals = [
    { numeral: "M", value: 1000 },
    { numeral: "CM", value: 900 },
    { numeral: "D", value: 500 },
    { numeral: "CD", value: 400 },
    { numeral: "C", value: 100 },
    { numeral: "XC", value: 90 },
    { numeral: "L", value: 50 },
    { numeral: "XL", value: 40 },
    { numeral: "X", value: 10 },
    { numeral: "IX", value: 9 },
    { numeral: "V", value: 5 },
    { numeral: "IV", value: 4 },
    { numeral: "I", value: 1 },
  ];

  let result = "";

  for (const pair of romanNumerals) {
    while (num >= pair.value) {
      result += pair.numeral;
      num -= pair.value;
    }
  }

  return result;
}
