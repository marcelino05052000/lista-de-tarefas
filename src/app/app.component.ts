import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "";

  listas: String[] = [];

  salvar(){
    this.listas.push(this.nome);
    this.nome = "";
  }
  excluir(indice){
    this.listas.splice(indice,1);
  }
}
