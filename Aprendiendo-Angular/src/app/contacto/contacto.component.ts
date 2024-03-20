import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/usuario';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;
  constructor() { 
    this.usuario= new ContactoUsuario('','','','')
  }

  ngOnInit(): void {
  }

  onSubmit(form: { reset: () => void; }){
    form.reset();
    console.log("Evento Submit");
    console.log(this.usuario);
  }
}
