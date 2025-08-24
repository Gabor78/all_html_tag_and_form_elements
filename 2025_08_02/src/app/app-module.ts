import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Hosegriado } from './hosegriado/hosegriado';
import { Vizsgaeredmenyek } from './vizsgaeredmenyek/vizsgaeredmenyek';
import { Hiba404 } from './hiba404/hiba404';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Hosegriado,
    Vizsgaeredmenyek,
    Hiba404
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
