import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ResResolver } from './services/res.resolver';

const routes: Routes = [
  {path: 'add-user', component: AddUserComponent},
  {path: 'edit/:id', component: EditUserComponent, resolve: {user: ResResolver}},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nav', component: NavComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComp = [ AddUserComponent, EditUserComponent, HomeComponent, LoginComponent, NavComponent ]
