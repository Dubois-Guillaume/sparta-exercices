const receivedObject = {
  a: "somestring",
  b: 42,
};

type ReceivedObject = {
  a: string;
  b: number;
};

function transformObject(receivedObject: ReceivedObject): (string | number)[] {
  const returnArray = [];
  returnArray.push(receivedObject.a);
  returnArray.push(receivedObject.b);
  return returnArray;
}

console.log(transformObject(receivedObject));
// Leave the line below for tests to work properly.
export { transformObject };
