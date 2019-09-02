const express = require('express');
const path = require('path');
const app = express();

app.use('/static/',express.static(path.join(__dirname, 'public')));
app.set('view engine','pug');
app.set('views',__dirname + '/public/templates');
// set static folder

// routes
app.use('/',require('./routes/index'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server Started on ${PORT}`));




