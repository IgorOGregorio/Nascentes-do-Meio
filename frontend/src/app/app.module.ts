import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPontoColetaComponent } from './add-ponto-coleta/add-ponto-coleta.component';
import { ListPontoColetaComponent } from './list-ponto-coleta/list-ponto-coleta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditPontoColetaComponent } from './edit-ponto-coleta/edit-ponto-coleta.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Importação


@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    NavBarComponent,
    AddPontoColetaComponent,
    ListPontoColetaComponent,
    EditPontoColetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule // Nosso módulo recém instalado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
