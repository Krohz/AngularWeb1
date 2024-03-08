import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';

const routes: Routes = [

  {
    path:'',
    component: LoginComponent
  },
  {
    path:'sidebar',
    component: SidebarComponent
  },
  {
    path:'crear-cuenta',
    component: CrearCuentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
