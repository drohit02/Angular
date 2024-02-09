import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceComponent } from './my-service.component';

describe('MyServiceComponent', () => {
  let component: MyServiceComponent;
  let fixture: ComponentFixture<MyServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyServiceComponent]
    });
    fixture = TestBed.createComponent(MyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
