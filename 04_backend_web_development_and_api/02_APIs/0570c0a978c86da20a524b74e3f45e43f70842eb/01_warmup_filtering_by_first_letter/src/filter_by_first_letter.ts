import { Customer } from "../data/customers";

export function filterByFirstLetter(customersList: Customer[], letter: string): Customer[] {
  // Code here
  const filteredList = customersList.filter((name) => {
    const firstLetter = name.last_name[0];
    if (firstLetter === letter) {
      return true;
    } else {
      return false;
    }
  });
  return filteredList;
}
