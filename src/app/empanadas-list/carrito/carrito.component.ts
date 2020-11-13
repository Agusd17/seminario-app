import { Component, OnInit } from '@angular/core';
import { CartManagerService } from 'src/app/cart-manager.service';
import { Empanada } from '../Empanada';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(private cartManager: CartManagerService) { }

  carrito: Empanada[];
  noCartFlag: boolean = true;

  ngOnInit(): void {

    this.carrito = [];

    this.cartManager.cartChanged.subscribe(
      (cart: Empanada[]) => {
        this.carrito = cart;
        this.noCartFlag = false;
      }
    );
  }

}
