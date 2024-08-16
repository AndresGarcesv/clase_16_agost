//importar la funcion mostrarEnHTML
import { mostrarEnHTML } from "./mostrarEnHTML.js";

//funcion obtener datos
//utilizando async - await 
const obtenerEmpleados= async () => {

    const url = "data/empleados.json"
    const response = await fetch(url);
    const empleados =  await response.json();
    //invocar la funcion mostrarEnHTML
    mostrarEnHTML(empleados)
}

//selector al boton 
const btnCargarJSON = 
        document.querySelector('#cargarJSON');
//añadir evento click al boton
btnCargarJSON.addEventListener('click' ,
            obtenerEmpleados)
