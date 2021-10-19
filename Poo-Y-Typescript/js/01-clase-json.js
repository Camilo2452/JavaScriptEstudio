var bicicleta = {
    color: 'rojo',
    modelo:'BMX',
    frenos: 'De Disco',
    velocidadMax:'60km',
    CambiarColor: function(nuevo_color){
        //bicicleta.color= nuevo_color
        this.color = nuevo_color;
        console.log(this);
    }
}

bicicleta.CambiarColor('rojo');
