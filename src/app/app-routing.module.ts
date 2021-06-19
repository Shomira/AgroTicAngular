import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CultivoComponent } from './components/cultivo/cultivo.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrarCultivoComponent } from './components/registrar-cultivo/registrar-cultivo.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'cultivos', component: CultivoComponent },
  { path: 'registro-cultivo', component: RegistrarCultivoComponent },
  { path: '**', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
