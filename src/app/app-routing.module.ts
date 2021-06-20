import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CultivoComponent } from './components/cultivo/cultivo.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormMonitGeneralComponent } from './components/monitoreo-general/form-monit-general/form-monit-general.component';
import { FormMonitPlantaComponent } from './components/monitoreo-planta/form-monit-planta/form-monit-planta.component';
import { MonitoreosComponent } from './components/monitoreos/monitoreos.component';
import { PlagaEnfermedadComponent } from './components/plaga-enfermedad/plaga-enfermedad.component';
import { PlantaComponent } from './components/planta/planta.component';
import { RegistrarCultivoComponent } from './components/registrar-cultivo/registrar-cultivo.component';


const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'cultivos', component: CultivoComponent },
  { path: 'registro-cultivo', component: RegistrarCultivoComponent },
  { path: 'monitoreo-general', component: FormMonitGeneralComponent },
  { path: 'monitoreo-planta', component:  FormMonitPlantaComponent },
  { path: 'monitoreos', component:  MonitoreosComponent },
  { path: 'planta', component:  PlantaComponent },
  { path: 'plaga-enfermedad', component:  PlagaEnfermedadComponent },
  { path: '**', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
