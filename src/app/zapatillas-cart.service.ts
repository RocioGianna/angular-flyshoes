import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { zapatilla } from './zapatillas-list/zapatilla';

@Injectable({
  providedIn: 'root'
})
export class ZapatillasCartService {

  private __carrito: zapatilla[] = [];

  carrito: BehaviorSubject<zapatilla[]> = new BehaviorSubject (this.__carrito);

  constructor() { }

  addToCart(zapatilla: zapatilla) {
    let item: zapatilla = this.__carrito.find((v1)=>v1.marca == zapatilla.marca);
    if (!item){
      this.__carrito.push({...zapatilla});
    }else{
      item.cantidad += zapatilla.cantidad;
      this.carrito.next(this.__carrito); // equivale al emmit de eventos
    }
  }
}
