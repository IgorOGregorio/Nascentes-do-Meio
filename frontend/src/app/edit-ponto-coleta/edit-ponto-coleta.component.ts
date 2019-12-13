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
  public pontoId = null;
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
        this.pontoId = ponto;
        console.log(this.pontoId);
        console.log('ok');
      }).catch((error) => {
        console.log({ error });
      });
  }

  

  updatePonto(nome, endereco, jsonGeo) {
    //console.log(this.jsonGeo);
    let json = {
      'nome': nome,
      'endereco': endereco,
      'latitude': jsonGeo.lat,
      'longitude': jsonGeo.lng
    }
    this.pontoApiService.updatePontoColeta(json, this.id).then((ponto) => {
     // console.log(json);
      this.home.goListPonto();
    });
  }

  
  mostraGeocode(endereco, nome) {
    this.pontoApiService.getGeocode(endereco)
      .then((geocode) => {
        this.geo = geocode;
        this.listGeo = this.geo.results;
        let jsonGeo = {
          'lat': this.listGeo[0].locations[0].latLng.lat.toString(),
          'lng': this.listGeo[0].locations[0].latLng.lng.toString()
        }
      this.updatePonto(nome, endereco, jsonGeo);
      }).catch((error) => {
        console.log({ error });
      });
      //return this.jsonGeo;

  }

}
