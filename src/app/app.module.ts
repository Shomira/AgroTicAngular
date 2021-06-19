import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarCultivoComponent } from './components/registrar-cultivo/registrar-cultivo.component';
import { MenuComponent } from './components/menu/menu.component';
import { CultivoComponent } from './components/cultivo/cultivo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarCultivoComponent,
    MenuComponent,
    CultivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
