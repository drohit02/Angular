import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgChangeComponent } from './img-change.component';

describe('ImgChangeComponent', () => {
  let component: ImgChangeComponent;
  let fixture: ComponentFixture<ImgChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgChangeComponent]
    });
    fixture = TestBed.createComponent(ImgChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
