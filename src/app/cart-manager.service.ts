import { EventEmitter, Injectable } from '@angular/core';
import { Empanada } from './empanadas-list/Empanada';

@Injectable({ providedIn: "root"})
export class CartManagerService {

    cartChanged = new EventEmitter<Empanada[]>();
    private cart: Empanada[] = [];

    addItemstoCart(item: Empanada){
        // en ES6 los '...' indican que el array se debe pasar item a item,
        // y no como un array entero
        this.cart.push(item);
        // cuando el carrito se modifique, emito un evento con una copia
        // del nuevo carrito.
        this.cartChanged.emit(this.cart.slice());
    }
}