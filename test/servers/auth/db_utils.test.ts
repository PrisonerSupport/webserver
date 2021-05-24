import { authenticate, insertUser, getUserByUsername } from '../../../src/servers/auth/db_utils';
import { describe, it } from 'mocha'
import { expect } from 'chai'


describe('Authentication database interactions', function() {
    describe('User insertion', function () {
        it('inserts user', function () {
            insertUser('user1', 'User 1', 'password');
            var user = getUserByUsername('user1')
            expect(user.name).equals('User 1', 'Name of inserted entry does not match')
        });
    });

    describe('User authentication', function() {
        it('authenticates the password of a user', function () {
            expect(authenticate('user1', 'password'))
            expect(!authenticate('user1', 'wrongpassword'))
        });
    });
});