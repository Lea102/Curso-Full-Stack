



function reporteDePasajeros(estaciones) {
    let pasajeros=[]
    for (let i=0;i<=estaciones;i=i+1 ){
        quinta= (i>=5);
        pasajeros == pasajeros.push("En la estación " + i +" hay "+ (200+i*20+quinta*20) + " pasajeros arriba del tren" );

        }
        return pasajeros
        



    }


console.log(reporteDePasajeros(0));
console.log(reporteDePasajeros(7));








