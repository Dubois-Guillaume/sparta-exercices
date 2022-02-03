import { greet } from "./index";

test("greet should return the right sentence", () => {
  expect.assertions(2);

  expect(greet("Francis")).toBe("Hello FRANCIS!");
  expect(greet()).toBe("Hello WORLD!");
});
