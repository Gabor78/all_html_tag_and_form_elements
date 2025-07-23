import { Component } from '@angular/core';
import { EuropaiUnio, EUtag } from '../europai-unio-adatok';

@Component({
  selector: 'app-utolso-csatlakozas',
  standalone: false,
  templateUrl: './utolso-csatlakozas.html',
  styleUrl: './utolso-csatlakozas.css'
})
export class UtolsoCsatlakozas {
  EuropaiUnio = EuropaiUnio;
  utolsoCsatlakozo: string = utolsoCsatlakozoKeres(EuropaiUnio);
}
function utolsoCsatlakozoKeres(EuropaiUnio: EUtag[]): string {
  let utolsoCsatlakozasDatum: string = EuropaiUnio[0].csatlakozas.slice(0, 4);
  let utolsoCsatlakozasOrszag: string = EuropaiUnio[0].orszag;
  for(let i: number = 0; i < EuropaiUnio.length; i++) {
    if(EuropaiUnio[i].csatlakozas.slice(0, 4) > utolsoCsatlakozasDatum) {
      utolsoCsatlakozasDatum = EuropaiUnio[i].csatlakozas.slice(0, 4);
      utolsoCsatlakozasOrszag = EuropaiUnio[i].orszag;
    }
  }
  return utolsoCsatlakozasOrszag;
}