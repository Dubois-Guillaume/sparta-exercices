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

export function insertManyCountries(db: Db, countries): number {
  // code your function here
  db.collection("worldAtlas").insertMany(countries);
  return countries.length;
}
