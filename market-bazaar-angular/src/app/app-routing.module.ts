import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/admin/login/login.component';
import { ProductsComponent } from './components/admin/inventory/products/products.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { SignupAdminComponent } from './components/admin/signup-admin/signup-admin.component';
import { ProductListsComponent } from './components/admin/product-lists/product-lists.component';
import { CategoryComponent } from './components/admin/inventory/category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: LoginComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/products/all', component: ProductListsComponent },
  { path: 'admin/products/category/add', component: CategoryComponent },
  { path: 'admin/signup', component: SignupAdminComponent },
  { path: 'admin/profile/:id', component: ProfileComponent },
  { path: 'admin/:username/products', component: ProductsComponent },
  { path: '**', redirectTo: '/admin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
