const articleRouter = require('express').Router(); //on execeute la methode express du router
const articleModel = require('../models/articleModel');//importation model article

articleRouter.get('/articles/:author', async (req, res) => {
    try {
        let articles = await articleModel.find({author: req.params.author}).populate('author')//utilisation de la methode find de notre model
        res.json(articles);// on rend nos utlisateurs
    } catch (error) {
        res.json({ mess: "Error" })
    }
});

//method post, ajout d'utilisateur 
articleRouter.post('/articles', async (req, res) => {
    try {
        let article = new articleModel(req.body)
        await article.save();
        res.json(article);
    } catch (error) {
        res.json({ mess: "Error" })
    }
})

//method get,route de rendu d'un seul user (en parametre son id)
articleRouter.get('/articles/:id', async (req, res) => {
    try {
        let article = await articleModel.findOne({ _id: req.params.id }).populate('author')
        res.json(article);
    } catch (error) {
        res.json({ mess: "Error" })
    }
});

//method get ,route d'update d'un seul user (en parametre son id)
articleRouter.put('/articles/:id', async (req, res) => {
    try {
        let articleUpdated = await articleModel.updateOne({ _id: req.params.id }, (req.body))
        res.json(articleUpdated);
    } catch (error) {
        res.json({ mess: "Error" })
    }
});

//method delete ,route pour delete un seul user (en parametre son id)
articleRouter.delete('/articles/:id', async (req, res) => {
    try {
        let articleDelete = await articleModel.deleteOne({ _id: req.params.id });
        res.json(articleDelete);
    } catch (error) {
        res.json({ mess: "Error" });
    }
});

module.exports = articleRouter;