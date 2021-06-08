import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//importando o modulo para acesso a serviços de API..
import { HttpClientModule } from '@angular/common/http';

//importando os modulos para desenvolvimento de formulários..
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //ativando a biblioteca
    FormsModule, //ativando a biblioteca
    ReactiveFormsModule //ativando a biblioteca
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
