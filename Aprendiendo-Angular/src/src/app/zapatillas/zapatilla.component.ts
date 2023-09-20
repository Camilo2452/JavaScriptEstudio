import { Component, OnInit} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl:'./zapatilla.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de Zapatilla';
    public zapatillas: Array<Zapatilla>;
    
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80,'Reebock melas', 'Rojas', true),
            new Zapatilla('Nike', 700,'TherMain', 'Negras', true),
            new Zapatilla('Adidas', 900,'Reborrn', 'Blancas', true)
        ];
    }

    ngOnInit(): void {
        console.log(this.zapatillas);
    }
}