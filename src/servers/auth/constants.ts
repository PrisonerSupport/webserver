/**
 * Global constants for authorization
 */

import { createPool } from 'mysql2';

export const constants = {
    USER_DB_POOL: createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'webserver',
        password: process.env.AUTHDBPASS,
        database: 'users'
    }),
}