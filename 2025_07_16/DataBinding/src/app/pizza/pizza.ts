import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  standalone: false,
  templateUrl: './pizza.html',
  styleUrl: './pizza.css'
})
export class Pizza {
  meretek: { nev: string, ar: number }[] = [
    { nev: "Nagy", ar: 5000},
    { nev: "Közepes", ar: 4000},
    { nev: "Kicsi", ar: 3000}
  ];
  megrendeltMeret = this.meretek[0];

  feltetelKategoriak: { kategoria: string, feltetek: { nev: string, ar: number }[]}[] = [
    {
      kategoria: "Sajt-feltétek",
      feltetek: [
          { nev: "Mozzarella", ar: 100 },
          { nev: "Gorgonzola", ar: 150 },
          { nev: "Parmezán", ar: 200 },
          { nev: "Trapista", ar: 250 }
        ]
    },
    {
      kategoria: "Hús-feltétek",
      feltetek: [
        { nev: "Csípős szalámi", ar: 200 },
        { nev: "Sonka", ar: 250 },
        { nev: "Füstölt tarja", ar: 300},
        { nev: "Disznósajt", ar: 350}
      ]
    },
    {
      kategoria: "Egyéb-feltétek",
      feltetek: [
        { nev: "Gomba", ar: 100 },
        { nev: "KukorIlona", ar: 120 },
        { nev: "Spárga", ar: 200 },
        { nev: "Oliva", ar: 220 }
      ]
    }
  ];

  megrendeltFeltetek: { nev: string, ar: number }[] = [];
  value: string = "";
  osszeg: number = this.megrendeltMeret.ar;

  MeretValto(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const meretNev = selectElement.value;
    let meret = null;
    for (let i = 0; i < this.meretek.length; i++) {
      if (this.meretek[i].nev === meretNev) {
        meret = this.meretek[i];
      }
    }
    if (meret) {
      this.megrendeltMeret = meret;
      this.osszeg = meret.ar;
      this.megrendeltFeltetek = [];
    }
  }

  FeltetValto(event: Event, feltet: { nev: string, ar: number }) {
    const input = event.target as HTMLInputElement;

    if (input.checked) {
      let vanMar = false;

      for (let i = 0; i < this.megrendeltFeltetek.length; i++) {
        if (this.megrendeltFeltetek[i].nev === feltet.nev) {
          vanMar = true;
        }
      }

      if (!vanMar) {
        this.megrendeltFeltetek.push({ nev: feltet.nev, ar: feltet.ar });
        this.osszeg += feltet.ar;
      }
    } else {
      for (var i:number = 0; i < this.megrendeltFeltetek.length; i++) {
        if (this.megrendeltFeltetek[i].nev === feltet.nev) {
          this.osszeg -= this.megrendeltFeltetek[i].ar;
          this.megrendeltFeltetek.splice(i, 1);
        }
      }
    }
  }

  vanAFeltet(feltet: { nev: string, ar: number }): boolean {
    for (let i = 0; i < this.megrendeltFeltetek.length; i++) {
      if (this.megrendeltFeltetek[i].nev === feltet.nev) {
        return true;
      }
    }
    return false;
  }
}
