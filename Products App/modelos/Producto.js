/**
 * Producto class
 */

export class Producto{

    /**
     * @param {string} nombre el nombre del producto
     * @param {number} precio el precio del producto
     * @param {number} anio el anio del producto
     */
    constructor(nombre, precio, anio){
        this.nombre = nombre;
        this.precio = precio;
        this.anio = anio;
    }

}