import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: 'users', loadChildren: () => import('./Modules/users/users.module').then(m => m.UsersModule) },
{
  path:'',component:LoginComponent
},
{
  path:'dashboard',component:HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
