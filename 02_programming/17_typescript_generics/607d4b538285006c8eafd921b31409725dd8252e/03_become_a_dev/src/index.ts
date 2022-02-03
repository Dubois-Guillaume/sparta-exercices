type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
};

type Dev = Human & {
  knownLanguage: string;
};

function becomeADev(name: string, age: number): void {
  this.Human.name = name;
  this.human.age = age;
  this.Human.knowsDev = true;
  this.Dev.knownLanguage = "JavaScript";
  return;
}
// Leave the line below for tests to work properly.
export { becomeADev };
