import { ProdutosService } from 'src/app/services/produtos.service';
import { Component } from '@angular/core';
import { IProduto } from 'model/IProduto.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent {

  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };

  constructor(private produtosService:ProdutosService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

    ngOnInit(): void {
      const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
      this.produtosService.buscarPorId(id).subscribe(retorno => {
        this.produto = retorno;
      });
    }

    salvarProduto(): void {
      this.produtosService.atualizar(this.produto).subscribe(retorno => {
          this.produto = retorno;
          this.produtosService.exibirMensagem(
            'Sistema',
            `${this.produto.nome} foi atualizado com sucesso. ID: ${this.produto.id}`,
            'toast-success'
          );
          this.router.navigate(['/produtos']);
      });
    }
}

