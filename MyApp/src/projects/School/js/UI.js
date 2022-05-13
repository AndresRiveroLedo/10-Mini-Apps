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
        switch(element.name){
            case "freeSubscribe":
                document.getElementById("appFree").style.visibility = "visible";
                document.getElementById("appBasic").style.visibility = "hidden";
                document.getElementById("appExpert").style.visibility = "hidden"
                this.showMessage("The Card Free Subscribre is visible", "success");
                break;
            case "basicSubscribe":
                document.getElementById("appFree").style.visibility = "hidden";
                document.getElementById("appExpert").style.visibility = "hidden"
                document.getElementById("appBasic").style.visibility = "visible";
                this.showMessage("The Card Basic Subscribre is visible", "success");
                break;
            case "expertSubscribe":
                document.getElementById("appExpert").style.visibility = "visible"
                document.getElementById("appFree").style.visibility = "hidden";
                document.getElementById("appBasic").style.visibility = "hidden";
                this.showMessage("The Card Expert Subscribre is visible", "success");
                break;
            default:
                this.showMessage("Impossible add the card", "danger");


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
