import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfComponent } from './tf.component';

describe('TfComponent', () => {
  let component: TfComponent;
  let fixture: ComponentFixture<TfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TfComponent]
    });
    fixture = TestBed.createComponent(TfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
