global.Promise = require('bluebird');
global._ = require('lodash');
var app = Promise.promisifyAll(require('./server/config/express'));
var dbConnect=require('./server/config/dbConnect');
const port=8080;

dbConnect.connect()
    .then(()=>{
        console.log('First Node App from Scratch on port - ' + port);
        app.listenAsync(port);
    })



