import { Component } from '@angular/core';

@Component({
  selector: 'app-adatkotesek',
  standalone: false,
  templateUrl: './adatkotesek.html',
  styleUrl: './adatkotesek.css'
})
export class Adatkotesek {
  szovegValtozo: string = "Lorem ipsum";
  szovegTomb: string[] = ["Alma","Barack","Cékla","Dió","Eper"];
  a: number = 1;
  b: number = 1;
  c: number = 1;
  d: number = 1;
  e: number = 1;
}
