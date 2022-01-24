const arraysIntoObjects = (keysArray, valuesArray) => {
  /// Code your function here
  if (keysArray.length >= 1 && valuesArray.length >= 1) {
    return Object.assign(...keysArray.map((k, v) => ({ [k]: valuesArray[v] })));
  } else {
    return {};
  }
};

// Don't change this line for tests to run properly
export default arraysIntoObjects;
