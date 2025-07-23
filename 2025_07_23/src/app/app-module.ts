import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TagokSzama } from './tagok-szama/tagok-szama';
import { EvKereses } from './ev-kereses/ev-kereses';
import { Hiba } from './hiba/hiba';
import { OrszagKereses } from './orszag-kereses/orszag-kereses';
import { UtolsoCsatlakozas } from './utolso-csatlakozas/utolso-csatlakozas';
import { HonapKereses } from './honap-kereses/honap-kereses';
import { FormsModule } from '@angular/forms';
import { OrszagStatisztika } from './orszag-statisztika/orszag-statisztika';

@NgModule({
  declarations: [
    App,
    TagokSzama,
    EvKereses,
    Hiba,
    OrszagKereses,
    UtolsoCsatlakozas,
    HonapKereses,
    OrszagStatisztika
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
