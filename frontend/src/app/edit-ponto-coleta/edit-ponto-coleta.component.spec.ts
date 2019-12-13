import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPontoColetaComponent } from './edit-ponto-coleta.component';

describe('EditPontoColetaComponent', () => {
  let component: EditPontoColetaComponent;
  let fixture: ComponentFixture<EditPontoColetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPontoColetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPontoColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
