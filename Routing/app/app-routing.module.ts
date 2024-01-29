import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginPage/login/login.component';
import { AboutUsComponent } from './AboutUsPage/about-us/about-us.component';
import { ContactUsComponent } from './ContactUs/contact-us/contact-us.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "about-us",component : AboutUsComponent},
  {path: "contact-us",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
