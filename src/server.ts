/**
 * Main entry point for our webserver
 * 
 * Primarily routes API calls to subapps and handles rendering and serving our react interface
 */

import express from 'express';

// Import subapps
import auth from './servers/auth';
import resources from './servers/resources';

// Routes to subapps
var app = express();
app.use('/auth', auth);
app.use('/resources', resources)

// Server-side render our view

// Serve our app