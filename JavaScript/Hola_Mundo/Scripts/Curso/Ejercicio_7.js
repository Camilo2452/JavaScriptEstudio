'use strict'

//Tabla de Multiplicar de un numero introducido


var numero = parseInt(prompt('Ingresa Un Numero', 0));

/*for(var i = 1; i <=10; i++){
    document.write(i+" x "+numero+" = "+(i*numero));
}*/
document.write("<h1>Tabla del "+numero+"</h1>");
for(var i = 1; i <= 10; i++){
    document.write(i+ " x " +numero+" = "+(i*numero)+"<br/>");
}

for(var c = 1; c <= 10; c++){
    document.write("<h1>Tabla del "+c+"</h1>")
    for(var i = 1; i <=10; i++){
        document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}