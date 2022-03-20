const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;
let statusApp = "stop";

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

renderTasks(); //realizar Tareas
renderTime(); //comenzar Temporizador

form.addEventListener("submit", (e) => {
  e.preventDefault(); //desactibamos el sumbit que viene por defecto
  if (itTask.value !== "") {
    createTask(itTask.value);
    itTask.value = "";
    renderTasks();
  }
});

//crear tareas
function createTask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(2),
    title: value,
    completed: false,
  };

  tasks.unshift(newTask);
}

//realizar tareas
function renderTasks() {
  const html = tasks.map((task) => {
    return `
        <div class="task">
        <div class="completed">${
          task.completed
            ? "<span class='done'>Done</span>"
            : `<button class="start-button" data-id="${task.id}">Start</button></div>`
        }
            <div class="title">${task.title}</div>
        </div>`;
  });
  const tasksContainer = document.querySelector("#tasks");
  tasksContainer.innerHTML = html.join("");

  const startButtons = document.querySelectorAll(".task .start-button");
  startButtons.forEach((startButton) => {
    startButton.addEventListener("click", () => {
      if (!timer) {
        startButtonHandler(startButton.getAttribute("data-id"));
        startButton.textContent = "In progress...";
      }
    });
  });
}

//presionar boton de inicio
function startButtonHandler(id) {
  time = 0.5 * 60;
  current = id;
  const taskId = tasks.findIndex((task) => task.id === id);
  document.querySelector("#time #taskName").textContent = tasks[taskId].title;
  timer = setInterval(() => {
    timerHandler(id);
  }, 1000);
}

//manipular Temporizador
function timerHandler(id = null) {
  time--;
  renderTime();
  if (time === 0) {
    markComplete(id);
    clearInterval(timer);
    renderTasks();
    startBreak();
  }
}

//Marcar completado
function markComplete(id) {
  const taskId = tasks.findIndex((task) => task.id === id);
  tasks[taskId].completed = true;
}

//Comenzar Descanso
function startBreak() {
  time = 1 * 60;
  document.querySelector("#time #taskName").textContent = "Break";
  timerBreak = setInterval(timerBreakHandler, 1000);
}

//corriendo tiempo muerto
function timerBreakHandler() {
  time--;
  renderTime();
  if (time === 0) {
    clearInterval(timerBreak);
    current = null;
    document.querySelector("#time #taskName").textContent = "";
    renderTime();
  }
}

//Comenzar temporizador
function renderTime() {
  const timeDiv = document.querySelector("#time #value");
  const minutes = parseInt(time / 60);
  const seconds = parseInt(time % 60);
  timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}
