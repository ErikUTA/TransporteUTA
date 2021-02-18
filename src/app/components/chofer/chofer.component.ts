import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaxiutaService } from 'src/app/services/taxiuta.service';
import { Chf } from '../../models/choferes';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {

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

  loginChofer() {
    this.srv.loginChofer(this.login).subscribe (
      datos => {
        if(datos['resultado'] == 'OK') {          
          this.resultado = true;
          alert('Datos ingresados correctamente.');
          this.router.navigate(['/menuChofer'])
        } else {
          this.mostrar = true;
          this.resultado = false;
          this.mensaje = 'Los datos son incorrectos.'                                                         
        }
      }
    );
  }  


}
