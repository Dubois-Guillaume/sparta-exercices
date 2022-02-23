// write your MongoDB shell command here
import "dotenv/config";

db.worldAtlas.update({ name: "Australia" }, { $set: { capital: "Canberra" } });
