"use strict";
/**
 * Global constants for authorization
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
const mysql2_1 = require("mysql2");
exports.constants = {
    USER_DB_POOL: mysql2_1.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'webserver',
        password: process.env.AUTHDBPASS,
        database: 'users'
    }),
};
