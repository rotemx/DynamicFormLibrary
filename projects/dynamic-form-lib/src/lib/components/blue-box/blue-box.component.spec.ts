import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBoxComponent } from './blue-box.component';

describe('BlueBoxComponent', () => {
  let component: BlueBoxComponent;
  let fixture: ComponentFixture<BlueBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
