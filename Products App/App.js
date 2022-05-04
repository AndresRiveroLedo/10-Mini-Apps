import { Producto } from "./modelos/Producto.js"
import { UI } from "./modelos/UI.js"

document
.getElementById("product-form")
.addEventListener("submit", function(e){
    //Anulamos el comportamiento predeterminado del formulario
    e.preventDefault();

    //Tomamos los valores del formulario
    const nombre = document.getElementById("name").value, 
    precio = document.getElementById("price").value, 
    anio = document.getElementById("year").value;
    
    //Creamos un objeto prodcuto
    const producto = new Producto(nombre, precio, anio);
    
    //Creamos una instancia
    const ui = new UI();

    //Validamos el Input
    if(nombre === "" || precio === "" || anio === ""){
       return ui.mostrarMensaje("Por favor, rellena todos los campos", "danger")
    }

    //Guardamos el producto
    ui.aniadirProducto(producto);
    ui.mostrarMensaje("Producto añadido satisfactoriamente", "success");
    ui.resetFormulario();
});

document.getElementById("product-list").addEventListener("click", (e) =>{
    const ui = new UI();
    ui.borrarProducto(e.target);
    e.preventDefault();
});