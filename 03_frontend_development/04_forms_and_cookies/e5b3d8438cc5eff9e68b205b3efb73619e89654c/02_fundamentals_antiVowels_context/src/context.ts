import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string): string => {
  // Code your function for context here
  const vowelFilter = sentenceSplitter(sentence);
  // console.log(vowelFilter);
  const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  const result = vowelFilter.filter((word) => {
    if (vowels.includes(word.charAt(0))) {
      return false;
    } else {
      return true;
    }
  });
  console.log("result", result);
  return sentenceJoiner(result);
};
