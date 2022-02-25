import { Db } from "mongodb";

export function updateOneCountry(db: Db) {
  // code your function here
  return db
    .collection("wordlAtlas")
    .updateOne({ capital: "Sydney" }, { $set: { capital: "Canberra" } })
    .then((country) => {
      return country.upsertedId;
    })
    .then((country) => {
      return country;
    });
}
