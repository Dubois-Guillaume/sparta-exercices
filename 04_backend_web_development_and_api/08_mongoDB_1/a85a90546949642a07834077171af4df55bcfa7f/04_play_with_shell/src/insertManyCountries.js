// write your MongoDB shell command here
import "dotenv/config";

const newCountry = [
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  },
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  },
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  },
];

db.worldAtlas.insertMany(newCountry);
