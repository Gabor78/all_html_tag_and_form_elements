import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Alapok } from './alapok/alapok';
import { Hiba } from './hiba/hiba';
import { Elmelet } from './elmelet/elmelet';
import { Tombok } from './tombok/tombok';
import { Ngforminta } from './ngforminta/ngforminta';
import { Pizza } from './pizza/pizza';

const routes: Routes = [
  { path: "alapok", component: Alapok },
  { path: "elmelet", component: Elmelet },
  { path: "tombok", component: Tombok },
  { path: "ngforminta", component: Ngforminta },
  { path: "pizza", component: Pizza },
  { path: "hiba", component: Hiba },
  { path: "", redirectTo: "/alapok", pathMatch: "full"},
  { path: "**", component: Hiba}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
