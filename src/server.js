/**
 * Dependencies
 * Heavily inspired by 
 *     https://github.com/expressjs/express/blob/master/examples/auth/index.js
 */

var express = require('../..');
var hash = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');
var db = require('./auth/db_utils.js');

var app = module.exports = express()

// config 

// middleware

app.use(express.urlencoded({ extended: false }))
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'secret'
}));

// Session-persisted message middleware

app.use(function(req, res, next){
    var err = req.session.error;
    var msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
});

// Authenticate

function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);
    var user = db.getUser(name);
    // query the db for the given username
    if(!user) return fn(new Error('cannot find user'))
    // Apply the hashing logic to the password entered 
    db.hashAndSalt()
}

