export class UI{

    constructor(){

    }

    /**
     * @param {string} texto
     */
    mostrarPregunta(texto){
        const textoPregunta = document.getElementById("question");
        textoPregunta.innerHTML = texto;
    }

    /**
     * @param {string[]} opciones
     */
    mostrarRespuestas(opciones, callback){
        const contenedorOpciones = document.getElementById("choices");
        contenedorOpciones.innerHTML = ""; //This allows us to erase previous answers when we move on to the next question.

        for(let i = 0; i < opciones.length; i++){
            const boton = document.createElement("button"); //createElement(): nos permite crear elementos html: sapn, button, h1, etc.
            boton.addEventListener("click", () => callback(opciones[i]));
            boton.className = "button"; //definimos la class="button" del button
            boton.innerText = opciones[i]; //Dibujamos las respuestas correspondiente a su pregunta
            contenedorOpciones.append(boton);

        }
       
    }

    mostrarPuntos(puntos){
        const finQuiz = `
        <h1>Resultado</h1>
        <h2 id="puntos">Tus puntos: ${puntos}</h2>`;
        
        const elemento = document.getElementById("quiz");
        elemento.innerHTML = finQuiz;
    }

    mostrarProgreso(indexActual, total){
        let elemento = document.getElementById("progress");
        elemento.innerHTML = `Pregunta ${indexActual} de ${total}`
    }
}

/**
 * La clase UI nos permite pintar 
 */