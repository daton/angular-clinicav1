import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { BusquedasComponent } from './busquedas/busquedas.component';


import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent,
    EstadisticasComponent,
    BusquedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    DxChartModule,
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
