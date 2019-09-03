'use strict';
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
app.use('/static/',express.static(path.join(__dirname, 'public')));
app.set('view engine','pug');
app.set('views',__dirname + '/public/templates');
// set static folder

// routes
app.get('/',require('./routes/index'));
app.get('/about',require('./routes/about'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server Started on ${PORT}`));




