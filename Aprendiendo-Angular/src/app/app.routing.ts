//Importar modulos del router de Angular
import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; 
//Importar Componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatilla.component";
import { VideoJuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { AppRoutingModule } from "./app-routing.module";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";
//Array de rutas
const appRoutes: Routes=[
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'zapatillas', component:ZapatillasComponent},
    {path:'videojuegos', component:VideoJuegoComponent},
    {path:'cursos', component:CursosComponent},
    {path:'cursos/:nombre/:followers', component:CursosComponent},
    {path:'externo', component:ExternoComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'**',component:HomeComponent}
];

//Exportar el modulo del Router

export const appRoutinProvider: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);