// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...names: ParamRest): void {
  // Code your function here
  return names.forEach((name) => console.log(`Welcome to ${name}`));
}
