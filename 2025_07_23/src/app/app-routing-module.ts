import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hiba } from './hiba/hiba';
import { TagokSzama } from './tagok-szama/tagok-szama';
import { EvKereses } from './ev-kereses/ev-kereses';
import { OrszagKereses } from './orszag-kereses/orszag-kereses';
import { UtolsoCsatlakozas } from './utolso-csatlakozas/utolso-csatlakozas';
import { HonapKereses } from './honap-kereses/honap-kereses';
import { OrszagStatisztika } from './orszag-statisztika/orszag-statisztika';

const routes: Routes = [
  { path: "tagok-szama", component: TagokSzama },
  { path: "ev-kereses", component: EvKereses },
  { path: "orszag-kereses", component: OrszagKereses },
  { path: "honap-kereses", component: HonapKereses },
  { path: "utolso-csatlakozas", component: UtolsoCsatlakozas },
  { path: "orszag-statisztika", component: OrszagStatisztika },
  { path: "", redirectTo: "/tagok-szama", pathMatch: "full" },
  { path: "**", component: Hiba }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
