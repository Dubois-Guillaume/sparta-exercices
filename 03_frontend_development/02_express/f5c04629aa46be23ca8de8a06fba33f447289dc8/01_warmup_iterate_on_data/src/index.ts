// Code here
const arrayOfCustomers = [
  { id: 1, first_name: "Filberto", last_name: "Mowles", email: "fmowles3@msu.local", gender: "Female" },
  { id: 1, first_name: "Filberto", last_name: "Mowles", email: "fmowles3@msu.local", gender: "Female" },
  { id: 1, first_name: "Filberto", last_name: "Mowles", email: "fmowles3@msu.local", gender: "Female" },
  { id: 1, first_name: "Filberto", last_name: "Mowles", email: "fmowles3@msu.local", gender: "Female" },
];
type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};

function getEmails(arrayOfCustomers: CustomerType[]): string[] {
  const emailReturn: string[] = [];
  for (let i = 0; i < arrayOfCustomers.length; i++) {
    const arrayIndex = arrayOfCustomers[i];
    const emailString = arrayIndex.email;
    emailReturn.push(emailString);
  }
  return emailReturn;
}

console.log(getEmails(arrayOfCustomers));

export { getEmails };
