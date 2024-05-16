import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:"home", component: DashboardComponent,title:'home'},
    {path:"**", component: PagenotfoundComponent,title:'notfound'},
    {path:"aboutus", component: AboutusComponent,title:'aboutus'},
    {path:"contactus", component: ContactusComponent,title:'contactus'},
];
