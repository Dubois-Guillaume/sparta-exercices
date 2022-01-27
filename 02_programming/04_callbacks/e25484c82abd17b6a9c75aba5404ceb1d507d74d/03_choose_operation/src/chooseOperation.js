function addition(num1, num2) {
  // Code here
  const makeAddition = num1 + num2;
  return makeAddition;
}

function substraction(num1, num2) {
  // Code here
  const makeSubstraction = num1 - num2;
  return makeSubstraction;
}

function multiplication(num1, num2) {
  // Code here
  const makeMultiplication = num1 * num2;
  return makeMultiplication;
}

function division(num1, num2) {
  // Code here
  const makeDivision = num1 / num2;
  return makeDivision;
}

function chooseOperation(num1, num2, operator) {
  // Code here
  let result = "valeur initiale";
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    result = operator(num1, num2);
  } else {
    throw new Error("Number 1 and 2 were not integer!");
  }
  return result;
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
