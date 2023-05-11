const userModel = require('../models/userModel');//importation model user
const bcrypt = require('bcrypt');

exports.getUser = async (req,res)=>{
    try {
        let users = await userModel.find()//utilisation de la methode find de notre model
        res.json(users);// on rend nos utlisateurs
    } catch (error) {
        res.json({ mess: "Error" })
    }
}

exports.postUser = async (req,res)=>{
    try {
        let saltRounds = 10; // nombre de tours de chiffrement
        let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds); // mot de passe crypté
        let user = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword // mot de passe crypté est stocké dans la base de données
        });
        await user.save();
        res.json(user);
    } catch (error) {
        res.json({ mess: "Error" })
    }
}

exports.getUserId = async (req,res)=>{
    try {
        let user = await userModel.findOne({ _id: req.params.id })
        res.json(user);
    } catch (error) {
        res.json({ mess: "Error" })
    }
}

exports.putUser = async (req,res)=>{
    try {
        let userUpdated = await userModel.updateOne({ _id: req.params.id }, (req.body))
        res.json(userUpdated);
    } catch (error) {
        res.json({ mess: "Error" })
    }
}

exports.deleteUser = async (req,res)=>{
    try {
        let userDelete = await userModel.deleteOne({ _id: req.params.id });
        res.json(userDelete);
    } catch (error) {
        res.json({ mess: "Error" });
    }
}

exports.postUserLogin = async (req,res) => {
    try {
        let userLogin = await userModel.findOne({ email: req.body.email },);
        if (!userLogin) {
            res.status(400).json({ message: 'Adresse mail incorrecte !' });
            console.log(userLogin.status);
            res.json(userLogin._id);
        } else {
            let match = await bcrypt.compare(req.body.password, userLogin.password);
            if (match) {
                res.status(200).json(userLogin._id);
            } else {
                res.status(400).json({ message: 'Mot de passe incorrect !' });
            }
        }
    } catch (error) {
        res.status(500).json({ mess: "Error from server !" })
    }
}