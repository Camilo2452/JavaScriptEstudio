import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.services';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesServices]
})
export class ExternoComponent implements OnInit {

  
  public user: any;
  public userId : any;
  public fecha : any;
  public new_user: any;
  public usuario_guardado:any;

  constructor(
    private _peticionesService:PeticionesServices
  ) {
    this.userId = 1;
      this.new_user={
            "name": "",
            "job": ""
        }
   }

  ngOnInit(): void {
    this.fecha =new Date(2008,5,4);
    this.cargaUsuario();
  }

  cargaUsuario(){
    
    this.user= false;
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
          this.user = result.data;
      },
      error=>{
         console.log(<any>error);
        
      }
    );
  }

  onSubmit(form: any ){
      this._peticionesService.addUser(this.new_user).subscribe(
        response => {
          this.usuario_guardado = response;
          form.reset();
        },
        error =>{
          console.log(<any>error)
        }
      );
  }

}
