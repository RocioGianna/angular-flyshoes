import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zapatillas-list',
  templateUrl: './zapatillas-list.component.html',
  styleUrls: ['./zapatillas-list.component.css']
})
export class ZapatillasListComponent implements OnInit {
  zapatillas = {
   "marca" : "Nike",
   "modelo" : "Runnig", 
   "precio" : 5000,
   "stock":15,
   "imagen": "assets/img/shoes1.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
