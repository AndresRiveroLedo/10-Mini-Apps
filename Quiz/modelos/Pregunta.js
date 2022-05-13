class Pregunta {

    /**
        @param {string} texto Es el texto de las preguntas
        @param {string[]} opciones lista de las opciones de la pregunta
        @param {string} respCorrecta Es la respuesta correcta de la pregunta
    */
   constructor(texto, opciones, respCorrecta){
       this.texto = texto;
       this.opciones = opciones;
       this.respCorrecta = respCorrecta;
   }

   /**
    * @param {string} respSeleccionada la respuesta seleccionada
    * @return {boolean} retorna si la selección es correcta.
    */
   respuestaCorrecta(respSeleccionada){
       return respSeleccionada === this.respCorrecta;
   }
}

export { Pregunta };

/*En esta clase desarrolamos la arquitectura del objeto "Pregunta" basando en la 
estructura de los datos a tratar, en este caso, el archivo datos.js
*/