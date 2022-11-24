const functions = require("firebase-functions");
const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors()) 

app.use(require('./routes/userRoute'))
exports.app = functions.https.onRequest(app);
