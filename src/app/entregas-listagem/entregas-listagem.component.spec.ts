import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregasListagemComponent } from './entregas-listagem.component';

describe('EntregasListagemComponent', () => {
  let component: EntregasListagemComponent;
  let fixture: ComponentFixture<EntregasListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregasListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
