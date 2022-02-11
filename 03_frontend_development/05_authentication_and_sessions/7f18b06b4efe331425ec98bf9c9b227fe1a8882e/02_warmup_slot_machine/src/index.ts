// Code here
export function slotMachine(symbolsTuple: [unknown, unknown, unknown]): boolean {
  if (symbolsTuple[0] === symbolsTuple[1] && symbolsTuple[1] === symbolsTuple[2]) {
    return true;
  } else {
    return false;
  }
}
