"use strict";
/**
 * Dependencies
 * Heavily inspired by
 *     https://github.com/expressjs/express/blob/master/examples/auth/index.js
 */
Object.defineProperty(exports, "__esModule", { value: true });
const db_utils_1 = require("./db_utils");
var express = require('../..');
var path = require('path');
var session = require('express-session');
var auth = module.exports = express();
// config -- TODO: Add configuration parameters to auth
// middleware
auth.use(express.urlencoded({ extended: false }));
auth.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret'
}));
// Session-persisted message middleware
auth.use(function (req, res, next) {
    var err = req.session.error;
    var msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err)
        res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg)
        res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
});
// Authenticate
function verifyAuthentication(username, pass, fn) {
    console.log('authenticating %s:%s', username, pass);
    var authenticated = db_utils_1.authenticate(username, pass); // User not found errors handled here
    if (!authenticated) {
        throw new Error("Password is incorrect");
    }
}
// Pass up the router
exports.default = auth;
