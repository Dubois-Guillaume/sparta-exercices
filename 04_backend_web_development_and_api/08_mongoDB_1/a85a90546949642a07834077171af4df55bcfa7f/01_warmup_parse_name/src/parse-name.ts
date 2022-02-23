type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const splitedName = name.split(" ");
  const person: Person = {};
  person.firstName = splitedName[0];
  person.lastName = splitedName[1];
  return person;
}
