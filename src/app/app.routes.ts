import {Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlyshoesShoesComponent } from './flyshoes-shoes/flyshoes-shoes.component';



export const appRoutes: Routes = [
    {path: '', component: FlyshoesShoesComponent},
    {path: 'zapatillas', component: FlyshoesShoesComponent},
    {path: 'about', component: AboutComponent},
];