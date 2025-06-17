import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculoComponent implements OnInit{
//fazer os controller para Vagas
  public curriculos: Curriculo[] = []; //armazena os dados da API
  public curriculos: Curriculo = new this.Curriculo(0,"","","",0); //manipular no Formulário(inserir, modificar, deletar)

  constructor(private _curriculoService: curriculosService){}

  // método para rodar no inicio da tela
  ngOnInit(): void {
    this.listarVagas();
  }

  //método para carregar todas as vagas do BD
  listarVagas(){
    this._vagaService.getVagas().subscribe(
      //preencher um Map com as informações do backEnd
      (e) => {
        this.vagas = e.map((atributo) => {
          return new Vaga(
            atributo.id,
            atributo.nome,
            atributo.foto,
            atributo.descricao,
            atributo.salario
          );
        });
      }
    );
  }