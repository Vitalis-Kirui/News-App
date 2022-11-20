const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentsSchema = new Schema({
    comment : {
        type: String,
        required: true
    },
    owner : {
        type : String,
        required : true
    },
    likes : {
        type : Number
    },
    reply : {
        type : String
    }
},
{timestamps : true}
);

module.exports = mongoose.model('Comment', commentsSchema, 'comments');