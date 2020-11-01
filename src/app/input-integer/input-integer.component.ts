import { Component, Input, OnInit, Output } from '@angular/core';
import {zapatilla} from '../zapatillas-list/zapatilla';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  cantidad : number;
  @Input()
  max: number;
  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
 
  menosCant(): void{
    if (this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  masCant(): void{
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }else{
      this.maxReached.emit("Se alcanzo el limite de stock");
    }
  }
  changeCantidad(event): void {
    if (event.target.value < 0){
      event.target.value = event.target.value * (-1);
     this.cantidad = event.target.value;
    } //cambia el numero a valor positivo 
  }
}
