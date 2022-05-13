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

const ui = new UI();
const btnFreeStudent = document.querySelector(".btnFreeStudent");
const btnBasicStudent = document.querySelector(".btnBasicStudent");
const btnExpertStudent = document.querySelector(".btnExpertStudent");

window.addEventListener('DOMContentLoaded', (e) =>{
   //ocultamos la tarjeta del formulario
    document.getElementById("appFree").style.visibility = "hidden";
    document.getElementById("appBasic").style.visibility = "hidden"

    btnFreeStudent.innerHTML = `
    <a href="#" class="btn btn-danger" name="freeSubscribe">subscribe</a>
    `;

    btnBasicStudent.innerHTML = `
    <a href="#" class="btn btn-danger" name="basicSubscribe">subscribe</a>
    `;

    btnExpertStudent.innerHTML = `
    <a href="#" class="btn btn-danger" name="expertSubscribe">subscribe</a>
    `;

    
});

btnFreeStudent.addEventListener("click", (e)=>{

    ui.showCardStudent(e.target);
});

btnBasicStudent.addEventListener("click", (e)=>{
    
    ui.showCardStudent(e.target);
});

btnExpertStudent.addEventListener("click", (e) =>{
    ui.showCardStudent(e.target);
});

//Student
document
.getElementById("student-form")
.addEventListener("submit", function(e){
    //Anulamos el comportamiento predeterminado del formulario
    e.preventDefault();

    //Tomamos los valores del formulario
    const name = document.getElementById("name").value, 
    surname = document.getElementById("surname").value, 
    email = document.getElementById("email").value;
    
    //Creamos un objeto student
    const student = new Student({name, surname, email});

    //Validamos el Input
    if(name === "" || surname === "" || email === ""){
       return ui.showMessage("Please, fill in all the fields", "danger")
    }

    //Guardamos el producto
    ui.addStudent(student);
    ui.showMessage("Student successfully added", "success");
    ui.resetForm();
});

//Basic Student
document.getElementById("basic-form").addEventListener("submit", function(e){

    e.preventDefault();

    //tomamos los valores del formulario
    const name = document.getElementById("nameBasic").value;
    const surname = document.getElementById("surnameBasic").value;
    const email = document.getElementById("emailBasic").value;

    //Creamos el objeto studentBasic
    const studentBasic = new BasicStudent({name, surname, email});

    if(name === "" || surname === "" || email === ""){
        return ui.showMessage("Please, fill in all the fields", "danger")
     }

     //Guardamos el producto
    ui.addStudent(studentBasic);
    ui.showMessage("Student successfully added", "success");
    ui.resetForm();
});

//Expert Student

document.getElementById("student-list").addEventListener("click", (e) =>{

    ui.deleteStudent(e.target);
    e.preventDefault();
});


