import { Component } from '@angular/core';

@Component({
  selector: 'app-ngforminta',
  standalone: false,
  templateUrl: './ngforminta.html',
  styleUrl: './ngforminta.css'
})
export class Ngforminta {
  aSzam: number = 1;
  bSzam: number = 1;

  eredmenyek: string[] = [];

  Eredmenymentes() {
    this.eredmenyek.push(this.aSzam + " + " + this.bSzam + " = " + Number(this.aSzam+this.bSzam));
  }
}
