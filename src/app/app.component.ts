import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = null;
  pessoas = [];
  totalizador = null;

  adicionar(){
    this.pessoas.push(this.nome);
    this.nome = null;
    this.totalizador += 1;
  }

  excluir(id){
    this.pessoas.splice(this.pessoas.indexOf(id), 1);
    this.totalizador -=1; 
  }
}
