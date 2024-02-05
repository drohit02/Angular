import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveFormComponent } from './dynamic-reactive-form.component';

describe('DynamicReactiveFormComponent', () => {
  let component: DynamicReactiveFormComponent;
  let fixture: ComponentFixture<DynamicReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicReactiveFormComponent]
    });
    fixture = TestBed.createComponent(DynamicReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
