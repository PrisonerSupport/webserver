/**
 * Constants for the resources server code
 */

import { connect } from 'mongoose';

export const constants = {
    RESOURCE_DB: connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}