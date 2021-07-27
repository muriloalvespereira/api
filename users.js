const mongoose = require('mongoose');

const Users = new mongoose.Schema({
email: {
    type: String,
    required: true
},
username: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
}
},
{
    timestamps: true,
});

mongoose.model('users', Users)