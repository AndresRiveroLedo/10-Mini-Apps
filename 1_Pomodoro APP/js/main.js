const tareas = [];
let tiempo = 0;
let temporizador = null;
let tiempoMuerto = null;
let evento = null;
let estadoApp = "stop";

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("itTask");
const form = document.querySelector("form");

realizarTareas();
comenzarTemporizador();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(itTask.value !== "") {
    crearTareas(itTask.value);
    itTask.value = "";
    realizarTareas();
  }
});

function crearTareas(valor){
  const nuevaTarea = {
    id: (Math.random() * 100).toString(36).slice(2),
    titulo: valor,
    completado: false,
  };

  tareas.unshift(nuevaTarea);

}

function realizarTareas(){
  const html = tareas.map((tarea) =>{
    return `
    <div class="task">
    <div class="completed">${
        tarea.completado
        ? "<span class='done'>Done</span>"
        : `<button class="start-button" data-id="${tarea.id}">Start</button></div>`
    }
        <div class="title">${tarea.titulo}</div>
      </div>`;
  });

  const contenedorTareas = document.querySelector("#tasks");
  contenedorTareas.innerHTML = html.join("");

  const inicioBotones = document.querySelectorAll(".task .start-button");
  inicioBotones.forEach((boton) =>{
    boton.addEventListener("click", () =>{
      if(!timer){
        presionarBoton(boton.getAttribute("data-id"));
        boton.textContent = "In progress...";
      }
    });
  });
}

function presionarBoton(id){
  tiempo = 0.5 * 60;
  evento = id;
  const idTarea = tareas.findIndex((tarea) => tarea.id === id);
  document.querySelector("#time #taskName").textContent = tareas[idTarea].title;
  temporizador = introducirValor(() =>{
   manipularTemporizador(id);
  }, 1000);
}

function manipularTemporizador(id = null){
  tiempo--;
  comenzarTemporizador();
  if(tiempo === 0){
    marcarCompletado(id);
    limpiarIntervalo(temporizador);
    realizarTareas();
    comenzarDescanso();
  }
}

function marcarCompletado(id){
  const idTarea = tareas.findIndex((tarea) => tarea.id === id);
  tareas[idTarea].completado = true;
}

function comenzarDescanso(){
  tiempo = 1* 60;
  document.querySelector("#time #taskName").textContent = "Descanso";
  tiempoMuerto = introducirValor(marcarTiempoMuerto, 1000);
}

function marcarTiempoMuerto(){
  time--;
  comenzarTemporizador();
  if(time === 0){
    limpiarIntervalo(tiempoMuerto);
    evento = null;
    document.querySelector("#time #taskName").textContent = "";
    comenzarTemporizador();
  }
  
}

function comenzarTemporizador() {
  const tiempoDiv = document.querySelector("#time #value");
  const minutos = parseInt(tiempo / 60);
  const segundos = parseInt(tiempo % 60);
  tiempoDiv.textContent = `${minutos < 10 ? "0" : ""}${minutos}:${
    segundos < 10 ? "0" : ""
  }${segundos}`;
}