const tasks = []; //almacenanos las diferentes tareas
let time = 0; //cuenta regresiva
let timer = null; 
let timerBreak = null; //tiempo de descanso
let current = null; //no dice la tarea actual que estamos realizando

const bAdd = document.querySelector("bAdd");
const itTask = document.querySelector("itTask");
const form = document.querySelector("form");

form.addEventListener('submit', e =>{
    e.preventDefault(); //anulamos el funcionamiento nativo y no se enviará el formulario.

    if(itTask.value !== '' ){

        //funcion para crear tarea
        createTask(itTask.value);
        itTask.value = '';
        renderTasks();
    }
});

//funcion para crear tareas
function createTask(value){
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false
    };

    //lo agregamos al arreglo
    tasks.unshift(newTask)
}

/*funcion para renderizar las tareas. 
Esta funcion nos vas a permitir tomar cada una de las tareas task[...]
y generar un html que al final voy a inyectar en un contenedor*/
function renderTasks(){
    const html = tasks.map(task =>{
        return `
            <div class="task">
                <div class="completed">${
                    task.completed 
                    ? `<span class="done">Done</span>` 
                    : `<button class="start-button" data-id="${task.id}">Start</button>`
                }</div>
                <div class="title">${task.title}</div>
            </div>
        `;
    });

    const tasksContainer = document.querySelector("tasks");
    tasksContainer.innerHTML = html.join('');
}