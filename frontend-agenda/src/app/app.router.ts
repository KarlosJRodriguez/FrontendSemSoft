import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {CommonModule} from '@angular/common'
import {GetUsuariosComponent} from './views/get_usuarios/get_usuarios.component';
import {LoginComponent} from './views/login/login.component';
import { GetAgendaComponent } from './views/get_agenda/get_agenda.component';

const routes: Routes = [
    {
	    path: 'login',
	 component: LoginComponent
    },
    
    {
        path: 'listado_usuario',
        component: GetUsuariosComponent
    },

    {
        path: 'listado_agenda',
        component: GetAgendaComponent
    },

];

@NgModule({
    imports:[CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{}

