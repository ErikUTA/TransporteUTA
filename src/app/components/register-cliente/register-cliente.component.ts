import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cli } from 'src/app/models/clientes';
import { TaxiutaService } from 'src/app/services/taxiuta.service';

@Component({
  selector: 'app-register-cliente',
  templateUrl: './register-cliente.component.html',
  styles: [
  ]
})
export class RegisterClienteComponent implements OnInit {

  constructor(private srv: TaxiutaService) { }

  ngOnInit(): void {
    this.verClientes();
  }

  registro: Cli = new Cli;
  clientes: any;
  id: any;

  registrarCliente(form: NgForm){
    this.srv.postCliente(this.registro).subscribe(data => {      
      if (data['resultado'] == 'OK'){
          alert(data['mensaje']);
      }
      console.log(data);           
    });
  }

  verClientes(){
    this.srv.getClientes().subscribe((data:any) => {
      this.clientes = data;
      console.log(this.clientes);
    })
  }

  deleteCliente(){
    this.srv.deleteCliente().subscribe((data:any) => {
      if (data['resultado'] == 'OK'){
        alert(data['mensaje']);
      }
      console.log(data);           
    })
  }

  modCliente(form){
    this.srv.putCliente(this.id).subscribe((data:any) => {
      if (data['resultado'] == 'OK'){
        alert(data['mensaje']);
      }
      console.log(data); 
    })
  }

  guardarIDCl(sol){
      this.id = sol;
      console.log(this.id);        
  }

}
