export class Tiempo{

    constructor(ciudad){
        this.apiKey = '0c3d3681bc1fb276a0fdbd45b75a2429'
        this.ciudad = ciudad;
        //this.codigoPais = codigoPais;
    }

    async getTiempo(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad}&appid=${this.apiKey}`
        const respuesta = await fetch(URI); //fetch(): metodo que nos permita hacer peticiones.
        const datos = await JSON.stringify(respuesta);
        return JSON.parse(datos);
    }

    cambioLocalizacion(ciudad){
        this.ciudad = ciudad;
       // this.codigoPais = codigoPais;
    }
}