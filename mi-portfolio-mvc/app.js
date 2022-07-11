const express = require('express');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public');

const mainController = require("./controllers/mainControllers.js");
const rutasMain = require("./routers/main");

app.use(express.static(publicFolderPath));

app.use('/',rutasMain );

app.use('/about',rutasMain );


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });