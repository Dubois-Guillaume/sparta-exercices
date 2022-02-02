const receivedObject = {
  productName: "somestring",
  quantity: 42,
};

type Product = {
  productName: string;
  quantity: number;
};

function productTransformer(receivedObject: Product): [string, string | number][] {
  return Object.entries(receivedObject);
}

console.log(productTransformer(receivedObject));
// Leave the line below for tests to work properly.
export { productTransformer };
