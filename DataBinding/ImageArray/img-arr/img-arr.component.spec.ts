import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgArrComponent } from './img-arr.component';

describe('ImgArrComponent', () => {
  let component: ImgArrComponent;
  let fixture: ComponentFixture<ImgArrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgArrComponent]
    });
    fixture = TestBed.createComponent(ImgArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
