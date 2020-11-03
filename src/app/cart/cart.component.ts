import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ZapatillasCartService } from '../zapatillas-cart.service';
import { zapatilla } from '../zapatillas-list/zapatilla';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    carrito$: Observable <zapatilla[]> ;
  constructor(private cart: ZapatillasCartService) {
    this.carrito$ = cart.carrito.asObservable();
  }

  ngOnInit(): void {
  }

}