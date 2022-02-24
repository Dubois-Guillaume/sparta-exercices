import { Db } from "mongodb";

const countries = [
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  },
  {
    name: "Germany",
    capital: "Berlin",
    continent: "Europe",
  },
];

export function insertManyCountries(db: Db, countries) {
  // code your function here
  return db
    .collection("worldAtlas")
    .insertMany(countries)
    .then((countries) => {
      return countries.insertedCount;
    });
}
