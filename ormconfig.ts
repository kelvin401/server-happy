import Image from "./src/models/Image";
import Orphanage from "./src/models/Orphanage";

module.exports = {
  type: "sqlite",
  database: "./src/database/database.sqlite",
  migrations: ["./dist/database/migrations/*.js"],
  entities: [Image, Orphanage],
  cli: {
    migrationsDir: "./src/database/migrations/",
  },
};
