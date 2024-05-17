import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:"home", component: DashboardComponent,title:'home'},
    {path:"aboutus", component: AboutusComponent,title:'aboutus'},
    {path:"contactus", component: ContactusComponent,title:'contactus',canActivate:[authGuard]},
    {path:"aboutusnew", component: AboutusComponent,outlet:'outlet2'},
    {path:"aboutusnew/:id", component: AboutusComponent,outlet:'outlet2'},
    {path:"login", component: LoginComponent,title:'login'},

    {path:"**", component: PagenotfoundComponent,title:'notfound'},
];
