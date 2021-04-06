import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
    selector: 'get_agenda',
    templateUrl: './get_agenda.component.html'
})

export class GetAgendaComponent{
 public listado_agenda: any[];

 public Agenda = {
     idagenda:"",
     fecha:"",
     actividad:"",
     descripcion:""
 }

 constructor(public service:AppService){
     this.listado_agenda = [];
 }
 
 ngOnInit(){
     this.get_agenda();
 }

 get_agenda(){
     var response;
     this.service.get_agenda().subscribe(
         data=>response=data,
         err => {
             console.log("Error al consultar el servicio");
         },
         ()=>{            
             this.listado_agenda = response;
         }
     )

 }


 insert_agenda(){
    var response;
    this.service.insert_agenda(this.Agenda).subscribe(
        data=>response=data,
        err => {
            console.log("Error al consultar el servicio");
        },
        ()=>{            
            this.Agenda = {
                idagenda:"",
                fecha:"",
                actividad:"",
                descripcion:""
            }
            this.get_agenda();
        }
    )
 }

 getDatosAgendaForm(v){
     this.Agenda = {
         idagenda: v.idagenda,
         fecha: v.fecha,
         actividad: v.actividad,
         descripcion: v.descripcion
     }
 }

 update_agenda(){
    var response;
    this.service.update_agenda(this.Agenda).subscribe(
        data=>response=data,
        err => {
            console.log("Error al consultar el servicio");
        },
        ()=>{            
            this.Agenda = {
                idagenda:"",
                fecha:"",
                actividad:"",
                descripcion:""
            }
            this.get_agenda();
        }
    )

 }

 delete_agenda(idagenda){
    var response;
    var load={
        idagenda:idagenda
    }
    this.service.delete_agenda(load).subscribe(
        data=>response=data,
        err => {
            console.log("Error al consultar el servicio");
        },
        ()=>{            
            this.get_agenda();
        }
    )
 }
 
}
