"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = (0, knex_1.default)({
    client: "sqlite3",
    connection: {
        filename: `${process.env.DB_FILE_PATH}`
    },
    useNullAsDefault: true,
    pool: {
        min: 0,
        max: 1,
        afterCreate: (conn, cb) => {
            conn.run("PRAGMA foreign_keys = ON", cb);
        }
    }
});
//# sourceMappingURL=knexDB.js.map