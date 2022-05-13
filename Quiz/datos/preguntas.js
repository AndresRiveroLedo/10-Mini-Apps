/*En este archivo importamos el objeto datos y lo mapeamos*/
import {datos} from "./datos.js"
import {Pregunta} from "../modelos/Pregunta.js"

export const preguntas = datos.map(
    (pregunta) => 
    new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respCorrecta)
);

/*En este archivo:
1- Importamos la clase datos y el objeto Pregunta 
2- map(): nos retorna un nuevo arreglo con los valores del array datos.
3- const preguntas: tendra en su interior el array datos más el metodo de respuestaCorrecta()
que 
*/