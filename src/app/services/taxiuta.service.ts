import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adm } from '../models/admin';
import { Chf } from '../models/choferes';
import { Cli } from '../models/clientes';
import { ids } from '../models/id';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class TaxiutaService {

  constructor(private http: HttpClient) { }


redirectUrl: string;
baseUrl:string = "http://localhost/conn/";

getClientes(){
  return this.http.get('http://localhost/conn/getCliente.php');
}

getChofer(){
  return this.http.get('http://localhost/conn/getChofer.php');
}

getAdmin(){
  return this.http.get('http://localhost/conn/getAdmin.php');
}

loginAdmin(login) {
  return this.http.post(`${this.baseUrl}loginadmin.php`, JSON.stringify(login));
}

loginChofer(login) {
  return this.http.post(`${this.baseUrl}loginchofer.php`, JSON.stringify(login));
}

loginCliente(login) {
  return this.http.post(`${this.baseUrl}logincliente.php`, JSON.stringify(login));
}

postCliente(cliente: Cli){
  return this.http.post('http://localhost/conn/postCliente.php', JSON.stringify(cliente));
}

postChofer(chofer: Chf){
  return this.http.post('http://localhost/conn/postChofer.php', JSON.stringify(chofer));
}

postAdmin(admin: Adm){
  return this.http.post('http://localhost/conn/postAdmin.php', JSON.stringify(admin));
}

putCliente(cliente: Cli){
  return this.http.put('http://localhost/conn/putCliente.php', JSON.stringify(cliente));
}

putChofer(chofer: Chf){
  return this.http.put('http://localhost/conn/putChofer.php', JSON.stringify(chofer));
}

putAdmin(admin: ids){
  return this.http.put('http://localhost/conn/putAdmin.php', JSON.stringify(admin));
}

deleteCliente(){
  return this.http.delete('http://localhost/conn/deleteCliente.php');
}
deleteChofer(){
  return this.http.delete('http://localhost/conn/deleteChofer.php');
}
deleteAdmin(){
  return this.http.delete('http://localhost/conn/deleteAdmin.php');
}


}
