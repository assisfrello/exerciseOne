const axios = require('axios')
const Post = require('./src/schema/post')

var url = 'https://jsonplaceholder.typicode.com/posts';

const options = {
  'method': 'GET',
  'url': url,
};

const createPost = response => {
    if ( response.data.length > 0 ) response.data.map(value => Post.create(value))
}

axios(options)
    .then(createPost)
    .catch(err => console.log(err))