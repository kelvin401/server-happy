"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Image_1 = __importDefault(require("./src/models/Image"));
const Orphanage_1 = __importDefault(require("./src/models/Orphanage"));
module.exports = {
    type: "sqlite",
    database: "./src/database/database.sqlite",
    migrations: ["./dist/database/migrations/*.js"],
    entities: [Image_1.default, Orphanage_1.default],
    cli: {
        migrationsDir: "./src/database/migrations/",
    },
};
