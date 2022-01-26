function addition(num1, num2) {
  // Code here
  const Addition = num1 + num2;
  return Addition;
}

function substraction(num1, num2) {
  // Code here
  const Substraction = num1 - num2;
  return Substraction;
}

function multiplication(num1, num2) {
  // Code here
  const Multiplication = num1 * num2;
  return Multiplication;
}

function division(num1, num2) {
  // Code here
  const Division = num1 / num2;
  return Division;
}

function chooseOperation(num1, num2, operator) {
  // Code here
  let numberOne = num1;
  let numberTwo = num2;
  let result;
  if (numberOne === Number && numberTwo === Number) {
    if (operator === "addition") {
      result = addition(num1, num2);
    } else if (operator === "substraction") {
      result = substraction(num1, num2);
    } else if (operator === "multiplication") {
      result = multiplication(num1, num2);
    } else if (operator === "division") {
      result = division(num1, num2);
    }
    return result;
  } else if (numberOne !== Number || numberTwo !== Number) {
    throw new Error("Number 1 and 2 were not integer!");
  }
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
