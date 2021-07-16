import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarCultivoComponent } from './components/registrar-cultivo/registrar-cultivo.component';
import { MenuComponent } from './components/menu/menu.component';
import { CultivoComponent } from './components/cultivo/cultivo.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ItemsCatalogoComponent } from './components/items-catalogo/items-catalogo.component';
import { MonitoreosComponent } from './components/monitoreos/monitoreos.component';
import { MonitoreoGeneralComponent } from './components/monitoreo-general/monitoreo-general.component';
import { MonitoreoPlantaComponent } from './components/monitoreo-planta/monitoreo-planta.component';
import { PlantaComponent } from './components/planta/planta.component';
import { PlagaEnfermedadComponent } from './components/plaga-enfermedad/plaga-enfermedad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerCultivoComponent } from './components/ver-cultivo/ver-cultivo.component';
import { VerMonitoreoComponent } from './components/ver-monitoreo/ver-monitoreo.component';
import { VerMonitoreoPlantaComponent } from './components/ver-monitoreo-planta/ver-monitoreo-planta.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarCultivoComponent,
    MenuComponent,
    CultivoComponent,
    CatalogoComponent,
    ItemsCatalogoComponent,
    MonitoreosComponent,
    MonitoreoGeneralComponent,
    MonitoreoPlantaComponent, 
    PlantaComponent,
    PlagaEnfermedadComponent,
    VerCultivoComponent,
    VerMonitoreoComponent,
    VerMonitoreoPlantaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
