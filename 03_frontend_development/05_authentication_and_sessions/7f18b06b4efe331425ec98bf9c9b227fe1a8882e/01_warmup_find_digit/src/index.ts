// Code here
export function findDigit(numberArray: number[], digits: number): number[] {
  const stringDigit = digits.toString();
  const result = numberArray.filter((number) => {
    const stringNumber = number.toString();
    if (stringNumber.includes(stringDigit)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result);
  return result;
}

const anArrayOfNumbers: number[] = [1, 92, 824];
findDigit(anArrayOfNumbers, 1);
