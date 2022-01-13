function oddEven(number) {
  // Code the function here.
  let evenOdd = number % 2;
  if (Number.isInteger(number)){
    if (evenOdd !== 0){
      return `${number} is an odd number.`;
    } else {
      return `${number} is an even number.`;
    }
  } else {
    console.log(`${number} is not a number.`);
  }
}

// Do not remove last lines, it is for tests
module.exports = oddEven;
