import { Db, ObjectId } from "mongodb";

export function insertOneCountry(db: Db, country) {
  // code your function here
  return db
    .collection("worldAtlas")
    .insertOne(country)
    .then((country) => {
      return country;
    })
    .then((country) => {
      return country.insertedId;
    });
}
