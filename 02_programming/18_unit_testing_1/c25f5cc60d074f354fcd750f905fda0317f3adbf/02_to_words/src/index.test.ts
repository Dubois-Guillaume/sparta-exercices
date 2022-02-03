import { toWords } from "./index";

test("toWord should return a list of word", () => {
  expect.assertions(2);

  expect(toWords("Hey this should become a list")).toStrictEqual(["Hey", "this", "should", "become", "a", "list"]);
  expect(toWords("It ! should , avoid : special . caractere")).toStrictEqual([
    "It",
    "should",
    "avoid",
    "special",
    "caractere",
  ]);
});
