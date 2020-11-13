import { Component, Input, OnInit } from '@angular/core';
import { Empanada } from '../empanadas-list/Empanada';

@Component({
  selector: 'app-input-cart',
  templateUrl: './input-cart.component.html',
  styleUrls: ['./input-cart.component.scss']
})
export class InputCartComponent implements OnInit {

  @Input() empanada: Empanada;

  constructor() { }

  ngOnInit(): void {
  }

  upQuant(empanada: Empanada) {
    if(empanada.quantity < empanada.stock) {
      empanada.quantity++;
    }
  }

  downQuant(empanada: Empanada) {
    if(empanada.quantity > 0) {
      empanada.quantity--;
    }
  }

  chngQuant(event, empanada: Empanada) {
    if (event.code == 'ArrowUp' && empanada.quantity < empanada.stock) {
      empanada.quantity++;
    } else if (event.code == 'ArrowDown' && empanada.quantity > 0) {
      empanada.quantity--;
    }
    
  }
  
}
