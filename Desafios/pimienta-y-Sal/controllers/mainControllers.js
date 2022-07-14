const path = require('path');

const menu1 = require("../menu")

const controlador = {
    index: function (req, res){
       
        res.render("index");
        
    },
    detalleMenu: (req,res)=> {
        res.render("detalleMenu",{"menu1" : menu1,"id": req.params.id});
    },
};

module.exports=controlador;