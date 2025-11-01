import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { VehiculoListarComponent } from "./vehiculo/listar-vehiculo/listar-vehiculo.component";

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehiculoListarComponent
],
  providers: [provideHttpClient()],
  bootstrap: [App]
})
export class AppModule { }
