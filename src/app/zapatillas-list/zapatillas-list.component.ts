import { Component, OnInit } from '@angular/core';
import { zapatilla } from './zapatilla';

@Component({
  selector: 'app-zapatillas-list',
  templateUrl: './zapatillas-list.component.html',
  styleUrls: ['./zapatillas-list.component.css']
})
export class ZapatillasListComponent implements OnInit {
  zapatillas: zapatilla []  = [
    {
    "marca" : "Nike",
    "modelo" : "Air Max", 
    "precio" : 5000,
    "stock":15,
    "imagen": "assets/img/shoes1.jpg",
    "oferta": true,
    "cantidad": 0,
    },
    {
      "marca" : "Adidas",
      "modelo" : "Superstar", 
      "precio" : 4500,
      "stock":1,
      "imagen": "assets/img/shoes2.jpg",
      "oferta": false,
      "cantidad": 0,
     },
     {
      "marca" : "Reebook",
      "modelo" : "Princess", 
      "precio" : 8000,
      "stock":0,
      "imagen": "assets/img/shoes3.jpg",
      "oferta": false,
      "cantidad": 0,
     },
];
  constructor() { }

  ngOnInit(): void {
  }
  menosCant(zapatilla: zapatilla): void{
    if (zapatilla.cantidad > 0){
      zapatilla.cantidad--;
    }
  }
  masCant(zapatilla: zapatilla): void{
    if(zapatilla.cantidad < zapatilla.stock){
      zapatilla.cantidad++;
    }
  }
  changeCantidad(event, zapatilla : zapatilla): void {
    if (event.target.value < 0){
      event.target.value = event.target.value * (-1);
      zapatilla.cantidad = event.target.value;
    }
    if (event.target.value > zapatilla.stock){
      zapatilla.cantidad = zapatilla.stock;
    }

  }
}
