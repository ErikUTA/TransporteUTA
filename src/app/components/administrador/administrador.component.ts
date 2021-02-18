import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { TaxiutaService } from 'src/app/services/taxiuta.service';
import { Adm } from '../../models/admin';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: [ './administrador.component.css']  
})
export class AdministradorComponent implements OnInit {
  

  constructor(private srv: TaxiutaService, private router: Router, private cookies: CookieService) {
    
  }
  
  ngOnInit(): void {    
      
  }

  

  admin: Adm = new Adm;
  revisar: any;
  form: FormGroup;

  email: string;
  password: string;

  login = {
    Correo: null,
    Contrasena: null
  }

  resultado: boolean;
  mensaje: string;
  mostrar: boolean;

  loginAdmin() {
    this.srv.loginAdmin(this.login).subscribe (
      datos => {
        if(datos['resultado'] == 'OK') {          
          this.resultado = true;
          alert('Datos ingresados correctamente.');
          this.router.navigate(['/menuAdmin'])
        } else {
          this.mostrar = true;
          this.resultado = false;
          this.mensaje = 'Los datos son incorrectos.'                                                         
        }
      }
    );
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

    

  }


