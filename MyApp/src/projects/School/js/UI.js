export class UI{

    /**
     * Añadimos un nuevo producto
     * @param {Student} student un nuevo producto añadido
     */
    addStudent(student){
        const listStudent = document.getElementById("student-list");
        
        const elemento = document.createElement("section");
        elemento.innerHTML = `
            <section class="card text-center mb-4">
                <section class="card-body">
                    <strong>Name</strong>: ${student.getName()} -
                    <strong>Surname</strong>: ${student.getName()} -
                    <strong>Email</strong>: ${student.getEmail()}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </section>
            </section>
        `;
        listStudent.appendChild(elemento);
    }

    /**
     * Reseteamos los valores del Formulario
     */
    resetForm(){
        document.getElementById("student-form").reset();
    }

   deleteStudent(element){
        if(element.name === "delete"){
            element.parentElement.parentElement.remove();
            this.showMessage("Product has been successfully deleted", "success");
        }
    }

    showCardStudent(element){
        if(element.name ==="freeSubscribe"){
            document.getElementById("App").style.visibility = "visible";
            this.showMessage("The card is visible", "success");
        }
    }

    showMessage(message, classCSS){
        const section = document.createElement("section");
        section.className = `alert alert-${classCSS} mt-2`;
        section.appendChild(document.createTextNode(message));

        //show in the DOM
        const container = document.getElementById("message")
     

        //insert Message in the UI
        container.append(section)

        //Borrar el mensaje después de 3 segundos
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 1000);

    }

}
/*
    addStudent(student){
        const listStudent = document.getElementById("student-list");

        const element = document.createElement("section");
        element.innerHTML=`
        <section class="card text-center mb-4">
            <section class="card-body">
                <strong>Producto</strong>: ${student.name} -
                <strong>Precio</strong>: ${student.surname} 
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </section>
        </section>
        
        `;

        listStudent.appendChild(element);
    }


    //Reseteamos los valores del formulario
    resetForm(){
        document.getElementById("student-form").reset();
    }

    eraseStudent(element){
        if(element.name === "delete"){
            element.parentElement.parentElement.remove();
            this.showMessage("The student has been deleted")
        }
    }

    showMessage(message, classCSS){
        const section = document.createElement("section");
        section.className = `alert alert-${classCSS} mt-2`;
        section.appendChild(document.createTextNode(message));

        //show in the DOM
        const contenedor = document.querySelector(".container")
        const app = document.getElementById("#App");

        //insert Message in the UI
        contenedor.insertBefore(section, app);

        //Borrar el mensaje después de 3 segundos
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 1000);

    }

}

*/