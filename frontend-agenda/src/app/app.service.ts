import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpParams, HttpUrlEncodingCodec, HttpHeaders, HttpParameterCodec, HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {
    private endpoint: string;

    constructor(private httpClient: HttpClient){
        this.endpoint = "http://"+window.location.hostname+":8200/api"
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