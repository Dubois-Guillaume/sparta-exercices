// Copy your function `capitalize` from the first exercise

export function capitalize(word: string): string {
  // Code your function here
  const firstLetter = word.charAt(0).toUpperCase();
  const otherLetter = word.slice(1, word.length);
  return `${firstLetter}${otherLetter}`;
}
