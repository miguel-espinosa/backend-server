var express = require('express');
var fs = require('fs');

var app = express();

//Nuevo
const path = require('path');


app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;
    //Viejo
    //var path = `./uploads/${ tipo }/${ img }`;
    // fs.exists(path, existe => {

    //     if (!existe) {
    //         path = './assets/no-img.jpg';
    //     }


    //     res.sendfile(path);

    // });

    var pathImage = path.resolve(__dirname, `../uploads/${tipo}/${ img }`);

    if (fs.existsSync(pathImage)) {
        res.sendFile(pathImage)
    } else {
        var pathNoImage = path.resolve(__dirname, '../assets/no-img.jpg');
        res.sendFile(pathNoImage);
    }


});

module.exports = app;