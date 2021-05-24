"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_utils_1 = require("../../../src/servers/auth/db_utils");
const mocha_1 = require("mocha");
const chai_1 = require("chai");
mocha_1.describe('Authentication database interactions', function () {
    mocha_1.describe('User insertion', function () {
        mocha_1.it('inserts user', function () {
            db_utils_1.insertUser('user1', 'User 1', 'password');
            var user = db_utils_1.getUserByUsername('user1');
            chai_1.expect(user.name).equals('User 1', 'Name of inserted entry does not match');
        });
    });
    mocha_1.describe('User authentication', function () {
        mocha_1.it('authenticates the password of a user', function () {
            chai_1.expect(db_utils_1.authenticate('user1', 'password'));
            chai_1.expect(!db_utils_1.authenticate('user1', 'wrongpassword'));
        });
    });
});
