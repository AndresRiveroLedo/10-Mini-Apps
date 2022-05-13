import {Teacher} from "./models/Teacher.js";
import {Course} from "./models/Course.js";
import {Lesson} from "./models/Lesson.js";
import {LearningPath} from "./models/LearningPath.js";
import {Student} from "./models/Student.js";
import {FreeStudent} from "./models/FreeStudent.js";
import {BasicStudent} from "./models/BasicStudent.js"
import {ExpertStudent} from "./models/ExpertStudent.js"
import { TeacherStudent } from "./models/TeacherStudent.js";
import {UI} from "./UI.js";
import {Producto} from "./models/Producto.js"

const btnFreeStudent = document.querySelector(".btnFreeStudent");

window.addEventListener('DOMContentLoaded', (e) =>{
   
    document.getElementById("App").style.visibility = "hidden";
    btnFreeStudent.innerHTML = `
    <a href="#" class="btn btn-danger" name="freeSubscribe">subscribe</a>
    `;
});

btnFreeStudent.addEventListener("click", (e)=>{
    const ui = new UI();
    ui.showCardStudent(e.target);
});


document
.getElementById("student-form")
.addEventListener("submit", function(e){
    //Anulamos el comportamiento predeterminado del formulario
    e.preventDefault();

    //Tomamos los valores del formulario
    const name = document.getElementById("name").value, 
    surname = document.getElementById("surname").value, 
    email = document.getElementById("email").value;
    
    //Creamos un objeto prodcuto
    const student = new Student({name, surname, email});
    
    //Creamos una instancia
    const ui = new UI();

    //Validamos el Input
    if(name === "" || surname === "" || email === ""){
       return ui.showMessage("Please, fill in all the fields", "danger")
    }

    //Guardamos el producto
    ui.addStudent(student);
    ui.showMessage("Student successfully added", "success");
    ui.resetForm();
});

document.getElementById("student-list").addEventListener("click", (e) =>{
    const ui = new UI();
    ui.deleteStudent(e.target);
    e.preventDefault();
});


