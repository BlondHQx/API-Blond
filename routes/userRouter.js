const userRouter = require('express').Router(); //on execeute la methode express du router
const userController = require('../controllers/userController');

//methode get, Rendu des utilisateurs
userRouter.get('/users',userController.getUser);
//method post, ajout d'utilisateur 
userRouter.post('/users', userController.postUser);
//method get,route de rendu d'un seul user (en parametre son id)
userRouter.get('/users/:id', userController.getUserId);
//method get ,route d'update d'un seul user (en parametre son id)
userRouter.put('/users/:id',userController.putUser);
//method delete ,route pour delete un seul user (en parametre son id)
userRouter.delete('/users/:id',userController.deleteUser);
//method login,via le status
userRouter.post('/users/login',userController.postUserLogin);
//export du routeur pour pouvoir l'utiliser ailleurs
module.exports = userRouter;