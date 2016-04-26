var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TeachersSchema   = new Schema({
    name : String,
    email : String,
    password : String,
    status : String,
    overview : String,
    profileImage : String
});

module.exports = mongoose.model('Teachers', TeachersSchema);
