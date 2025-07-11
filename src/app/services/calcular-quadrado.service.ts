import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalcularQuadradoService {
  calcular(largura: number, altura: number): number {
    return Math.pow(largura * altura, 2);
  }
}
