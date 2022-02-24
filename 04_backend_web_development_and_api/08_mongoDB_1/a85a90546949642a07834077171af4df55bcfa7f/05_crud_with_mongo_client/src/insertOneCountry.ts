import { Db, ObjectId } from "mongodb";

export function insertOneCountry(db: Db, country): ObjectId {
  // code your function here
  db.collection("worldAtlas")
    .insertOne(country)
    .then((country) => {
      return country.insertedId.id;
    });
  return country._id;
}
