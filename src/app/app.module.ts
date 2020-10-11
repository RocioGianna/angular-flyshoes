import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZapatillasListComponent } from './zapatillas-list/zapatillas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ZapatillasListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
