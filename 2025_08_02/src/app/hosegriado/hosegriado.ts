import { Component } from '@angular/core';

@Component({
  selector: 'app-hosegriado',
  standalone: false,
  templateUrl: './hosegriado.html',
  styleUrl: './hosegriado.css'
})
export class Hosegriado {
  hom1!: number;
  hom2!: number;
  hom3!: number;
  get aktSzint(): number { 
    return this.aktualisRiadoSzint(); 
  }

  aktualisRiadoSzint(): number {
    let szint: number = 0;
    if (this.hom1 > 25 || this.hom2 > 25 || this.hom3 > 25) {
      szint++;
    }
    if (this.hom1 > 25 && this.hom2 > 25 && this.hom3 > 25) {
      szint++;
    }
    if (this.hom1 > 27 && this.hom2 > 27 && this.hom3 > 27) {
      szint++;
    }
    return szint;
  }

  mentesGombDisabled = this.mentesGombDisabledFunc();
  
  mentesGombDisabledFunc() {
    return this.hom1 !== null && this.hom2 !== null && this.hom3 !== null;
  }
}
