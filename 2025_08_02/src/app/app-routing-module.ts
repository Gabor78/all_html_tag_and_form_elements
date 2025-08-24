import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hosegriado } from './hosegriado/hosegriado';
import { Vizsgaeredmenyek } from './vizsgaeredmenyek/vizsgaeredmenyek';
import { Hiba404 } from './hiba404/hiba404';

const routes: Routes = [
  { path: "hosegriado", component: Hosegriado },
  { path: "vizsgaeredmenyek", component: Vizsgaeredmenyek },
  { path: "hiba404", component: Hiba404 },
  { path: "", redirectTo: "/hosegriado", pathMatch: "full" },
  { path: "**", component: Hiba404 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
