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
    "modelo" : "Runnig", 
    "precio" : 5000,
    "stock":15,
    "imagen": "assets/img/shoes1.jpg",
    "oferta": true,
    "cantidad": 0,
    },
    {
      "marca" : "Adidas",
      "modelo" : "Air Max", 
      "precio" : 4500,
      "stock":1,
      "imagen": "assets/img/shoes1.jpg",
      "oferta": false,
      "cantidad": 0,
     },
     {
      "marca" : "Reebook",
      "modelo" : "Sport", 
      "precio" : 8000,
      "stock":0,
      "imagen": "assets/img/shoes1.jpg",
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
    console.log(event.key);
  }
}
