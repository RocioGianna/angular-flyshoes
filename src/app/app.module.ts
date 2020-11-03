import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {appRoutes} from './app.routes';


import { AppComponent } from './app.component';
import { ZapatillasListComponent } from './zapatillas-list/zapatillas-list.component';
import { CartComponent } from './cart/cart.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { FlyshoesShoesComponent } from './flyshoes-shoes/flyshoes-shoes.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    ZapatillasListComponent,
    CartComponent,
    AboutComponent,
    FlyshoesShoesComponent,
    InputIntegerComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
