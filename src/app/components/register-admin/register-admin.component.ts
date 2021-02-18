import { Component, OnInit } from '@angular/core';
import { TaxiutaService } from '../../services/taxiuta.service';
import { Adm } from '../../models/admin';
import { NgForm } from '@angular/forms';
import { Chf } from 'src/app/models/choferes';
import { ids } from 'src/app/models/id';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  constructor(private taxi: TaxiutaService) { }
 
  ngOnInit(): void {
    this.verAdmin(); 
    this.verChofer();
  } 

  administrador: any;
  admin: any;
  choferes: any;    
  informA: Adm = new Adm;
  informaC: Chf = new Chf;
  inf: ids = new ids;
  id: any;
  
  
  verAdmin(){
    this.taxi.getAdmin().subscribe((data:any) => {
      this.administrador = data; 
      console.log(this.administrador);
    });
  }
  
  verChofer(){
    this.taxi.getChofer().subscribe((data:any) => {
      this.choferes = data; 
      console.log(this.choferes);
    });
  } 

  registrarAdmin(form: NgForm){
    this.taxi.postAdmin(this.informA).subscribe(data => {      
      if (data['resultado'] == 'OK'){
          alert(data['mensaje']);
        }
        console.log(data);           
    });
  }

  registrarChofer(form: NgForm){
    this.taxi.postChofer(this.informaC).subscribe(data => {      
      if (data['resultado'] == 'OK'){
          alert(data['mensaje']);
      }
      console.log(data);           
    });
  }
  
  modAdmin(form: NgForm){
    this.taxi.putAdmin(this.inf).subscribe((data:any) => {
      this.inf = this.id;
      console.log(this.inf);
    })
  }

  modChofer(form){
    this.taxi.putChofer(this.id).subscribe((data:any) => {
      if (data['resultado'] == 'OK'){
        alert(data['mensaje']);
      }
      console.log(data); 
    })
  }

 
  guardarID(sol){
      this.id = sol;
      console.log(this.id);        
  }


  deleteAdmin(){
    this.taxi.deleteAdmin().subscribe((data:any) => {
      if (data['resultado'] == 'OK'){
        alert(data['mensaje']);
      }
      console.log(data);           
    })
  }

  deleteChofer(){
    this.taxi.deleteChofer().subscribe((data:any) => {
      if (data['resultado'] == 'OK'){
        alert(data['mensaje']);
      }
      console.log(data);           
    })
  }



}
