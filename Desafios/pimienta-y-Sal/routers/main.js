const express = require('express');
const router = express.Router();

const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');

const mainController = require("../controllers/mainControllers.js");

router.use(express.static(publicFolderPath)); 


router.get('/',mainController.index );

router.get('/detalle/:id',mainController.detalleMenu);



module.exports =router;