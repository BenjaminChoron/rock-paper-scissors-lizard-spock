// variables d'environnement
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;

// Express
const express = require('express');

const app = express();

// réglages views
app.set('views', 'app/views');
app.set('view engine', 'ejs');

// fichiers statiques
app.use(express.static('public'));

// routage
const router = require('./app/router');
app.use(router);

// lancement serveur
app.listen( PORT,  () => {
    console.log(`Listening on http://localhost:${PORT}`);
});