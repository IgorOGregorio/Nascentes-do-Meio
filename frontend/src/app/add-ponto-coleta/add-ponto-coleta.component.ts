import { Component, OnInit, Input } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';
import { PontoColetaAPIService } from '../api/ponto-coleta-api.service';

export interface pontoColeta {
  nome: string;
  endereco: string;
  latitude: string;
  longitude: string;
}

interface Geo {
  lat: string;
  lng: string;
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
    private pontoApiService: PontoColetaAPIService, ) { }

  ngOnInit() {
  }

  addPonto(nome, endereco, jsonGeo) {
    //console.log(jGeo);
      let json = {
        'nome': nome,
        'endereco': endereco,
        'latitude': jsonGeo.lat,
        'longitude': jsonGeo.lng
      }
      this.pontoApiService.addPontosColeta(json).then((ponto) => {
        //console.log(json);
        this.home.goListPonto();
      });

    
    //console.log(this.jsonGeo);

  }

  mostraGeocode(nome, endereco): any{
    
    this.pontoApiService.getGeocode(endereco)
      .then((geocode) => {
        this.geo = geocode;
        this.listGeo = this.geo.results;
        let jsonGeo = {
          'lat': this.listGeo[0].locations[0].latLng.lat.toString(),
          'lng': this.listGeo[0].locations[0].latLng.lng.toString()
        }
        this.addPonto(nome, endereco, jsonGeo);
      }).catch((error) => {
        console.log({ error });
      });
  }

}
