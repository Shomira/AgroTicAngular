import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CultivoComponent } from './components/cultivo/cultivo.component';
import { ItemsCatalogoComponent } from './components/items-catalogo/items-catalogo.component';
import { MenuComponent } from './components/menu/menu.component';
import { MonitoreoGeneralComponent } from './components/monitoreo-general/monitoreo-general.component';
import { MonitoreoPlantaComponent } from './components/monitoreo-planta/monitoreo-planta.component';
import { MonitoreosComponent } from './components/monitoreos/monitoreos.component';
import { PlagaEnfermedadComponent } from './components/plaga-enfermedad/plaga-enfermedad.component';
import { PlantaComponent } from './components/planta/planta.component';
import { RegistrarCultivoComponent } from './components/registrar-cultivo/registrar-cultivo.component';
import { VerCultivoComponent } from './components/ver-cultivo/ver-cultivo.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'cultivos', component: CultivoComponent },
  { path: 'ver-cultivo/:id', component: VerCultivoComponent},
  { path: 'registro-cultivo', component: RegistrarCultivoComponent },
  { path: 'catalogos', component: CatalogoComponent},
  { path: 'items-catalogo/:id', component: ItemsCatalogoComponent},
  { path: 'monitoreo-general/:id', component: MonitoreoGeneralComponent},
  { path: 'monitoreo-planta/:id', component: MonitoreoPlantaComponent},
  { path: 'monitoreos', component: MonitoreosComponent},
  { path: 'planta', component: PlantaComponent},
  { path: 'plaga-enfermedad', component: PlagaEnfermedadComponent},
  // Para cultivos
  { path: '**', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
