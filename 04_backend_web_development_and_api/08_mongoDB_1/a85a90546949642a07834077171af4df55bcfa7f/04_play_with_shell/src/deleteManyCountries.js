// write your MongoDB shell command here
import "dotenv/config";

db.worldAtlas.deleteMany({ continent: "EU" });
