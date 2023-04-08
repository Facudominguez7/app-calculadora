import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación Calculadora';
  operandoA: number = 0;
  operandoB: number = 0;
  resultadoPadre: number;

  procesarResultado(resultado: number){
    this.resultadoPadre = resultado;
  }

  
}

