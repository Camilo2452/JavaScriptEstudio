import { Component } from '@angular/core';
import { configuracion} from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hola Mundo, ando Aprendiendo Angular';
  public descripcion: string;
  public mostar_videojuegos: boolean = true;
  public config: any;

  constructor(){
    this.config = configuracion;
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
  }


  ocultarVideojuego(value:boolean){
    this.mostar_videojuegos = value;
  }
}
