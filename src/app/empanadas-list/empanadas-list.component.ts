import { Component, OnInit } from '@angular/core';
import { CartManagerService } from '../cart-manager.service';
import { StockManagerService } from '../stock-manager.service';
import { Empanada } from './empanada';

@Component({
  selector: 'app-empanadas-list',
  templateUrl: './empanadas-list.component.html',
  styleUrls: ['./empanadas-list.component.scss']
})
export class EmpanadasListComponent implements OnInit {

  constructor(
    private stockManager: StockManagerService) { }

  empanadas: Empanada[];
  currentQuant: number = 0;
  isMaxReached = false;

  ngOnInit() {
    this.empanadas = this.stockManager.getEmpanadas();
    // me suscribo al eventemitter del servicio para updatear mi listado
    // de empanadas cuando haya cambios
    this.stockManager.empanadasChanged.subscribe(
      (empanadas: Empanada[]) => {
        this.empanadas = empanadas;
      }
    )
  }

  addToCart(empanada: Empanada) {
    this.stockManager.addToCart(empanada);
  }

}
