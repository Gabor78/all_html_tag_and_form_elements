import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgaeredmenyek',
  standalone: false,
  templateUrl: './vizsgaeredmenyek.html',
  styleUrl: './vizsgaeredmenyek.css'
})
export class Vizsgaeredmenyek {
  vizsgazok = [
    "Kiss Eszter;eszter.kiss@cyber-suli.hu;52;62;Sikeres vizsga",
    "Nagy Károly;károly.nagy@cyber-suli.hu;65;44;Sikertelen vizsga",
    "Balogh Judit;judit.balogh@cyber-suli.hu;45;62;Sikertelen vizsga",
    "Kiss István;istván.kiss@cyber-suli.hu;52;76;Sikeres vizsga",
    "Kiss Nóra;nóra.kiss@cyber-suli.hu;80;61;Sikeres vizsga",
    "Kiss Bence;bence.kiss@cyber-suli.hu;81;89;Sikeres vizsga",
    "Kovács Károly;károly.kovács@cyber-suli.hu;94;81;Sikeres vizsga",
    "Nagy Eszter;eszter.nagy@cyber-suli.hu;95;65;Sikeres vizsga",
    "Kovács Szilvia;szilvia.kovács@cyber-suli.hu;80;28;Sikertelen vizsga",
    "Papp Zsófia;zsófia.papp@cyber-suli.hu;98;97;Sikeres vizsga",
    "Varga Nóra;nóra.varga@cyber-suli.hu;72;62;Sikeres vizsga",
    "Szabó Bence;bence.szabó@cyber-suli.hu;77;92;Sikeres vizsga",
    "Papp Márton;márton.papp@cyber-suli.hu;94;90;Sikeres vizsga",
    "Varga Márton;márton.varga@cyber-suli.hu;44;58;Sikertelen vizsga",
    "Balogh Csilla;csilla.balogh@cyber-suli.hu;76;62;Sikeres vizsga",
    "Tóth Róbert;róbert.tóth@cyber-suli.hu;53;27;Sikertelen vizsga",
    "Varga Petra;petra.varga@cyber-suli.hu;95;93;Sikeres vizsga",
    "Nagy Judit;judit.nagy@cyber-suli.hu;73;59;Sikeres vizsga",
    "Molnár Szilvia;szilvia.molnár@cyber-suli.hu;54;16;Sikertelen vizsga",
    "Kovács Károly;károly.kovács@cyber-suli.hu;63;34;Sikertelen vizsga",
    "Kiss Petra;petra.kiss@cyber-suli.hu;54;73;Sikeres vizsga",
    "Papp Gábor;gábor.papp@cyber-suli.hu;71;66;Sikeres vizsga",
    "Tóth Anna;anna.tóth@cyber-suli.hu;71;59;Sikeres vizsga",
    "Balogh Róbert;róbert.balogh@cyber-suli.hu;71;68;Sikeres vizsga",
    "Molnár Eszter;eszter.molnár@cyber-suli.hu;53;59;Sikeres vizsga",
    "Varga Hanna;hanna.varga@cyber-suli.hu;68;82;Sikeres vizsga",
    "Farkas Olivér;olivér.farkas@cyber-suli.hu;93;62;Sikeres vizsga",
    "Balogh Gábor;gábor.balogh@cyber-suli.hu;66;84;Sikeres vizsga",
    "Balogh Ferenc;ferenc.balogh@cyber-suli.hu;78;64;Sikeres vizsga",
    "Szabó Róbert;róbert.szabó@cyber-suli.hu;94;92;Sikeres vizsga",
    "Molnár Petra;petra.molnár@cyber-suli.hu;94;75;Sikeres vizsga",
    "Farkas Zsófia;zsófia.farkas@cyber-suli.hu;78;64;Sikeres vizsga",
    "Szabó Nóra;nóra.szabó@cyber-suli.hu;76;63;Sikeres vizsga",
    "Varga Csilla;csilla.varga@cyber-suli.hu;72;57;Sikeres vizsga",
    "Nagy Dávid;dávid.nagy@cyber-suli.hu;57;90;Sikeres vizsga",
    "Papp Márton;márton.papp@cyber-suli.hu;89;89;Sikeres vizsga",
    "Farkas Csilla;csilla.farkas@cyber-suli.hu;62;87;Sikeres vizsga",
    "Varga Lilla;lilla.varga@cyber-suli.hu;72;73;Sikeres vizsga",
    "Nagy Nóra;nóra.nagy@cyber-suli.hu;62;100;Sikeres vizsga",
    "Szabó Csilla;csilla.szabó@cyber-suli.hu;20;63;Sikertelen vizsga",
    "Molnár Hanna;hanna.molnár@cyber-suli.hu;62;77;Sikeres vizsga",
    "Szabó Lilla;lilla.szabó@cyber-suli.hu;73;86;Sikeres vizsga",
    "Papp Olivér;olivér.papp@cyber-suli.hu;72;59;Sikeres vizsga",
    "Tóth István;istván.tóth@cyber-suli.hu;96;7;Sikertelen vizsga",
    "Molnár Gábor;gábor.molnár@cyber-suli.hu;63;4;Sikertelen vizsga",
    "Szabó Ferenc;ferenc.szabó@cyber-suli.hu;51;63;Sikeres vizsga",
    "Farkas Szilvia;szilvia.farkas@cyber-suli.hu;83;76;Sikeres vizsga",
    "Varga Tibor;tibor.varga@cyber-suli.hu;100;84;Sikeres vizsga",
    "Tóth Zsófia;zsófia.tóth@cyber-suli.hu;57;54;Sikeres vizsga",
    "Kiss Márton;márton.kiss@cyber-suli.hu;70;83;Sikeres vizsga",
    "Nagy Petra;petra.nagy@cyber-suli.hu;76;82;Sikeres vizsga",
    "Tóth Gábor;gábor.tóth@cyber-suli.hu;61;86;Sikeres vizsga",
    "Nagy Eszter;eszter.nagy@cyber-suli.hu;80;59;Sikeres vizsga",
    "Varga Olivér;olivér.varga@cyber-suli.hu;55;54;Sikeres vizsga",
    "Papp Róbert;róbert.papp@cyber-suli.hu;98;91;Sikeres vizsga",
    "Molnár Ferenc;ferenc.molnár@cyber-suli.hu;84;82;Sikeres vizsga",
    "Nagy Ferenc;ferenc.nagy@cyber-suli.hu;97;99;Sikeres vizsga",
    "Kiss Márton;márton.kiss@cyber-suli.hu;54;94;Sikeres vizsga",
    "Tóth Ferenc;ferenc.tóth@cyber-suli.hu;61;82;Sikeres vizsga",
    "Balogh Hanna;hanna.balogh@cyber-suli.hu;88;56;Sikeres vizsga",
    "Kovács Anna;anna.kovács@cyber-suli.hu;71;41;Sikertelen vizsga",
    "Balogh Dávid;dávid.balogh@cyber-suli.hu;23;70;Sikertelen vizsga",
    "Nagy Károly;károly.nagy@cyber-suli.hu;61;70;Sikeres vizsga",
    "Kovács Zsófia;zsófia.kovács@cyber-suli.hu;97;68;Sikeres vizsga",
    "Farkas Lilla;lilla.farkas@cyber-suli.hu;89;60;Sikeres vizsga",
    "Farkas Márton;márton.farkas@cyber-suli.hu;99;44;Sikertelen vizsga",
    "Balogh Lilla;lilla.balogh@cyber-suli.hu;92;51;Sikeres vizsga",
    "Molnár Ferenc;ferenc.molnár@cyber-suli.hu;75;18;Sikertelen vizsga",
    "Farkas Szilvia;szilvia.farkas@cyber-suli.hu;99;96;Sikeres vizsga",
    "Molnár Dávid;dávid.molnár@cyber-suli.hu;68;99;Sikeres vizsga",
    "Nagy Eszter;eszter.nagy@cyber-suli.hu;53;52;Sikeres vizsga",
    "Papp Csilla;csilla.papp@cyber-suli.hu;67;53;Sikeres vizsga",
    "Farkas Petra;petra.farkas@cyber-suli.hu;18;94;Sikertelen vizsga",
    "Kovács Zsófia;zsófia.kovács@cyber-suli.hu;51;43;Sikertelen vizsga",
    "Kiss Róbert;róbert.kiss@cyber-suli.hu;94;55;Sikeres vizsga",
    "Farkas Hanna;hanna.farkas@cyber-suli.hu;88;74;Sikeres vizsga",
    "Nagy Gábor;gábor.nagy@cyber-suli.hu;48;60;Sikertelen vizsga",
    "Kovács Gábor;gábor.kovács@cyber-suli.hu;57;100;Sikeres vizsga",
    "Molnár Gábor;gábor.molnár@cyber-suli.hu;53;87;Sikeres vizsga",
    "Molnár Olivér;olivér.molnár@cyber-suli.hu;70;99;Sikeres vizsga",
    "Farkas Judit;judit.farkas@cyber-suli.hu;85;21;Sikertelen vizsga",
    "Papp Lilla;lilla.papp@cyber-suli.hu;95;71;Sikeres vizsga",
    "Tóth Olivér;olivér.tóth@cyber-suli.hu;63;22;Sikertelen vizsga",
    "Varga Petra;petra.varga@cyber-suli.hu;70;99;Sikeres vizsga",
    "Varga Hanna;hanna.varga@cyber-suli.hu;59;81;Sikeres vizsga",
    "Szabó Ferenc;ferenc.szabó@cyber-suli.hu;89;70;Sikeres vizsga",
    "Nagy Dávid;dávid.nagy@cyber-suli.hu;93;94;Sikeres vizsga",
    "Varga Zsófia;zsófia.varga@cyber-suli.hu;58;62;Sikeres vizsga",
    "Varga Hanna;hanna.varga@cyber-suli.hu;53;80;Sikeres vizsga",
    "Nagy Tibor;tibor.nagy@cyber-suli.hu;97;99;Sikeres vizsga",
    "Tóth Szilvia;szilvia.tóth@cyber-suli.hu;16;68;Sikertelen vizsga",
    "Tóth Zsófia;zsófia.tóth@cyber-suli.hu;33;99;Sikertelen vizsga",
    "Tóth Lilla;lilla.tóth@cyber-suli.hu;66;27;Sikertelen vizsga",
    "Tóth Judit;judit.tóth@cyber-suli.hu;66;60;Sikeres vizsga",
    "Szabó Hanna;hanna.szabó@cyber-suli.hu;93;87;Sikeres vizsga",
    "Kovács Tibor;tibor.kovács@cyber-suli.hu;56;72;Sikeres vizsga",
    "Nagy Lilla;lilla.nagy@cyber-suli.hu;10;57;Sikertelen vizsga",
    "Balogh Olivér;olivér.balogh@cyber-suli.hu;90;17;Sikertelen vizsga",
    "Molnár Lilla;lilla.molnár@cyber-suli.hu;100;94;Sikeres vizsga",
    "Tóth Judit;judit.tóth@cyber-suli.hu;57;79;Sikeres vizsga"
  ];

  objektumFeltolto(adatok: string[]): tanulo_eredmeny[] {
    let tanulokEredmenyei: tanulo_eredmeny[] = [];
    for (var i: number = 0; i < adatok.length; i++) {
      let splitteltSzoveg: string[] = adatok[i].split(";");
      let objektum: tanulo_eredmeny = new Tanulo(splitteltSzoveg[0], splitteltSzoveg[1], Number(splitteltSzoveg[2]), Number(splitteltSzoveg[3]), splitteltSzoveg[4]);
      tanulokEredmenyei.push(objektum);
    }
    return tanulokEredmenyei;
  }

  tanuloNeveInput: string = "";
  tanuloEmailInput: string = "";
  tesztReszInput: number = 0;
  gyakorlatiReszInput: number = 0;
  vizsgaEredmenyeInput: string = "";

  Mentes(): void {
    if (this.tanuloNeveInput !== "" && 
        this.tanuloEmailInput !== "" && 
        this.tesztReszInput !== 0 && 
        this.gyakorlatiReszInput !== 0 && 
        this.vizsgaEredmenyeInput !== ""
    ) {
      let objektum: tanulo_eredmeny = new Tanulo(this.tanuloNeveInput, this.tanuloEmailInput, this.tesztReszInput, this.gyakorlatiReszInput, this.vizsgaEredmenyeInput);
      this.vizsgazokAdatai.push(objektum);
      this.tanuloNeveInput = "";
      this.tanuloEmailInput = "";
      this.tesztReszInput = 0;
      this.gyakorlatiReszInput = 0;
      this.vizsgaEredmenyeInput = "";
    } else {
      alert("Hiányzó adat!");
    }
  }

  vizsgazokAdatai: tanulo_eredmeny[] = this.objektumFeltolto(this.vizsgazok);

  kereso: string = "";

  Kereses(vizsgazoAdatai: any): boolean {
    let keres: string = this.kereso.toLowerCase();
    if(!keres) return true;
    return (
      vizsgazoAdatai.nev?.toLowerCase().includes(keres) ||
      vizsgazoAdatai.email?.toLowerCase().includes(keres) ||
      vizsgazoAdatai.teszt_vizsgaresz?.toString().toLowerCase().includes(keres) ||
      vizsgazoAdatai.gyakorlat_vizsgaresz?.toString().toLowerCase().includes(keres) ||
      vizsgazoAdatai.vizsga_eredmeny?.toLowerCase().includes(keres)
    );
  }
}

export interface tanulo_eredmeny {
  nev: string;
  email: string;
  teszt_vizsgaresz: number;
  gyakorlat_vizsgaresz: number;
  vizsga_eredmeny: string;
}

class Tanulo implements tanulo_eredmeny {
  nev: string;
  email: string;
  teszt_vizsgaresz: number;
  gyakorlat_vizsgaresz: number;
  vizsga_eredmeny: string;

  constructor(nev: string, email: string, teszt_vizsgaresz: number, gyakorlat_vizsgaresz: number, vizsga_eredmeny: string) {
    this.nev = nev;
    this.email = email;
    this.teszt_vizsgaresz = teszt_vizsgaresz;
    this.gyakorlat_vizsgaresz = gyakorlat_vizsgaresz;
    this.vizsga_eredmeny = vizsga_eredmeny;
  }
}