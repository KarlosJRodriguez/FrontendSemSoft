import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
    selector: 'get_usuario',
    templateUrl: './get_usuarios.component.html'
})

export class GetUsuariosComponent{
 public listado_usuario: any[];

 public Usuario = {
     username:"",
     password:""
 }

 constructor(public service:AppService){
     this.listado_usuario = [];
 }
 
 ngOnInit(){
     this.get_usuarios();
 }

 get_usuarios(){
     var response;
     this.service.get_usuarios().subscribe(
         data=>response=data,
         err => {
             console.log("Error al consultar el servicio");
         },
         ()=>{            
             this.listado_usuario = response;
         }
     )

 }


 insert_usuario(){
    var response;
    this.service.insert_usuario(this.Usuario).subscribe(
        data=>response=data,
        err => {
            console.log("Error al consultar el servicio");
        },
        ()=>{            
            this.Usuario = {
                username:"",
                password:""
            }
            this.get_usuarios();
        }
    )
 }

 getDatosUsuariosForm(v){
     this.Usuario = {
         username: v.username,
         password: v.password
     }
 }
}
