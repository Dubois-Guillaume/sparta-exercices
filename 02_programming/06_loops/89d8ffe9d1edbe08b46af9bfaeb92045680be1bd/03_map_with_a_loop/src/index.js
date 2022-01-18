// const myVar = [1, 2, 3, 4];

function mapLoop(numbers, double) {
  // Code the function here.
  const newNumbers = [];

  for (const each of numbers) {
    newNumbers.push(double(each));
  }

  // console.log(newNumbers);

  return newNumbers;
}

// mapLoop(myVar, (x) => x * 2);
// Do not remove the following lines, it is for tests
module.exports = mapLoop;
