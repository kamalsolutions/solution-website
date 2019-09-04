'use strict';
const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/static/',express.static(path.join(__dirname, 'public')));
app.set('view engine','pug');
app.set('views',__dirname + '/public/templates');
// set static folder

// routes
app.get('/',require('./routes/index'));
app.get('/about',require('./routes/about'));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);


