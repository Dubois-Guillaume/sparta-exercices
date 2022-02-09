import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  let str = sentence;
  // console.log(6, str);
  const words = str.split(" ");
  // console.log(8, words);
  const toCapitalize = words.map((word) => capitalize(word));
  // console.log("boucle", words);
  const newString = toCapitalize.join(" ");
  str = newString;
  return str;
}
