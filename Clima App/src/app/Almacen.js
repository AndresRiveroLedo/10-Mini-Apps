export class Almacen {
    
    
    constructor(){
        this.ciudad;
        this.ciudadAutamtica = 'London';
    }

    getDatosLocalizacion(){
        if(localStorage.getItem('city') === null){
            this.ciudad = this.ciudadAutamtica;
        }else{
            this.ciudad = localStorage.getItem('city');
        }

        /*if(localStorage.getItem('countryCode') === null){
            this.codigoPais = this.paisAutomatico;
        }else{
            this.codigoPais = localStorage.getItem('countryCode');
        }*/

    }

    setDatosLocalizacion(ciudad){
        localStorage.setItem('city', ciudad);
        //localStorage.setItem('countryCode', codigoPais)
    }

}