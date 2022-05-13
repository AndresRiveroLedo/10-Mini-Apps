//@ts-check
import { Pregunta } from "./Pregunta.js";

export class Quiz{
    puntos = 0;
    preguntaIndex = 0;

    /**
     * @param {Pregunta[]} preguntas
     */
    constructor(preguntas){
        this.preguntas = preguntas;
    }

    /**
     * @returns {Pregunta} la pregunta encontrada
     */
    getPregunta(){
        return this.preguntas[this.preguntaIndex];
    }

    /**
     * 
     * @returns {boolean} 
     */
    esFinal(){
        return this.preguntas.length === this.preguntaIndex;
    }
    /**
     * 
     * @param {string} respuesta 
     */

    comprobarRespuesta(respuesta){
        if(this.getPregunta().respuestaCorrecta(respuesta)){
            this.puntos++;
        }
        this.preguntaIndex++;
    }
}

/*Esta clase realiza las siguientes tareas: 
    1- importa el objeto pregunta
    2- define la variable puntos y la variable para el indice del array datos 
    3- Constructor(): como unico parametro objeto pregunta[]
    4-  Metodos()
        + getPregunta(): nos retorna un objeto pregunta del array datos
        + esFinal(): metodo donde comprobamos que llegamos al final del array de datos
        + comprobarRespuesta(): metodo para comprobar la respuesta correcta.
*/