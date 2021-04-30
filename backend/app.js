var express = require('express')
var cors = require('cors')
const { createApi } = require('unsplash-js');
const {toJson} = require('unsplash-js')
const fetch = require('node-fetch')
global.fetch = fetch;

URL = require('url').URL
var app = express();

app.use(cors())

const unsplash = createApi({
  accessKey: 'dczmf10Kpo8SKPLX4jL3DoAB7m7AIijc0uE0C0icYNA',
  secret: 'SpXRl5wm64qayPHTkxdsQSchbfkMonSJLIdVh3AHWU8'
});

app.get('/', (req, res) => {
  res.send('App Works !!!!');
  console.log('hello')
})
//set up the routes for the app
app.get('/api', (req, res) => {
  unsplash.search.getPhotos({ query: 'inspiration', page: 1, perPage: 10 })
    .then(toJson)
    .then(photos => {
      if (photos.type === 'success') {
        return res.json(photos.response)
      } else {
        console.log('error occurred: ', result.errors[0]);
      }
    })
})
 

app.listen(8080)
module.exports = app

