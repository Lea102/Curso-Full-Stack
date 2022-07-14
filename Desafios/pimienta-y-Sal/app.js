const express = require('express');
const app = express();

const menu1 = require("./menu.js");


const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');

const mainController = require("./controllers/mainControllers.js");
const rutasMain = require("./routers/main");

app.set("view engine","ejs");

app.use(express.static(publicFolderPath));

app.use('/',rutasMain );

app.use('/detalle/:id',rutasMain );


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });