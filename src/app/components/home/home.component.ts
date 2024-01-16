import { Component } from '@angular/core';
import { MesesComponent } from '../meses/meses.component';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MesesComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private http: HttpClient) {
    this.registro = new FormGroup({

    });
  }

  tipoRegistro = [
    {
      id: 1,
      nombre: 'Ingreso'
    },
    {
      id: 2,
      nombre: 'Gasto'
    }
  ]

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



  registro: FormGroup;

  ngOnInit() {
    this.registro = new FormGroup({
      tipo: new FormControl(0),
      concepto: new FormControl(''),
      valor: new FormControl(0),
      inicio: new FormControl(0),
      fin: new FormControl(0),
    });
  }

  onSubmit(formData: any) {

    formData.fin = parseInt(formData.fin);
    formData.inicio = parseInt(formData.inicio);
    formData.tipo = parseInt(formData.tipo);
    formData.valor = parseFloat(formData.valor)

    if(formData.fin < formData.inicio){
      alert('El mes de inicio no puede ser mayor al mes final');
      return;
    }

    if(formData.valor <= 0){
      alert('El valor no puede ser menor o igual a 0');
      return;
    }


    this.http.post('http://localhost:44354/api/registro', formData)
      .subscribe(response => {
        console.log(response);
        alert('Registro guardado con éxito.')
      }, error => {
        console.error(error);
      });
  }
}

