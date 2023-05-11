const express = require('express'); //apres install express, on l'importe
const cors = require('cors');//importation de cors
const mongoose = require('mongoose'); // apres linstall import mongoose
const userRouter = require('./routes/userRouter') //import de userRouter
const articleRouter = require('./routes/articleRouter')
require('dotenv').config()

const app = express();// Declaration de notre app express
app.use(cors()); // Autorise l'application a utiliser Cors
app.use(express.json()) //autorise l'app a decoder de 
app.use(userRouter); //autorise l'application a utiliser userRouter (ordre)
app.use(articleRouter);


//ecoute du server sur le port 3000
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`connecteé au serveur sur le port : ${process.env.PORT}`);
    }
});

//connexion a la base de donnée
try {
    mongoose.connect(process.env.BDD_URI);
    console.log("Connecté a la BDD");
} catch (error) {
    console.log(error);
}
