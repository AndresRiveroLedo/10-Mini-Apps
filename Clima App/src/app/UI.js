import {Tiempo} from "./Tiempo.js"

export class UI{


    constructor(){
        this.localizacion = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humedad = document.getElementById('weather-humidity')
        this.viento = document.getElementById('weather-wind')
    }

    /**
     * 
     * @param {Tiempo} weather 
     */
    actualizar(weather){
        console.log(weather);
        this.localizacion.textContent = weather.name + ' / ' + weather.id;
        this.desc.textContent = weather.weather[0]['description'];
        this.string.textContent = weather.main.temp + ' °C';
        this.humedad.textContent = 'Humedad: ' + weather.main.humidity + '°C';
        this.viento.textContent = 'Velocidad Viento ' + weather.wind.speed + ' m/s';
    }
}