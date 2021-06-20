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
    PlagaEnfermedadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
