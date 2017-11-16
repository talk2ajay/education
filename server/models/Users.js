const mongoose = require('mongoose');
const autoIncrement= require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const User=new mongoose.Schema({
    name: String,
    roles: [{
        type: String
    }],
    email: String
});

User.plugin(autoIncrement.plugin,{model: 'User',field: 'userId'});

module.exports = mongoose.model('User', User);

