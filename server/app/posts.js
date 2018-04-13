const express = require('express');
const router = express.Router();
const fs = require('fs');
const posts = "./posts";
let data = [];
const multer  = require('multer');
const path = require('path');
const config = require('../config');
const nanoid = require('nanoid');

let getBlock = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./db.json', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
        });
    })
};



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, config.uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});


getBlock().then((result) => {
    data = JSON.parse(result);
});


router.get('/', (req, res) => {
   res.send(data)
});






router.post('/', upload.single('image'), (req, res) => {
    const posts = req.body;
    if (req.file) {
        posts.image = req.file.filename;
    }
    data.push(posts);
    fs.writeFile('./db.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
        }
        res.send('File was saved!');
    });
});


module.exports = router;