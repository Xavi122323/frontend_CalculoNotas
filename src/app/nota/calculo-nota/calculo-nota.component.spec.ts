import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoNotaComponent } from './calculo-nota.component';

describe('CalculoNotaComponent', () => {
  let component: CalculoNotaComponent;
  let fixture: ComponentFixture<CalculoNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculoNotaComponent]
    });
    fixture = TestBed.createComponent(CalculoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
