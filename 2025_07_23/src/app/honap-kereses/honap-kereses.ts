import { Component, OnInit } from '@angular/core';
import { EuropaiUnio, EUtag } from '../europai-unio-adatok';

@Component({
  selector: 'app-honap-kereses',
  standalone: false,
  templateUrl: './honap-kereses.html',
  styleUrl: './honap-kereses.css'
})
export class HonapKereses implements OnInit {
  EuropaiUnio = EuropaiUnio;
  tortentE: string = "történt";
  className: string = "";
  honapok: string[] = ["Január","Február","Március","Április","Május","Június",
    "Július","Augusztus","Szeptember","Október","November","December"];
  valasztottHonapIndex: number = 0;
  
  ngOnInit() {
    this.frissitTortentE();
  }
  
  frissitTortentE() {
    let honapSzam: number = this.valasztottHonapIndex + 1;
    let honapAzonosito: string = honapSzam < 10 ? '0' + honapSzam : '' + honapSzam;
    let tortent: boolean = VoltEAdottHonapCsatlakozas(EuropaiUnio, honapAzonosito);
    this.tortentE = tortent ? "történt" : "NEM történt";
    this.className = tortent ? "my-5 alert-success fs-4" : "my-5 alert-danger fs-4";
  }
}

function VoltEAdottHonapCsatlakozas(vizsgaltTomb: EUtag[], honapAzonosito: string): boolean {
  let csatlakozottE: boolean = false;
  for (let i: number = 0; i < vizsgaltTomb.length; i++) {
    if (vizsgaltTomb[i].csatlakozas.indexOf(`.${honapAzonosito}.`) !== -1) {
      csatlakozottE = true;
    }
  }
  return csatlakozottE;
}
