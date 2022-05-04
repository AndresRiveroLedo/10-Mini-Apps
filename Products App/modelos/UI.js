/**
 * Clase de Interfaz de Usuario 
 */

export class UI{

    /**
     * Añadimos un nuevo producto
     * @param {Producto} producto un nuevo producto añadido
     */
    aniadirProducto(producto){
        const listaProducto = document.getElementById("product-list");
        
        const elemento = document.createElement("section");
        elemento.innerHTML = `
            <section class="card text-center mb-4">
                <section class="card-body">
                    <strong>Producto</strong>: ${producto.nombre} -
                    <strong>Precio</strong>: ${producto.precio} -
                    <strong>Anio</strong>: ${producto.anio}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </section>
            </section>
        `;
        listaProducto.appendChild(elemento);
    }

    /**
     * Reseteamos los valores del Formulario
     */
    resetFormulario(){
        document.getElementById("product-form").reset();
    }

    borrarProducto(elemento){
        if(elemento.name === "delete"){
            elemento.parentElement.parentElement.remove();
            this.mostrarMensaje("Producto ha sido borrado exitosamente", "success");
        }
    }

    mostrarMensaje(mensaje, claseCSS){
        const section = document.createElement("section");
        section.className = `alert alert-${claseCSS} mt-2`;
        section.appendChild(document.createTextNode(mensaje));

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