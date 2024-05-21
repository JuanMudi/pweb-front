import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraerxidComponent } from './traerxid.component';

describe('TraerxidComponent', () => {
  let component: TraerxidComponent;
  let fixture: ComponentFixture<TraerxidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraerxidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraerxidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
