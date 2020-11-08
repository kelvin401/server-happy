const { isExternalModuleNameRelative } = require("typescript")
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,

  "migrations": [
    "./dist/database/migrations/*.js"
  ],
  "entities": [
    "./dist/models/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations/"
  }
}