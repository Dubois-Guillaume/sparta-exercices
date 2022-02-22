export function sumTwoSmallestNumbers(numberArray: number[]): number {
  numberArray.sort((a, b) => a - b);
  return numberArray[0] + numberArray[1];
}
