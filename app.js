require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//TODO: require('hbs')
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.set('view engine', 'hbs');


//servir contenido estatico
app.use(express.static('templated-roadtrip'));

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Fernando',
        titulo: 'Curso de Node'
    });
  });

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre: 'Fernando',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre: 'Fernando',
        titulo: 'Curso de Node'
    });
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/templated-roadtrip/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })