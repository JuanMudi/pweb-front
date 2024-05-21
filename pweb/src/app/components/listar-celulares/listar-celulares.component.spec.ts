import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCelularesComponent } from './listar-celulares.component';

describe('ListarCelularesComponent', () => {
  let component: ListarCelularesComponent;
  let fixture: ComponentFixture<ListarCelularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCelularesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
