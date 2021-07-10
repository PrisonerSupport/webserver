"use strict";
/**
 * Constants for the resources server code
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
const mongoose_1 = require("mongoose");
exports.constants = {
    RESOURCE_DB: mongoose_1.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};
