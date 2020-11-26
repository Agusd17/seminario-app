import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cart-item';
import { CartManagerService } from 'src/app/cart-manager.service';
import { Empanada } from '../empanada';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(private cartManager: CartManagerService) { }

  carrito: any[];
  noCartFlag: boolean = true;

  ngOnInit(): void {

    this.carrito = [];

    this.cartManager.cartChanged.subscribe(
      (cartItem: CartItem[]) => {
        this.carrito = cartItem;
        this.noCartFlag = false;
        console.log('carrito: ');
        console.log(this.carrito);

      }
    );
  }

}
