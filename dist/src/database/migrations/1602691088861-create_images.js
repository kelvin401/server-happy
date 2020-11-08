"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImages1602691088861 = void 0;
const typeorm_1 = require("typeorm");
class createImages1602691088861 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "images",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "path",
                    type: "varchar"
                },
                {
                    name: "orphanage_id",
                    type: "integer"
                }
            ],
            foreignKeys: [
                {
                    name: "ImageOrphanage",
                    columnNames: ["orphanage_id"],
                    referencedTableName: "orphanages",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("images");
    }
}
exports.createImages1602691088861 = createImages1602691088861;
