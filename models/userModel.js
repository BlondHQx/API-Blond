const mongoose = require('mongoose');//import de mongoose

//defini le schema du users
const userSchema = new mongoose.Schema({
    name:{
        type: String 
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

//declaration de mon modele de donnée qui sera connecté a la collecgion users et qui utiliseras mon schema
const userModel = mongoose.model("users",userSchema)
module.exports = userModel; // on limporte