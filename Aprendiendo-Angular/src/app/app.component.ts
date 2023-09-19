import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Hola Mundo, ando Aprendiendo Angular';
  public mostar_videojuegos: boolean = true;



  ocultarVideojuego(value:boolean){
    this.mostar_videojuegos = value;
  }
}
