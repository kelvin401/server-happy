
console.log('process.env.DATABASE_URL: >> ', process.env.DATABASE_URL);

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  // "host": "localhost",
  // "port": 5432,
  // "username": "postgres",
  // "password": "docker",
  // "database": "orphanages",
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