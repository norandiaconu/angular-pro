import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyForDirective } from './directives/my-for/my-for.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DirectivesComponent,
        MyForDirective,
        TooltipDirective
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-pro'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-pro');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('advanced-components').textContent).toBe('');
  });
});
