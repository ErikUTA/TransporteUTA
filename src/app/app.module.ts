import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { ChoferComponent } from './components/chofer/chofer.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { MenuChoferComponent } from './components/menu-chofer/menu-chofer.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { MenuClienteComponent } from './components/menu-cliente/menu-cliente.component';
import { RegisterClienteComponent } from './components/register-cliente/register-cliente.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { VermasComponent } from './components/vermas/vermas.component';
import { CookieService } from "ngx-cookie-service";
import { ChoqueComponent } from './components/choque/choque.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ReportesClienteComponent } from './components/reportes-cliente/reportes-cliente.component';
import { ChoqueClienteComponent } from './components/choque-cliente/choque-cliente.component';
import { RegistroChoferComponent } from './components/registro-chofer/registro-chofer.component';
import { ReporteChoferComponent } from './components/reporte-chofer/reporte-chofer.component';
import { ViajesChoferComponent } from './components/viajes-chofer/viajes-chofer.component';


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent, 
    NabvarComponent, 
    ChoferComponent, 
    ClienteComponent, 
    AdministradorComponent, 
    MenuChoferComponent, 
    MenuAdminComponent, 
    MenuClienteComponent, 
    RegisterClienteComponent, 
    RegisterAdminComponent, 
    VermasComponent, ChoqueComponent, ReportesComponent, ReportesClienteComponent, ChoqueClienteComponent, RegistroChoferComponent, ReporteChoferComponent, ViajesChoferComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [   
    CookieService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
