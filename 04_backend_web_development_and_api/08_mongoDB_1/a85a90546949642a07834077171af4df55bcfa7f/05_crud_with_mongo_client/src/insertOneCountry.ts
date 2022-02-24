import { Db } from "mongodb";

export function insertOneCountry(db: Db, country) {
  // code your function here
  db.collection("worldAtlas").insertOne(country);
}
