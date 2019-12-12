import { TestBed } from '@angular/core/testing';

import { PontoColetaAPIService } from './ponto-coleta-api.service';

describe('PontoColetaAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PontoColetaAPIService = TestBed.get(PontoColetaAPIService);
    expect(service).toBeTruthy();
  });
});
