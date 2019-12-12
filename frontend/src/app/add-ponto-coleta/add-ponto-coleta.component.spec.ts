import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPontoColetaComponent } from './add-ponto-coleta.component';

describe('AddPontoColetaComponent', () => {
  let component: AddPontoColetaComponent;
  let fixture: ComponentFixture<AddPontoColetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPontoColetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPontoColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
