import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { ExampleTwoComponent } from './example-two/example-two.component';

import { ViewEncapsulationComponent } from './view-encapsulation.component';

describe('ViewEncapsulationComponent', () => {
  let component: ViewEncapsulationComponent;
  let fixture: ComponentFixture<ViewEncapsulationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationComponent, ExampleOneComponent, ExampleTwoComponent, ExampleThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
