// write your MongoDB shell command here
import "dotenv/config";

db.worldAtlas.updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });
