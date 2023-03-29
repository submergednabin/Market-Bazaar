import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/admin/login/login.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { SignupAdminComponent } from './components/admin/signup-admin/signup-admin.component';

const routes: Routes = [
  {path:"", redirectTo:"/admin", pathMatch:'full'},
  {path:"admin", component:LoginComponent },
  {path:"admin/products",component:ProductsComponent},
  {path:"admin/signup", component:SignupAdminComponent},
  {path:"admin/profile/:id", component:ProfileComponent},
  {path:"**", redirectTo:"/admin"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
