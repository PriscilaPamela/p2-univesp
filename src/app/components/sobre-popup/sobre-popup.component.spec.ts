import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrePopupComponent } from './sobre-popup.component';

describe('SobrePopupComponent', () => {
  let component: SobrePopupComponent;
  let fixture: ComponentFixture<SobrePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobrePopupComponent]
    });
    fixture = TestBed.createComponent(SobrePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
