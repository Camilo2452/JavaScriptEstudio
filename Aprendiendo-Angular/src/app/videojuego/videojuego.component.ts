import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl:'./videojuego.component.html'
})

export class VideoJuegoComponent{
    public titulo: string;
    public estado: string;
    
    constructor(){
        this.titulo = 'Componente de Videojuegos';
        this.estado = 'Estado Alto';
       // console.log('Cargado Correctamente');
    }
    ngOnInit(){
       // console.log('OnInit, Activado')
    }

    ngDoCheck(){
        //console.log('Do Check Activado');
    }

    OnDestroy(){
        //console.log('On Destroy Activado');
    }

    cambiarTitulo(){
        this.titulo = 'Nuevo Titulo del Componente';
    }
}