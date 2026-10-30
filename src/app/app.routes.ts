import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component';
import { AdminClientesComponent } from './pages/admin/admin-clientes/admin-clientes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cliente-cadastro', component: ClienteFormComponent },
    { path: 'admin-clientes-listar', component: AdminClientesComponent },
    {path: 'admin-clientes-editar/:id', component : ClienteFormComponent}
];
