import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DirectivesComponent } from './directives.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

describe('DirectivesComponent', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesComponent, TooltipDirective ],
      providers: [ TooltipDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
