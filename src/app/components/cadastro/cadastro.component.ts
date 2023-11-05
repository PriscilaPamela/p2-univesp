import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  formularioSelecionado!: string;
  produto = {
    codigo: '',
    nome: '',
    quantidade: '',
    validade: '',
    observacao: ''
  };

  constructor(private route: ActivatedRoute) {}

  // Agora, crie arrays separados para produtos em cada formulário.
  produtosFormulario1: any[] = [];
  produtosFormulario2: any[] = [];
  produtosFormulario3: any[] = [];
  produtosFormulario4: any[] = [];
  // Repita para outros formulários, se necessário.

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formularioSelecionado = params['formulario'];
    });
  }

  adicionarProduto() {
    // Adicione a lógica para adicionar o produto ao array correto com base no formulário selecionado.
    if (this.formularioSelecionado === 'formulario1') {
      this.produtosFormulario1.push({ ...this.produto });
    } else if (this.formularioSelecionado === 'formulario2') {
      this.produtosFormulario2.push({ ...this.produto });
    } else if (this.formularioSelecionado === 'formulario3') {
      this.produtosFormulario3.push({ ...this.produto });
    } else if (this.formularioSelecionado === 'formulario4') {
      this.produtosFormulario4.push({ ...this.produto });
    }
    // Limpe os campos do formulário
    this.produto = { codigo: '', nome: '', quantidade: '', validade: '', observacao:'' };
  }

  editarProduto(produto: any) {
    // Adicione a lógica de edição do produto
  }

  excluirProduto(produto: any, formulario: string) {
    // Adicione a lógica de exclusão do produto com base no array correto
    if (formulario === 'formulario1') {
      this.produtosFormulario1 = this.produtosFormulario1.filter(p => p !== produto);
    } else if (formulario === 'formulario2') {
      this.produtosFormulario2 = this.produtosFormulario2.filter(p => p !== produto);
    }
    // Repita para outros formulários, se necessário.
  }
}
