import { Db } from "mongodb";

export async function updateOneCountry(db: Db) {
  // code your function here
  return await db
    .collection("wordlAtlas")
    .updateOne({ capital: "Sydney" }, { $set: { capital: "Canberra" } })
    .then((country) => {
      return country.upsertedId;
    });
}
