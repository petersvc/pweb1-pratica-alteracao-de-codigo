import { Component } from '@angular/core';
import {PRODUTOS} from "../../shared/modelo/PRODUTOS";
import {Produto} from "../../shared/modelo/produto";


@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent {
  produtos = PRODUTOS;
  excluir(produtoARemover: Produto): void {
    const indx = this.produtos.findIndex(produto =>
      produto.nome === produtoARemover.nome);

    this.produtos.splice(indx, 1);
  }
}
