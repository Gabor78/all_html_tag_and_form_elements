import { Component } from '@angular/core';
import { EuropaiUnio, EUtag } from '../europai-unio-adatok';

@Component({
  selector: 'app-ev-kereses',
  standalone: false,
  templateUrl: './ev-kereses.html',
  styleUrl: './ev-kereses.css'
})
export class EvKereses {
  EuropaiUnio = EuropaiUnio;
  csatlakozasEvek: number[] = [1958,1973,1981,1986,1995,2004,2007,2013]
  evSzam: number = 1958;

  get evKeresettOrszagokSzama(): number {
    return EuropaiUnio.filter(tag =>
      new Date(tag.csatlakozas).getFullYear() === this.evSzam
    ).length;
  }

  get evKeresettOrszagok(): EUtag[] {
    return EuropaiUnio.filter(tag =>
      new Date(tag.csatlakozas).getFullYear() === this.evSzam
    );
}
}
