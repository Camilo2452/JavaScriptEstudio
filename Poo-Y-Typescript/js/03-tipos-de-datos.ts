//Tipos de Datos:

//String
let cadena : string = 'Hola Mundo';

//Int
let numero: number = 12;

//Bolean

let verdadero_falso: boolean = true;

//Any

let cualquiera: any = '666';
cualquiera = 99;

//Array

var idiomas: Array<string> = ['PHP','PHYTON','JAVA']
let year: number []= [1,2,3,4];
let ReGod: any []= ['123', 4, 5, 6];


//Tipo de Dato multiples

//String-Int
let prueba : string | number = 'Hola Mundo'+'-'+2;

//Tipo de Datos Personalizados

type neutral = string | number;

let dateusers:neutral = 12 +' 13';

var num_1 = 10;
var num_2 = 12;

    if (num_1 == 10) {
     let num_1 = 44;
     var num_2 = 55; 
     
     console.log(num_1,num_2);
    }

    console.log(num_1,num_2);
//console.log(cadena, '-', numero, '-', verdadero_falso, '-',cualquiera, '-', idiomas, '-', year,'-',ReGod,'-',prueba, '-', dateusers);