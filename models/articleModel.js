const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
        title: {
            type: String
        },
        text: {
            type: String 
        },
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
})

const articleModel = mongoose.model('articles', articleSchema);
module.exports = articleModel;