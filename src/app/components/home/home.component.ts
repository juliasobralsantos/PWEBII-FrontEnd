import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nomeProduto: string = "Curso de Angular";
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto:string = 'assets/img/CRUD.png';
  dataValidade = '2021-12-31'

  constructor()
  {
    //variáveis de string em concatenação
    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção';

    /*
    console.log(`Nome do Produto: `, this.nomeProduto);
    console.log(`Anúncio: `, this.anuncio);
    console.log(`ID: `, this.idProduto);
    console.log(`Preço: `, this.precoProduto);
    console.log(`Prpmoção: `, this.promocao);

    //Esboço das variáveis dentro do código
    var variavel1;
    let variavel2;
    const variavel3 = 1;

    var idade = 10
    console.log('Minha idade é: ', idade)

      function imprimeIdade(){
        var idade = 50
        console.log('Minha idade é: ', idade)
    }
    imprimeIdade()

    function imprimeIdade(){
      for (let idade = 30; idade <= 40; idade++) {
        console.log('Idade dentro do for: ', idade)
      }
      console.log('Minha idade é: ', idade)
  }
  imprimeIdade()
  }
  }

  //exercicios 1 e 2

  let variavel = 0;
  let variavel = 10;
  console.log('variável:', variavel);
  function funcao(){
    let outra_variavel = 20;
    let outra_variavel = 30;
    console.log('outra variável:', outra_variavel);
  }
  funcao();

  //exercício 3

  var a = 10;
  var b = 20;
  function bar() {
  var a = 30;
  var b = 40;

    if(true)
    {
      var a = 50;
      let b = 60;
      console.log('Variável A dentro do if', a);
      console.log('Variável B dentro do if', b);
    }

  }
*/


}
}
