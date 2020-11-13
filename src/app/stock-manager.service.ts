import { EventEmitter, Injectable } from '@angular/core';
import { CartManagerService } from './cart-manager.service';
import { Empanada } from './empanadas-list/Empanada';

@Injectable({ providedIn: "root"})
export class StockManagerService {

  empanadasChanged = new EventEmitter<Empanada[]>();

  // array inicial
  private empanadas: Empanada[] = [
    {
      image: "assets/img/carnehot.jpg",
      name: "Carne Hot",
      style: "Carne, salsa picante, cebolla y huevo",
      price: 50,
      stock: 5,
      sale: false,
      quantity: 0
    },
    {
      image: "assets/img/jamonyque.jpg",
      name: "Jamon y qué!",
      style: "Jamón cocido y muuzarella",
      price: 50,
      stock: 50,
      sale: true,
      quantity: 0
    },
    {
      image: "assets/img/verdura.jpg",
      name: "Green Dream",
      style: "Espinaca, cebolla y ajo salteados",
      price: 50,
      stock: 0,
      sale: false,
      quantity: 0
    },
    {
      image: "assets/img/pollito.jpg",
      name: "Super Pollo",
      style: "Pollo, salsa picante, verdeo y huevo",
      price: 50,
      stock: 85,
      sale: false,
      quantity: 0
    },
    {
      image: "assets/img/humita.jpg",
      name: "Norteña",
      style: "Humita casera",
      price: 50,
      stock: 100,
      sale: true,
      quantity: 0
    },
  ];

  constructor(private cartManager: CartManagerService) {

  }

  getEmpanadas() {
    // retorno una copia del array empanadas, 
    // porque no quiero que sea manipulable directamente
    return this.empanadas.slice();
  }

  addToCart(item: Empanada) {
    this.cartManager.addItemstoCart(item);
    this.empanadasChanged.emit(this.empanadas.slice());
  }

  
}