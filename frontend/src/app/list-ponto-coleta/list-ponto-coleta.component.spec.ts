import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPontoColetaComponent } from './list-ponto-coleta.component';

describe('ListPontoColetaComponent', () => {
  let component: ListPontoColetaComponent;
  let fixture: ComponentFixture<ListPontoColetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPontoColetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPontoColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
