import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpanadasListComponent } from './empanadas-list/empanadas-list.component';
import { AboutComponent } from './about/about.component';
import { CarritoComponent } from './empanadas-list/carrito/carrito.component';
import { StockManagerService } from './stock-manager.service';
import { CartManagerService } from './cart-manager.service';
import { InputCartComponent } from './input-cart/input-cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpanadasListComponent,
    AboutComponent,
    CarritoComponent,
    InputCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
