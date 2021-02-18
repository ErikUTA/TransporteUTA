import { Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ChoferComponent } from './components/chofer/chofer.component';
import { HomeComponent } from './components/home/home.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { MenuClienteComponent } from './components/menu-cliente/menu-cliente.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { MenuChoferComponent } from './components/menu-chofer/menu-chofer.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { RegisterClienteComponent } from './components/register-cliente/register-cliente.component';
import { VermasComponent } from './components/vermas/vermas.component';
import { ChoqueComponent } from './components/choque/choque.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ReportesClienteComponent } from './components/reportes-cliente/reportes-cliente.component';
import { ChoqueClienteComponent } from './components/choque-cliente/choque-cliente.component';
import { ReporteChoferComponent } from './components/reporte-chofer/reporte-chofer.component';
import { ViajesChoferComponent } from './components/viajes-chofer/viajes-chofer.component';
import { RegistroChoferComponent } from './components/registro-chofer/registro-chofer.component';

export const ROUTES: Routes = [
    {path: 'cliente', component: ClienteComponent },
    {path: 'chofer', component: ChoferComponent },
    {path: 'home', component: HomeComponent },
    {path: 'admin', component: AdministradorComponent },
    {path: 'menuCliente', component: MenuClienteComponent },
    {path: 'menuAdmin', component: MenuAdminComponent },
    {path: 'menuChofer', component: MenuChoferComponent },
    {path: 'registerAdmin', component: RegisterAdminComponent },
    {path: 'registerCliente', component: RegisterClienteComponent},
    {path: 'choque', component: ChoqueComponent},
    {path: 'choqueCliente', component: ChoqueClienteComponent},
    {path: 'vermas', component: VermasComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'reportesCliente', component: ReportesClienteComponent},
    {path: 'reportesChofer', component: ReporteChoferComponent},
    {path: 'viajesChofer', component: ViajesChoferComponent},
    {path: 'registroChofer', component: RegistroChoferComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home' }
];