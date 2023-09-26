import { Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl:'./zapatilla.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de Zapatilla';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color:string;
    public mi_marca: string;


    
    constructor(){
       
        this.mi_marca ='';
        this.color= 'orange';
        this.marcas= new Array;
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80,'Reebock melas', 'Rojas', true),
            new Zapatilla('Nike', 700,'TherMain', 'Negras', true),
            new Zapatilla('Nike Sayayin', 700,'Melosky', 'Grises', true),
            new Zapatilla('Adidas', 60,'Reborrn', 'Blancas', true),
            new Zapatilla('New Balance', 70,'Carnage', 'Azules', false)
        ];
    }

    ngOnInit(): void {
        console.log(this.zapatillas);
        this.getMarcas();
    }
        
        getMarcas(){
            this.zapatillas.forEach((zapatilla, index) =>{
                if(this.marcas.indexOf(zapatilla.marca)<0){
                    this.marcas.push(zapatilla.marca);
                }
        });
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.mi_marca);  
      }
    addMarca(){
        this.marcas.push(this.mi_marca);
      }
      borrarMarca(index:any){
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    }
    onBlur(){
        console.log('Has Salido del input');
    }
    mostrarPalabra() {
        alert(this.mi_marca);  
      }

    }
