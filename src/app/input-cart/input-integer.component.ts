import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  @Input() max: number;
  @Input() quantity: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  upQuant() {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuant() {
    if(this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  chngQuant(event) {
    if (event.code == 'ArrowUp' && this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else if (event.code == 'ArrowDown' && this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }

  }

}
