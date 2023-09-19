//Interfaz

interface CamisetaBase{
    setColor(color);
    getColor(color);
}

//Decorador
function estampar (logo:string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " +logo);
        }         
        }
    }

//Clase (Molde del Objeto)
@estampar('Arturo Calle')
class Camiseta implements CamisetaBase{

    //Propiedades (Caracteristicas del Objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

//Metodo (Funciones o Acciones del Objeto)
    
constructor(color, modelo, marca, talla, precio){
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;

}

        public setColor(color){
            this.color = color;
    }

        public getColor(){
        return this.color;
    }

}

/**camiseta.color = 'Rojo';
camiseta.modelo = 'Manga Larga';
camiseta.marca = 'Nika';
camiseta.talla = 'L';
camiseta.precio = '10';*/


//camiseta.getColor

class Sudadera extends Camiseta {
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}



var camiseta = new Camiseta('lorem', 'lorem', 'lorem', 'lorem',12);
console.log(camiseta);
camiseta.estampacion();
var sudadera_nike = new Sudadera("Rojo","Nigger");
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Amarillo");
console.log(sudadera_nike);