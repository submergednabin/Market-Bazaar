import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/admin/users/users.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { LoginComponent } from './components/admin/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupAdminComponent } from './components/admin/signup-admin/signup-admin.component';
import { NavigationComponent } from './components/common/layout/navigation/navigation.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { SearchPanelComponent } from './components/common/layout/search-panel/search-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    LoginComponent,
    LoginComponent,
    SignupAdminComponent,
    NavigationComponent,
    ProfileComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
