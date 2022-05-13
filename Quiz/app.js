//@ts-check
import { Quiz } from "./modelos/Quiz.js";
import { UI } from "./modelos/UI.js"
import { preguntas } from "./datos/preguntas.js"

//Renderizamos la pagina
const renderizarPágina = (quiz, ui) =>{
    if(quiz.esFinal()){
        ui.mostrarPuntos(quiz.puntos)
    }else{
        console.log(quiz);
        ui.mostrarPregunta(quiz.getPregunta().texto)
        ui.mostrarProgreso(quiz.preguntaIndex + 1, quiz.preguntas.length);
        ui.mostrarRespuestas(quiz.getPregunta().opciones, (actualRespuesta) => {
            quiz.comprobarRespuesta(actualRespuesta);
            renderizarPágina(quiz, ui); //despues de responder volvemos a repintar con la nueva pregunta 
        });
    }
}


/*Funcion principal */
function main(){
    const quiz = new Quiz(preguntas);
    const ui = new UI();

    renderizarPágina(quiz, ui);
}

main();

/*
La clase App es el archivo principal para arrancar la lógica del proyecto. 
*/