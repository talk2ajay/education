dbConnect=module.exports;
const mongo = Promise.promisifyAll(require('mongodb'));
const mongoClient= Promise.promisifyAll(mongo.MongoClient);
const mongoose = require('mongoose');

let url = 'mongodb://localhost:27017';

dbConnect.connect = () =>{
    console.log('Connecting to Mongo db url : ' + url);
    return Promise.join(mongoClient.connectAsync(url),
       mongoose.connect(url));
}

