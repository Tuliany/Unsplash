import { createApi , toJson} from 'unsplash-js';
import nodeFetch from 'node-fetch';

URL = require('url').URL

const unsplash = createApi({
  accessKey: 'dczmf10Kpo8SKPLX4jL3DoAB7m7AIijc0uE0C0icYNA',
    secret: 'SpXRl5wm64qayPHTkxdsQSchbfkMonSJLIdVh3AHWU8',
    fetch: nodeFetch,
});

export default (req, res) => {
    unsplash.search.getPhotos({ query: 'inspiration', page: 1, perPage: 10 })
    .then(toJson)
    .then(photos => {
      if (photos.type === 'success') {
        return res.json(photos.response)
      } else {
        console.log('error occurred: ', result.errors[0]);
      }
    }) 
}
 



