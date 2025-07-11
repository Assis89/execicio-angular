import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // <--- IMPORTANTE
import { CalcularQuadradoService } from '../services/calcular-quadrado.service';
CalcularQuadradoService

@Component({
  selector: 'app-calcular-quadrado',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // <--- Aqui
  templateUrl: './calcular-quadrado.component.html',
  styleUrls: ['./calcular-quadrado.component.css']
})
export class CalcularQuadradoComponent {
  largura = 0;
  altura = 0;
  resultado: number | null = null;

  constructor(private calcService: CalcularQuadradoService) {}

  calcular(): void {
    this.resultado = this.calcService.calcular(this.largura, this.altura);
  }
}
