"use strict";
/**
 * Main entry point for our webserver
 *
 * Primarily routes API calls to subapps and handles rendering and serving our react interface
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Import subapps
const auth_1 = __importDefault(require("./servers/auth"));
const resources_1 = __importDefault(require("./servers/resources"));
// Routes to subapps
var app = express_1.default();
app.use('/auth', auth_1.default);
app.use('/resources', resources_1.default);
// Server-side render our view
// Serve our app
