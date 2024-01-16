import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-balance',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './balance.component.html',
})

export class BalanceComponent {
  @Input() mes?: number;
  registros?: any[];

  gastosTotales?: number = 0;
  ingresosTotales?: number = 0;
  total?: number = 0;

 constructor(private http: HttpClient) {}

 ngOnInit() {
  this.http.get('http://localhost:44354/api/buscador?mes=' + this.mes)
   .subscribe((response: any) => {
    this.registros = response;
    console.log(response);

    let gastosTotales: number = 0;
    let ingresosTotales: number = 0;


    this.registros?.forEach((registro)=>{
      if (registro.tipo === 'Gasto') {
        gastosTotales += registro.valor;
      } else {
        ingresosTotales += registro.valor;
      }
    })

    this.gastosTotales = gastosTotales;
    this.ingresosTotales = ingresosTotales;
    this.total = this.ingresosTotales - this.gastosTotales;
   }, error => {
    console.error(error);
   });
 }
}
