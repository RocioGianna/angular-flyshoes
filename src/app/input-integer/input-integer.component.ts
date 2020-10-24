import { Component, Input, OnInit } from '@angular/core';
import {zapatilla} from '../zapatillas-list/zapatilla';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
@Input()
  zapatilla : zapatilla;
  
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
