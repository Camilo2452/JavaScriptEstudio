import { Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import {ZapatillasServices} from"../services/zapatatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl:'./zapatilla.component.html',
    providers:[ZapatillasServices]
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de Zapatilla';
    public zapatillas!: Array<Zapatilla>;
    public marcas: String[];
    public color:string;
    public mi_marca: string;


    
    constructor(
        private _zapatillasServices: ZapatillasServices
    ){
       
       
        this.mi_marca ='Fila';
        this.color= 'orange';
        this.marcas= new Array;
    }

    ngOnInit(): void {
        this.zapatillas = this._zapatillasServices.getZapatillas();
        alert(this._zapatillasServices.getText());
        //console.log(this.zapatillas);
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
