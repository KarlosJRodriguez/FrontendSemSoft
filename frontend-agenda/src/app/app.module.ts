import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { AppService } from './app.service';
import {GetUsuariosComponent} from './views/get_usuarios/get_usuarios.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { GetAgendaComponent } from './views/get_agenda/get_agenda.component';
import { UsuariosComponent } from './view/usuarios/usuarios.component';
import { MenuComponent } from './view/menu/menu.component';
import { LoginGuard } from './apploginguard';

@NgModule({
  declarations: [
    AppComponent,
    GetUsuariosComponent,
    GetAgendaComponent,
    LoginComponent,
    UsuariosComponent,
    MenuComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
