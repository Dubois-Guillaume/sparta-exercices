export const sentenceSplitter = (sentence: string): string[] => {
  // Code your function sentenceSplitter here
  const sentenceArray: string[] = [];
  const words = sentence.split(" ");
  words.map((word) => sentenceArray.push(word));
  return sentenceArray;
};
