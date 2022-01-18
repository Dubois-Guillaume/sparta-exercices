function mapLoop(array, callback) {
  // Code the function here.
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
}

// Do not remove the following lines, it is for tests
module.exports = mapLoop;
