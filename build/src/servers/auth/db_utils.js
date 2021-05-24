"use strict";
/**
 * FIXME: CURRENTLY USING DUMMY PLAINTEXT DB
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUsername = exports.insertUser = exports.authenticate = void 0;
const crypto_1 = require("crypto");
const lodash_1 = require("lodash");
// ---- HASHING LOGIC ----
function _hashAndSalt(password, salt = crypto_1.randomBytes(16), iterations = crypto_1.randomInt(80000, 100000)) {
    var hash = Buffer.alloc(32); // Allocate default buffer, TODO: this feels janky
    crypto_1.pbkdf2(password, salt, iterations, 32, 'sha256', (err, derivedKey) => {
        if (err)
            throw err;
        hash = derivedKey;
    });
    // Return a dictionary of attributes for storage in db
    return {
        'hash': hash,
        'salt': salt,
        'iterations': iterations
    };
}
// ---- DB QUERY TOOLS ----
// TODO: These are just fillers for testing, need to replace with actual DB and its logic
function getUserByUsername(id) {
    var user = lodash_1.filter(db, user => user.userId == id);
    if (user.length == 0) {
        throw new Error("User not found");
    }
    if (user.length > 1) {
        throw new Error("More than one user found for that ID, please check DB insertion logic");
    }
    return user[0]; // Should only be one user in array
}
exports.getUserByUsername = getUserByUsername;
function _getUserPasswordById(id) {
    var user = getUserByUsername(id);
    return user.password;
}
function authenticate(userId, password) {
    try {
        var expected = _getUserPasswordById(userId);
    }
    catch (err) {
        // Something went wrong, just pass up the error
        throw err;
    }
    // Use the same salt and iteration count that the user originally used to retrieve the same hash
    var salt = expected.salt;
    var iterations = expected.iterations;
    var hash = _hashAndSalt(password, salt, iterations);
    if (hash == expected) {
        return true;
    }
    return false;
}
exports.authenticate = authenticate;
function insertUser(userId, name, password) {
    try {
        // Check if the user exists
        getUserByUsername(userId);
        // If user exists then throw back an error
        throw new Error("User already exists");
    }
    catch (err) {
        // User doesn't exist, generate hash and insert
        var user = {
            'userId': userId,
            'name': name,
            'password': _hashAndSalt(password)
        };
        db.push(user);
    }
}
exports.insertUser = insertUser;
// TODO: This is just a dummy plaintext DB and needs to be removed once real DB is set up
var db = [];
