import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from './models/tarefa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;

  //construtor..
  constructor(private httpClient:HttpClient) {
    //inicializando o HttpClient
  }
  
  //função para processar o submit do formulário..
  cadastrarTarefa(formCadastro:any) : void {
    //fazendo uma chamada para o serviço de cadastro de tarefa da API (POST)
    this.httpClient.post("http://localhost:5000/api/Tarefas", formCadastro.form.value,
    {responseType: 'text'})
      .subscribe( //captura o callback da API (retorno da chamada ao serviço)
        (data) => { //retorno de sucesso da API
          console.log(data);
        },
        (e) => { //retorno de erro da API
          console.log(e);
        }
      )

  }

   //função para processar o submit do formulário..
   consultarTarefas() : void {

    //fazendo uma chamada para o serviço de cadastro de empresa da API (POST)
    this.httpClient.get<Tarefa[]>("http://localhost:5000/api/Tarefas")
      .subscribe( data => { 
          console.log(data);
        },
        (e) => { //retorno de erro da API
          console.log(e);
        }
      )

  }

}
