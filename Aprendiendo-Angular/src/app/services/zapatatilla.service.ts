import { Injectable } from "@angular/core";
import {  Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillasServices{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80,'Reebock melas', 'Rojas', true),
            new Zapatilla('Nike', 700,'TherMain', 'Negras', true),
            new Zapatilla('Nike Sayayin', 700,'Melosky', 'Grises', true),
            new Zapatilla('Adidas', 60,'Reborrn', 'Blancas', true),
            new Zapatilla('New Balance', 70,'Carnage', 'Azules', false)
        ];
    }

    getText(){
        return "Hola Mundo desde un servicio";
    }
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;

    }
}