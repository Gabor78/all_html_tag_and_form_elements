import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hiba } from './hiba/hiba';
import { Index } from './index';
import { Adatkotesek } from './adatkotesek/adatkotesek';
import { Tippelo } from './tippelo/tippelo';

const routes: Routes = [
  { path: "index", component: Index },
  { path: "adatkotesek", component: Adatkotesek},
  { path: "tippelo", component: Tippelo },
  { path: "", redirectTo: "/index", pathMatch: "full"},
  { path: "**", component: Hiba}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
