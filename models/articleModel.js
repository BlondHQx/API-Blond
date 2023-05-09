const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
        title: {
            type: String
        },
        text: {
            type: String 
        }
})

const articleModel = mongoose.model('articles', articleSchema);
module.exports = articleModel;