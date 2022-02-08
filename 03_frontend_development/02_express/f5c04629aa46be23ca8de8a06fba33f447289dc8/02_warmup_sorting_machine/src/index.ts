// Code here
function sortingMachine(revenues: number[], upOrDown: boolean): number[] {
  if (upOrDown === true) {
    revenues.sort((a, b) => a - b);
  } else {
    revenues.sort((a, b) => b - a);
  }
  return revenues;
}

export { sortingMachine };
