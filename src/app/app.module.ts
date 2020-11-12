import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpanadasListComponent } from './empanadas-list/empanadas-list.component';
import { AboutComponent } from './about/about.component';
import { CartManagerService } from './cart-manager.service';
import { CarritoComponent } from './empanadas-list/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpanadasListComponent,
    AboutComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
