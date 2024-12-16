import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    CartComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    // FooterComponent,
    // HeaderComponent
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    CartComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    // FooterComponent,
    // HeaderComponent,
    ProfileComponent
  ]
})
export class PagesModule { }
