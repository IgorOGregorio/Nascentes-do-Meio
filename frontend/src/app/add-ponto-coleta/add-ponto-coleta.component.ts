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
  selector: 'app-add-ponto-coleta',
  templateUrl: './add-ponto-coleta.component.html',
  styleUrls: ['./add-ponto-coleta.component.css']
})
export class AddPontoColetaComponent implements OnInit {

  @Input() pontoColeta;
  nome;
  endereco;
  latitude;
  longitude;
  geo;
  listGeo;

  constructor(private home: AppHomeComponent,
    private pontoApiService: PontoColetaAPIService,) { }

  ngOnInit() {
  }

  addPonto(lat, lng) {
    let json = {
      'nome': this.nome,
      'endereco': this.endereco,
      'latitude': lat,
      'longitude': lng
    }
    this.pontoApiService.addPontosColeta(json).then((ponto) => {
      console.log(json);
      this.home.goListPonto();
    });
  }

  
  mostraGeocode() {
    this.pontoApiService.getGeocode(this.endereco)
      .then((geocode) => {
        //console.log(geocode);
        //console.log('ok');
        this.geo = geocode;
        this.listGeo = this.geo.results;
        //console.log(this.listGeo[0].locations[0].latLng);
        this.addPonto(this.listGeo[0].locations[0].latLng.lat, this.listGeo[0].locations[0].latLng.lng);
      }).catch((error) => {
        console.log({ error });
      });
    
  }

}
