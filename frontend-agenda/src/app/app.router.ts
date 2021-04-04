import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {CommonModule} from '@angular/common'
import {GetUsuariosComponent} from './views/get_usuarios/get_usuarios.component';
import {LoginComponent} from './views/login/login.component';

const routes: Routes = [
    {
	    path: 'login',
	 component: LoginComponent
    },
    
    {
        path: 'listado_usuario',
        component: GetUsuariosComponent
    },

];

@NgModule({
    imports:[CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{}

