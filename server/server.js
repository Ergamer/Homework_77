const express = require('express');
const app = express();
const posts = require('./app/posts');
const cors = require('cors');

const port = 8000;


app.use(cors());
app.use('/posts', posts);
app.use(express.json());
app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Server started on ${port} port!`)
});

