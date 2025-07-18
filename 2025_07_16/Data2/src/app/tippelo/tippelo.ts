import { Component } from '@angular/core';

@Component({
  selector: 'app-tippelo',
  standalone: false,
  templateUrl: './tippelo.html',
  styleUrl: './tippelo.css'
})
export class Tippelo {
  randomMin: number = 1;
  randomMax: number = 10;
  randomSzam: number = this.randomSzamGenerator();
  tipp: number = 1;
  tippek: number[] = [];
  tippekHistory: number[] = [];
  tippekSzama: number = 0;
  visszajelzes: string = "-";
  classNev: string = "red";
  pusholando: number = 0;

  randomSzamGenerator(): number {
    return Math.floor(Math.random() * (this.randomMax - this.randomMin + 1)) + this.randomMin;
  }

  tippCheck() {
    this.tippek.push(this.tipp);
    if (this.tipp < this.randomSzam) {
      this.visszajelzes = 'Ennél nagyobb.';
      this.classNev = "green";
    } else if (this.tipp > this.randomSzam) {
      this.visszajelzes = 'Ennél kisebb.';
      this.classNev = "blue";
    } else {
      this.visszajelzes = `Eltaláltad! A szám a(z) ${this.randomSzam} volt. Új szám generálva.`;
      this.classNev = "red";
      this.randomSzam = this.randomSzamGenerator();
      this.pusholando = this.tippek.length;
      this.tippekHistory.push(this.pusholando);
      this.tippek = [];
    }
  }

  generalas(): void {
    this.randomSzam = this.randomSzamGenerator();
  }
  reset(): void {
    this.randomSzam = this.randomSzamGenerator();
    this.tippek = [];
    this.tippekHistory = [];
    this.visszajelzes = "-";
    this.classNev = "black"
  }
}
