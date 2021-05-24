/**
 * Dependencies
 * Heavily inspired by 
 *     https://github.com/expressjs/express/blob/master/examples/auth/index.js
 */

import { authenticate } from './db_utils';
import { Request, Response } from 'express';

 var express = require('../..');
 var path = require('path');
 var session = require('express-session');
 
 var auth = module.exports = express()
 
 // config -- TODO: Add configuration parameters to auth
 
 // middleware
 
 auth.use(express.urlencoded({ extended: false }));
 auth.use(session({
     resave: false,
     saveUninitialized: false,
     secret: 'secret'
 }));

 // Session-persisted message middleware
 
 auth.use(function(req: any, res: any, next: any){
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

 auth.post('/:userId', (req: Request, res: Response, next: any) => {
     if (!req.body) {
         res.send("No payload sent with request");
     }

     if (!req.body.hasOwnProperty('password')) {
         res.send("Payload does not contain a password");
     }

     var username = req.params.userId
     var pass = req.body['password'];

     console.log('authenticating %s', username);

     try {
         var authentication = authenticate(username, pass);
         if (authentication) {
             res.status(200)
             console.log("%s authenticated", username)
             res.send("User authenticated")
         } else {
             res.status(403);
             console.log("Failed authentication for %s", username);
             res.send("Password is incorrect");
         }
     } catch (err) {
        throw err;
     }
 })
 
// Pass up the router

 export default auth;