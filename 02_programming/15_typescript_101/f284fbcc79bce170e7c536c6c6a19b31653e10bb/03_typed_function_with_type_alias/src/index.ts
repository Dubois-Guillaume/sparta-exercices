type MyTuple = [string, number];

function handleTuple(tupleArray: MyTuple): void {
  // Code the function here.
  if (typeof tupleArray[0] === "string" && typeof tupleArray[1] === "number") {
    console.log(`${tupleArray[0]} is a string`);
    console.log(`${tupleArray[1]} is a number`);
  }
}

// handleTuple(["foo", 1]);
// Leave the line below for tests to work properly.
export { handleTuple };
