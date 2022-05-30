const autos = require("./autos.js");

const concesionaria = {
    
   autos: autos,
   buscarAuto:function(patente) {
        let vend = null
        let ind=null
        for (let i=0 ;i<autos.length; i++){
              if (autos[i].patente==patente) {
                vend = autos[i]
                ind=i
            
            }
            
        }
    
    return [vend,ind]
    },
    venderAuto:function(patente) {
        autoResultado = this.buscarAuto(patente);
        if (autoResultado[1]!=null) {
        autos[autoResultado[1]].vendido=true
        } else {

         console.log("No se encuentra auto");   
        }

    },

    autosParaLaVenta: function() {
       noVendidos= this.autos.filter(v => v.vendido == false );
        return noVendidos;



    },
    autosNuevos: function() {
        let noVendidos=this.autosParaLaVenta();
        let okm= noVendidos.filter(v => v.km == 0 );

            return okm
    },

    listaDeVentas: function() {
        let precios=[0];
        vendidos= this.autos.filter(v => v.vendido == true );
        vendidos.forEach((auto,i) =>{
            
            precios.push(auto.precio)
            } 
    
    
        )
        
        
        return precios;

    },

    totalDeVentas: function() {
        ventas=this.listaDeVentas();
        let total=ventas.reduce(function(parcial,precio){
            return parcial + precio

        })

        return total
    },
    puedeComprar: function(auto,persona){
        let puede = false;
        if (persona.capacidadDePagoTotal >  auto.precio && persona.capacidadDePagoEnCuotas  > (auto.precio / auto.cuotas ) ) {
        puede = true;

        }

        return puede

    },
    autosQuePuedeComprar: function(persona){
        let puede=[]
        paraVenta=this.autosParaLaVenta();
        
        paraVenta.forEach((auto,i) =>{
            
            if (this.puedeComprar(auto,persona)) {
                
                puede.push(auto)
                
            }
            
            } 
    
    
        )

         return puede

    }

}

//console.log(concesionaria);
;
//console.log(concesionaria.buscarAuto('APL123'));
console.log(concesionaria.venderAuto('APL123'));

//console.log(concesionaria.totalDeVentas());
console.log(concesionaria.autosQuePuedeComprar({
    nombre: "juan",
    capacidadDePagoEnCuotas: 200000,
    capacidadDePagoTotal: 1000000
    }));
