// code here
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

export function filterByFirstLetterOrdered(customersList: Customer[], letter: string): Customer[] {
  if (letter.length > 1) {
    const filteredArray: Customer[] = [];
    return filteredArray;
  } else {
    const customersListFilter = filterByFirstLetter(customersList, letter);
    const customersListFilterSorted = customersListFilter.sort(function (a, b) {
      if (a.last_name < b.last_name) {
        return -1;
      } else if (a.last_name > b.last_name) {
        return 1;
      } else {
        return 0;
      }
    });
    return customersListFilterSorted;
  }
}
