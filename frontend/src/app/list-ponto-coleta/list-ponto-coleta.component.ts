import { Component, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { PontoColetaAPIService } from '../api/ponto-coleta-api.service';

@Component({
  selector: 'app-list-ponto-coleta',
  templateUrl: './list-ponto-coleta.component.html',
  styleUrls: ['./list-ponto-coleta.component.css']
})
export class ListPontoColetaComponent implements OnInit {

  public listPontos;
  

  constructor(private home: AppHomeComponent,
    private pontoApiService: PontoColetaAPIService,) { }

  ngOnInit() {
    this.getListPontos();
  }

  getListPontos() {
    this.pontoApiService.getPontosColeta()
      .then((pontos) => {
        this.listPontos = pontos;
        console.log(this.listPontos);
        console.log('ok');
      }).catch((error) => {
        console.log({ error });
      });
  }

  getPontosByName(nome) {
    if(nome){
      let json = {
        'nome': nome
      }
      this.pontoApiService.getPontoColetaByName(json)
        .then((ponto) => {
          console.log(ponto);
          this.listPontos = ponto;
          //console.log(this.listPontos);
          console.log('ok');
        }).catch((error) => {
          console.log({ error });
        });
    }else{
      this.getListPontos();
    }
  }

  showEditPonto(id){
    this.home.goEditPonto(id);
  }

  

}
