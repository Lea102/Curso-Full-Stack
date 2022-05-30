

const fs = require('fs');

const leerJSON = () => {
    const tareas = fs.readFileSync("./tareas.json", "utf-8");
    const objetoTareas = JSON.parse(tareas);
  
    return objetoTareas;
  }

  const leerPorEstado = (estado) =>{
    let obj=[]
    const tareasLiteral = leerJSON();
    tareasLiteral.forEach((tarea,i) =>{
        if (tarea.estado==estado) {
            obj.push(tarea)
        } 


    } )

        return obj;

    }



  

  const escribirJSON = (arrayTareas) => { 
    const tareasString=JSON.stringify(arrayTareas);
    fs.writeFileSync('./tareas.json',  tareasString, 'utf8')
}
  const guardarTarea= (nuevaTarea) => {
    let tareasActuales=leerJSON();
    tareasActuales.push(nuevaTarea);
    escribirJSON(tareasActuales)


}

function listarTareas (archivos, acciones)
{

    
    



    switch (acciones){
        case "listar":
            const tareasLiteral = leerJSON();
            //console.log(tareasLiteral);
            tareasLiteral.forEach((tarea,i) => console.log(`${i}.${tarea.titulo}-${tarea.estado}`))
                break;
        case "crear":
            const nombreTarea= process.argv[3];

        let crearNuevaTarea ={titulo: nombreTarea,estado:"pendiente"}
        guardarTarea(crearNuevaTarea);

            break;

        case "filtrar":
            const nombreEstado= process.argv[3];
            tareasFiltro=leerPorEstado (nombreEstado);
            tareasFiltro.forEach((tarea,i) => console.log(`${i}.${tarea.titulo}-${tarea.estado}`))
            
            break;terminada

        case undefined:
            console.log("Atención - Tienes que pasar una acción");
            break;
        default:
            console.log("No entiendo que quieres hacer");


}









}



module.exports = listarTareas;