const express = require ("express");
const app = express();

const path=require("path");

const publicPath = path.resolve(__dirname,"./public")

app.use(express.static(publicPath));


app.listen(3030, () => console.log("Servidor corriendo puerto 3030"));
