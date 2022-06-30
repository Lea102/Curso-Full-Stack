const express = require ("express");
const path=require("path");
const app = express();




app.listen(3030, () => console.log("Servidor corriendo puerto 3030"));

app.use(express.static("public"));

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname,"/views/index.html"));
})
