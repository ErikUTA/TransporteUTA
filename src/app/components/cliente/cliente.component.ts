import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaxiutaService } from '../../services/taxiuta.service';
import { Cli } from '../../models/clientes'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private srv: TaxiutaService, private router: Router) { }

  ngOnInit(): void {
  }

  login = {
    Correo: null,
    Contrasena: null
  }

  resultado: boolean;
  mensaje: string;
  mostrar: boolean;

  loginCliente() {
    this.srv.loginCliente(this.login).subscribe (
      datos => {
        if(datos['resultado'] == 'OK') {          
          this.resultado = true;
          alert('Datos ingresados correctamente.');
          this.router.navigate(['/menuCliente'])
        } else {
          this.mostrar = true;
          this.resultado = false;
          this.mensaje = 'Los datos son incorrectos.'                                                         
        }
      }
    );
  } 

}
