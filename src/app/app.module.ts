import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarCultivoComponent } from './components/registrar-cultivo/registrar-cultivo.component';
import { MenuComponent } from './components/menu/menu.component';
import { CultivoComponent } from './components/cultivo/cultivo.component';
import { FormMonitPlantaComponent } from './components/monitoreo-planta/form-monit-planta/form-monit-planta.component';
import { FormMonitGeneralComponent } from './components/monitoreo-general/form-monit-general/form-monit-general.component';
import { MonitoreosComponent } from './components/monitoreos/monitoreos.component';
import { PlantaComponent } from './components/planta/planta.component';
import { PlagaEnfermedadComponent } from './components/plaga-enfermedad/plaga-enfermedad.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarCultivoComponent,
    MenuComponent,
    CultivoComponent,
    FormMonitPlantaComponent,
    FormMonitGeneralComponent,
    MonitoreosComponent,
    PlantaComponent,
    PlagaEnfermedadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
