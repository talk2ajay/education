const express=require('express');
const app=express();
const bodyParser=require('body-parser');
/*var path = require('path');
*/


app.use('/node_modules', express.static('node_modules'));
app.set('view engine', 'ejs');
app.use(bodyParser.json({limit: '1mb'}));
require('./routes')(app);

module.exports = app;




