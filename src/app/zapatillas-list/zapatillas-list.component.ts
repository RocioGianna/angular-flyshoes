import { Component, OnInit } from '@angular/core';
import { ZapatillasCartService } from '../zapatillas-cart.service';
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

  constructor(private cart: ZapatillasCartService) {
   }

  ngOnInit(): void {
  }
  addToCart(zapatilla) : void{
    this.cart.addToCart(zapatilla);
    zapatilla.stock -= zapatilla.cantidad;
    zapatilla.cantidad = 0;
  }
  maxReached(m: string){
    alert(m);
  }
}
