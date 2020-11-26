import { EventEmitter, Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({ providedIn: "root"})
export class CartManagerService {

    cartChanged = new EventEmitter<CartItem[]>();
    private cart: CartItem[] = [];

    addItemstoCart(item: CartItem){
        // en ES6 los '...' indican que el array se debe pasar item a item,
        // y no como un array entero
        this.cart.push(item);
        // cuando el carrito se modifique, emito un evento con una copia
        // del nuevo carrito.
        this.cartChanged.emit(this.cart.slice());
    }
}
