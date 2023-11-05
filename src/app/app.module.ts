import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobrePopupComponent } from './components/sobre-popup/sobre-popup.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './components/contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    InicioComponent,
    CadastroComponent,
    SobrePopupComponent,
    ContatoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule// Importe o FormsModule aqui
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
