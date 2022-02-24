export function humanPercentage(percentages: number[]): string[] {
  const percentageHuman = percentages.map((percentage) => Math.round(percentage * 100) / 100);
  const stringNumbers = percentageHuman.map((numbers) => numbers.toString().substring(2));
  return stringNumbers.map((number) => {
    if (number.length === 1) {
      return number + "0%";
    } else {
      return number + "%";
    }
  });
}
