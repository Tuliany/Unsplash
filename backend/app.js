var express = require('express')
var cors = require('cors')
const { createApi } = require('unsplash-js');
const Unsplash = require('unsplash-js');
const {toJson} = require('unsplash-js')
global.fetch = require('node-fetch')

var app = express();

app.use(cors())

const unsplash = createApi({
  accessKey: process.env.keys,
  secret: process.env.secret
})


//set up the routes for the app

app.get('/api/photos',(req,res) => {
  // make a request to the api

  const page = req.query.page || 1;

  const take = req.query.take || 30;
  
  unsplash.photos.listPhotos(page,take,"computers")
  .then(toJson)
  .then(photos => {
     // return photos to browser

     return res.json(photos)
  })

})


var port = "8080";
app.set('port', port);

module.exports = app;


/* const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const { createApi } = require('unsplash-js');
const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
const fetch = require('node-fetch');
global.fetch = fetch;


const unsplash = createApi({
  accessKey: process.env.keys,
  secret: process.env.secret
})

var app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(morgan('common'));
// view engine setup
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
  console.log('hello')
})
app.get('/api/photos', (req, res) => {
  const page = req.query.page || 1;

  const take = req.query.take || 30;
  unsplash.photos.listPhotos(page, take, "computers")
    .then(toJson)
    .then(photos => {
      // return photos to browser
      return res.json(photos)
    })
})

module.exports = app;
app.listen(8080); */