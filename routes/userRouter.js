const userRouter = require('express').Router(); //on execeute la methode express du router
const userModel = require('../models/userModel');//importation model user

//methode get, Rendu des utilisateurs
userRouter.get('/users', async (req, res) => {
    try {
        let users = await userModel.find()//utilisation de la methode find de notre model
        res.json(users);// on rend nos utlisateurs
    } catch (error) {
        res.json({ mess: "Error" })
    }
});

//method post, ajout d'utilisateur 
userRouter.post('/users', async (req, res) => {
    try {
        let user = new userModel(req.body)
        await user.save();
        res.json(user);
    } catch (error) {
        res.json({ mess: "Error" })
    }
})

//method get,route de rendu d'un seul user (en parametre son id)
userRouter.get('/users/:id', async (req, res) => {
    try {
        let user = await userModel.findOne({ _id: req.params.id })
        res.json(user);
    } catch (error) {
        res.json({ mess: "Error" })
    }
});

//method get ,route d'update d'un seul user (en parametre son id)
userRouter.put('/users/:id', async (req, res) => {
    try {
        let userUpdated = await userModel.updateOne({ _id: req.params.id }, (req.body))
        res.json(userUpdated);
    } catch (error) {
        res.json({ mess: "Error" })
    }
});

//method delete ,route pour delete un seul user (en parametre son id)
userRouter.delete('/users/:id', async (req, res) => {
    try {
        let userDelete = await userModel.deleteOne({ _id: req.params.id });
        res.json(userDelete);
    } catch (error) {
        res.json({ mess: "Error" });
    }
});

// userRouter.post('/users/login', async (req, res) => {
//     try {
//         let userLogin = await userModel.findOne({ email: req.body.email, password: req.body.password},);
//         if (userLogin) {
//             res.status(200);
//             res.json('Connecté Avec succès !');
//         }else{
//             res.status(400)
//             res.json('error');
//         }
//     } catch (error) {
//         res.json({ mess: "Error" })
//     }
// });

//export du routeur pour pouvoir l'utiliser ailleurs
module.exports = userRouter;