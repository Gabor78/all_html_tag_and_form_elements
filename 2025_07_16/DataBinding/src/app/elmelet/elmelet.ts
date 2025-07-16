import { Component } from '@angular/core';

@Component({
  selector: 'app-elmelet',
  standalone: false,
  templateUrl: './elmelet.html',
  styleUrl: './elmelet.css'
})
export class Elmelet {
  szoveg: string = "Lorem ipsum";

  kepLink: string = "https://www.gstatic.com/marketing-cms/assets/images/f5/d3/a7f9db7045429cb6dc6be56bdcbe/google-logo-about.svg";
  kepSzelesseg: number = 100;
  kepCimke: string = "Google kereső";
  kepAlternativSzoveg: string = "Google kereső oldala";

  aOldal: number = 1;

  koszontes() {
    alert("Szia!");
  }
}
