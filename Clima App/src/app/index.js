
import { Tiempo } from "./Tiempo.js";
import { Almacen } from "./Almacen.js";
import { UI } from "./UI.js";

const almacen = new Almacen();
const ciudad = almacen.getDatosLocalizacion;
const tiempo = new Tiempo(ciudad);


//Interfaz de usuario
const ui = new UI();


async function buscarClima(){
    const datos = await tiempo.getTiempo();
    console.log(datos);
    ui.actualizar(datos); 
    
}

document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const ciudad = document.getElementById('city').value;
   // const codigoPais = document.getElementById('countryCode').ariaValueMax;
    e.preventDefault();
    tiempo.cambioLocalizacion(ciudad);
    almacen.setDatosLocalizacion(ciudad);
    buscarClima();
})

document.addEventListener('DOMContentLoaded', buscarClima);