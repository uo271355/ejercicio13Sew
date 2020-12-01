"use strict";
class Mapa{
	constructor(){
		
	}
    leerArchivos(archivo){
        var fichero = archivo[0];
        if (archivo.length == 1) {
            var oviedo = {
                lat: 43.3672702, 
                lng: -5.8502461
            };
            var opciones = {
                zoom: 8,
                center: oviedo
            };
            this.mapa = new google.maps.Map(document.getElementById('mapa'), opciones);
            var mapa = this.mapa;
            var lector = new FileReader();
            lector.onload = function () {
                var texto = lector.result;
                var geoJson = JSON.parse(texto);
                mapa.data.addGeoJson(geoJson);
            }      
            lector.readAsText(fichero);
        }
        else {
            alert('No funciona correctamente');
        }
    }
}
var mapa = new Mapa();