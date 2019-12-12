import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const host = '127.0.0.1';
const port = 3000;
const ApiUrl = `http://${host}:${port}`;
@Injectable({
  providedIn: 'root'
})

export class PontoColetaAPIService {

  constructor(private httpClient: HttpClient) { }

  getPontosColeta() {
    return this.httpClient.get(`${ApiUrl}/pontos-coleta`).toPromise();
  }

  addPontosColeta(json){
    return this.httpClient.post(`${ApiUrl}/pontos-coleta`, json).toPromise();
  }

  /*getPontosColetaByID(id) {
    return this.httpClient.get(`${ApiUrl}/pontos-coleta/${id}`).toPromise();
  }
*/

  getGeocode(endereco){
    return this.httpClient.get(`http://www.mapquestapi.com/geocoding/v1/address?key=8W5k5mxObGyoE5uJ5jHMN5utPGqM9B9X&location=${endereco}`).toPromise();
  }
}
