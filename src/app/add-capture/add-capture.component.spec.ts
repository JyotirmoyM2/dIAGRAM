import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaptureComponent } from './add-capture.component';

describe('AddCaptureComponent', () => {
  let component: AddCaptureComponent;
  let fixture: ComponentFixture<AddCaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
