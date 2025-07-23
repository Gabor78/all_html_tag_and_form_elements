import { Component } from '@angular/core';
import { EuropaiUnio } from '../europai-unio-adatok';

@Component({
  selector: 'app-tagok-szama',
  standalone: false,
  templateUrl: './tagok-szama.html',
  styleUrl: './tagok-szama.css'
})
export class TagokSzama {
  EuropaiUnio = EuropaiUnio;
}
