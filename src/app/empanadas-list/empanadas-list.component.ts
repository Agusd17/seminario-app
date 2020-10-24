import { Component, OnInit } from '@angular/core';
import { Empanada } from './Empanada';

@Component({
  selector: 'app-empanadas-list',
  templateUrl: './empanadas-list.component.html',
  styleUrls: ['./empanadas-list.component.scss']
})
export class EmpanadasListComponent implements OnInit {

  empanadas: Empanada[] = [
    {
      image: "assets/img/carnehot.jpg",
      name: "Carne Hot",
      style: "Carne, salsa picante, cebolla y huevo",
      price: 50,
      stock: 75,
      sale: false
    },
    {
      image: "assets/img/jamonyque.jpg",
      name: "Jamon y qué!",
      style: "Jamón cocido y muuzarella",
      price: 50,
      stock: 50,
      sale: true
    },
    {
      image: "assets/img/verdura.jpg",
      name: "Green Dream",
      style: "Espinaca, cebolla y ajo salteados",
      price: 50,
      stock: 0,
      sale: false
    },
    {
      image: "assets/img/pollito.jpg",
      name: "Super Pollo",
      style: "Pollo, salsa picante, verdeo y huevo",
      price: 50,
      stock: 85,
      sale: false
    },
    {
      image: "assets/img/humita.jpg",
      name: "Norteña",
      style: "Humita casera",
      price: 50,
      stock: 100,
      sale: true
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
