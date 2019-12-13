import { Component, OnInit, Input } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { PontoColetaAPIService } from '../api/ponto-coleta-api.service';

export interface pontoColeta {
  nome: string;
  endereco: string;
  latitude: string;
  longitude: string;
}

@Component({
  selector: 'app-edit-ponto-coleta',
  templateUrl: './edit-ponto-coleta.component.html',
  styleUrls: ['./edit-ponto-coleta.component.css']
})
export class EditPontoColetaComponent implements OnInit {

  @Input() id;
  public listPonto = null;
  geo;
  listGeo;

  constructor(private home: AppHomeComponent,
    private pontoApiService: PontoColetaAPIService,) { }

  ngOnInit() {
    this.getPonto(this.id);
    //console.log(this.id);
  }

  getPonto(id){
    this.pontoApiService.getPontoColetaById(id)
      .then((ponto) => {
        this.listPonto = ponto;
        console.log(this.listPonto);
        console.log('ok');
      }).catch((error) => {
        console.log({ error });
      });
  }

  

  updatePonto(lat, lng, nome, endereco) {
    let json = {
      'nome': nome,
      'endereco': endereco,
      'latitude': lat,
      'longitude': lng
    }
    this.pontoApiService.updatePontoColeta(json, this.id).then((ponto) => {
      console.log(json);
      this.home.goListPonto();
    });
  }

  
  mostraGeocode(nome, endereco) {
    this.pontoApiService.getGeocode(endereco)
      .then((geocode) => {
        //console.log(geocode);
        //console.log('ok');
        this.geo = geocode;
        this.listGeo = this.geo.results;
        this.updatePonto(this.listGeo[0].locations[0].latLng.lat, this.listGeo[0].locations[0].latLng.lng, nome, endereco);
      }).catch((error) => {
        console.log({ error });
      });
    
  }

}
