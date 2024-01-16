import { Component } from '@angular/core';
import { BalanceComponent } from '../balance/balance.component';

@Component({
  selector: 'app-meses',
  standalone: true,
  imports: [BalanceComponent],
  templateUrl: './meses.component.html',
  styleUrl: './meses.component.css'
})
export class MesesComponent {

  meses = [
    {id: 1, nombre: "Enero"},
    {id: 2, nombre: "Febrero"},
    {id: 3, nombre: "Marzo"},
    {id: 4, nombre: "Abril"},
    {id: 5, nombre: "Mayo"},
    {id: 6, nombre: "Junio"},
    {id: 7, nombre: "Julio"},
    {id: 8, nombre: "Agosto"},
    {id: 9, nombre: "Septiembre"},
    {id: 10, nombre: "Octubre"},
    {id: 11, nombre: "Noviembre"},
    {id: 12, nombre: "Diciembre"}
  ]
}
