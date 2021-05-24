/**
 * FIXME: CURRENTLY USING DUMMY PLAINTEXT DB
 * 
 */

import { BinaryLike, pbkdf2, randomBytes, randomInt } from 'crypto';
import { filter } from 'lodash';


// ---- TYPE INTERFACES ----
interface User {
    'userId': string,
    'name': string,
    'password': {
        'hash': BinaryLike,
        'salt': BinaryLike,
        'iterations': number
    }
}

// ---- HASHING LOGIC ----

function _hashAndSalt(password:string, salt:BinaryLike=randomBytes(16), iterations:number=randomInt(80000,100000)) {
    var hash: Buffer = Buffer.alloc(32)  // Allocate default buffer, TODO: this feels janky
    pbkdf2(
        password,
        salt,
        iterations,
        32,
        'sha256',
        (err, derivedKey) => {
            if (err) throw err
            hash = derivedKey
        }
    );
    // Return a dictionary of attributes for storage in db
    return {
        'hash': hash,
        'salt': salt,
        'iterations': iterations
    }
}

// ---- DB QUERY TOOLS ----
// TODO: These are just fillers for testing, need to replace with actual DB and its logic

function getUserByUsername(id:string) {
    var user = filter(db, user => user.userId == id);

    if (user.length == 0) {
        throw new Error("User not found");
    }

    if (user.length > 1) {
        throw new Error("More than one user found for that ID, please check DB insertion logic");
    }

    return user[0];  // Should only be one user in array
}

function _getUserPasswordById(id:string) {
    var user = getUserByUsername(id);

    return user.password;
}

function authenticate(userId:string, password:string) {
    try {
        var expected = _getUserPasswordById(userId)
    }
    catch (err) {
        // Something went wrong, just pass up the error
        throw err
    }
    
    // Use the same salt and iteration count that the user originally used to retrieve the same hash
    var salt = expected.salt
    var iterations = expected.iterations
    var hash = _hashAndSalt(password, salt, iterations)
    
    if (hash == expected) {
        return true
    }

    return false
}

function insertUser(userId:string, name:string, password:string) {
    try {
        // Check if the user exists
        getUserByUsername(userId);
        // If user exists then throw back an error
        throw new Error("User already exists")
    } catch (err) {
        // User doesn't exist, generate hash and insert
        var user = {
            'userId': userId,
            'name': name,
            'password': _hashAndSalt(password)
        }
        db.push(user)
    }
}

// TODO: This is just a dummy plaintext DB and needs to be removed once real DB is set up

var db: User[] = [
]

export { authenticate, insertUser, getUserByUsername };