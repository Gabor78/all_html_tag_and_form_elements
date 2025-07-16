import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Alapok } from './alapok/alapok';
import { Hiba } from './hiba/hiba';
import { Elmelet } from './elmelet/elmelet';
import { FormsModule } from '@angular/forms';
import { Tombok } from './tombok/tombok';
import { Ngforminta } from './ngforminta/ngforminta';
import { Pizza } from './pizza/pizza';

@NgModule({
  declarations: [
    App,
    Alapok,
    Hiba,
    Elmelet,
    Tombok,
    Ngforminta,
    Pizza
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
