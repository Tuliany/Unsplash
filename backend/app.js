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
app.get('/api/cat', (req, res) => {
  unsplash.search.getPhotos({ query:'cat', page: 1, perPage: 9 })
    .then(toJson)
    .then(photos => {
      if (result.type === 'success') {
        const photo = result.response;
        console.log(photo)
      //return res.json(photos)
    }
  })

 /*  unsplash.search.getPhotos({
    query: 'cat',
    page: 1,
    perPage: 10,
    color: 'green',
    orientation: 'portrait',
  }).then(toJson)
    .then(result => {
      return res.json(result) */

 /*    if (result.errors) {
      // handle error here
      console.log('error occurred: ', result.errors[0]);
    } else {
      const feed = result.response;
      // extract total and results array from response
      const { total, results } = feed;
      // handle success here
      console.log(`received ${results.length} photos out of ${total}`);
      console.log('first photo: ', results[0]);
    } */
 // })
//})

app.listen(8080)
