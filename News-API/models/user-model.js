const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname : {
        type : String,
        require : true,
    },
    lastname : {
        type : String,
        require : true,
    },
    username : {
        type : String,
        require : true,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
        require : true,
    },
    confirmpassword : {
        type : String,
        require : true,
    },
    subscribe : {
        type : Boolean
    }
});

module.exports = mongoose.model('User', userSchema , 'users');