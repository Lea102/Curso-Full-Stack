let sumar=require("./node_modules/sumar.js");
let restar=require("./node_modules/restar.js");
let dividir=require("./node_modules/dividir.js");
let multiplicar=require("./node_modules/multiplicar.js");

console.log(sumar(24,4));
console.log(restar(24,4));
console.log(dividir(24,0));
console.log(multiplicar(24,4));

function menciona(texto,palabra){
    if (texto.indexOf(palabra) == -1) {

        return false
    } else {

        return true
    }
}

console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'))

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function entrenarHoras(horas) {
        this.energia=this.energia-5*horas;
        this.experiencia=this.experiencia+2*horas;


    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


let dameCinco = dameCinco => [1,2,3,4,5];


let multiplicarPorDos = multiplicarPorDos => (123 * 2 );


let mostrarNombre = mostrarNombre => "Mi nombre es Hernán";

console.log(dameCinco());
    console.log(multiplicarPorDos());
        console.log(mostrarNombre());

        
        
let  saludar =  (nombre, apellido)  =>  'Hola, ' + nombre + ' ' +  apellido + '!';
        
console.log(saludar("pedro", "pedrito"));

let dia = 'jueves'

function tengoClases (dia) {
    switch (dia) {
    case ("viernes" ) :
    case ( "lunes"  ) :
    case ( "miércoles" ) :
      	console.log('tenés clases');
    	break;
    default: 
    console.log("no tenés clases");
        break;
    
          }
        }

        console.log(tengoClases (dia));
        console.log(tengoClases ("viernes"));
        console.log(tengoClases ("miércoles"));
        console.log(tengoClases ("lunes"));


        let bicicletaA = {
            rodado: 55,
            marca: "Mountain Bike"
        }
        let bicicletaB = {
            rodado: 24,
            marca: "Aurora"
        }
        
        let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ?  bicicletaA :  bicicletaB;

        
        
        
        
        
        console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );



function noParesDeContarImparesHasta(numero){
        let resultado=0;
        for (let i = 0; i<numero;i++) {
            ((i % 2) ==0) ? resultado = resultado+0: resultado = resultado+1;
            



        }
        return resultado
    }
    console.log(noParesDeContarImparesHasta(5));
    console.log(noParesDeContarImparesHasta(10));