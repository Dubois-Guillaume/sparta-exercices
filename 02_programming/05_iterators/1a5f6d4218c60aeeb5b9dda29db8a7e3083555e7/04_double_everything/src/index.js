function multiply(number) {
  if (number === 0){
    return 0;
  }else {
    const operator = number * 2;
    return operator;
  }
}

function double(numbers) {
  const result = numbers.forEach(multiply);
  console.log(result);
  return result;
}

// Do not remove the following line, it is for tests
module.exports = double;
