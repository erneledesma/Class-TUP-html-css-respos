
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;

//TODO: Requerimos de (hbs);
app.set('view engine', 'hbs');

//TODO: Parciales
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico 
app.use( express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Ernesto Ledesma',
        titulo: 'Clase de NodeJS con HBS'
    })
  });


app.get('/generic', function (req, res) {
    res.render('generic')
  });

 
app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});