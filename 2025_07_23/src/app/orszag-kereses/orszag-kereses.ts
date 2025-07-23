import { Component } from '@angular/core';
import { EuropaiUnio, EUtag } from '../europai-unio-adatok';

@Component({
  selector: 'app-orszag-kereses',
  standalone: false,
  templateUrl: './orszag-kereses.html',
  styleUrl: './orszag-kereses.css'
})
export class OrszagKereses {
  EuropaiUnio = EuropaiUnio;
  orszagKeres: string = "";
  orszagKeresKiir: string = "Kanada";
  csatlakozottEKiir: string = "még nem";

  orszagKeresFunc(): void {
    let orszag: string = this.orszagKeres;
    let csatlakozottE: boolean = false;
    for(var i: number = 0; i < this.EuropaiUnio.length; i++) {
      if(this.EuropaiUnio[i].orszag.toLowerCase() === orszag.toLowerCase()) {
        csatlakozottE = true;
      }
    }
    this.orszagKeresKiir = orszag;
    if(csatlakozottE) {
      this.csatlakozottEKiir = "már";
    }
    else {
      this.csatlakozottEKiir = "még nem";
    }
  }
}
