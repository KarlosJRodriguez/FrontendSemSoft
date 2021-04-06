import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpParams, HttpUrlEncodingCodec, HttpHeaders, HttpParameterCodec, HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {
    private endpoint: string;

    constructor(private httpClient: HttpClient){
        this.endpoint = "http://"+window.location.hostname+":8200/api"
    }
    
    get_agenda():Observable<any>{
        return this.httpClient.get(this.endpoint+"/get_agenda", 
        {responseType:'json'})
    }

    insert_agenda(load):Observable<any>{
        return this.httpClient.post(this.endpoint+"/insert_agenda", load,
        {responseType:'json'})
    }

    update_agenda(load):Observable<any>{
        return this.httpClient.put(this.endpoint+"/update_agenda", load,
        {responseType:'json'})
    }

   delete_agenda(load):Observable<any>{
        return this.httpClient.delete(this.endpoint+"/delete_agenda", {params:load,
        responseType:'json'});
    }

    login(payload):Observable<any>{
        return this.httpClient.post(this.endpoint + "/login", payload, {responseType: 'json'});
      }
    
    set_session(token){
        localStorage.setItem("vehiculo", JSON.stringify(token));
      }
    
    insert_usuario(load):Observable<any>{
        return this.httpClient.post(this.endpoint+"/insert_usuario", load,
        {responseType:'json'})
    }

    get_usuarios():Observable<any>{
        return this.httpClient.get(this.endpoint+"/get_usuarios", 
        {responseType:'json'})
    }

}