import {Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlyshoesShoesComponent } from './flyshoes-shoes/flyshoes-shoes.component';
import { HomeComponent } from './home/home.component';



export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: FlyshoesShoesComponent},
    {path: 'about', component: AboutComponent},
];