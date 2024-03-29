import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExampleThreeComponent } from './example-three.component';

describe('ExampleThreeComponent', () => {
  let component: ExampleThreeComponent;
  let fixture: ComponentFixture<ExampleThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
