import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Adatkotesek } from './adatkotesek/adatkotesek';
import { Index } from './index/index';
import { Hiba } from './hiba/hiba';
import { FormsModule } from '@angular/forms';
import { Tippelo } from './tippelo/tippelo';

@NgModule({
  declarations: [
    App,
    Adatkotesek,
    Index,
    Hiba,
    Tippelo
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
