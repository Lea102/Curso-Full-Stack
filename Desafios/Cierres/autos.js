//marca, modelo, precio, km, color, cuotas, anio, patente, vendido.

function TipoAuto(marca, modelo, precio=0, km=0, color="", cuotas=0, anio=0, patente="", vendido=false){

    this.marca=marca;
    this.modelo=modelo;
    this.precio=precio;
    this.km=km;
    this.color=color;
    this.cuotas=cuotas;
    this.anio=anio;
    this.patente=patente;
    this.vendido=vendido;


};

let autos=[];
let auto1= new TipoAuto(marca="Ford",modelo="Fiesta",precio=150000,km=200,color="Azul",cuotas=12,anio=2019,patente="APL123",vendido = false);
let auto2= new TipoAuto(marca="Toyota",modelo="Corolla",precio=100000,km=0,color="Blanco",cuotas=14,anio=2019,patente="JJK116",vendido = false);
autos.push(auto1 );
autos.push(auto2 );
//console.log(autos);

module.exports = autos
