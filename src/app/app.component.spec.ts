import { TestBed, waitForAsync } from "@angular/core/testing";
import { NgForm } from "@angular/forms";
import { AdvancedComponentsComponent } from "./advanced-components/advanced-components.component";
import { AuthFormComponent } from "./advanced-components/auth-form/auth-form.component";
import { AuthMessageComponent } from "./advanced-components/auth-message/auth-message.component";
import { AuthRememberComponent } from "./advanced-components/auth-remember/auth-remember.component";
import { ChangeDetectionComponent } from "./advanced-components/change-detection/change-detection.component";
import { Example1Component } from "./advanced-components/change-detection/example-1/example-1.component";
import { Example2Component } from "./advanced-components/change-detection/example-2/example-2.component";
import { TemplateContainerComponent } from "./advanced-components/template-container/template-container.component";
import { ExampleOneComponent } from "./advanced-components/view-encapsulation/example-one/example-one.component";
import { ExampleThreeComponent } from "./advanced-components/view-encapsulation/example-three/example-three.component";
import { ExampleTwoComponent } from "./advanced-components/view-encapsulation/example-two/example-two.component";
import { ViewEncapsulationComponent } from "./advanced-components/view-encapsulation/view-encapsulation.component";
import { AppComponent } from "./app.component";
import { CustomPipesComponent } from "./custom-pipes/custom-pipes.component";
import { FilesizePipe } from "./custom-pipes/filesize.pipe";
import { DirectivesComponent } from "./directives/directives.component";
import { MyForDirective } from "./directives/my-for/my-for.directive";
import { TooltipDirective } from "./directives/tooltip/tooltip.directive";
import { RouterTestingModule } from "@angular/router/testing";

describe("AppComponent", () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AdvancedComponentsComponent,
        AppComponent,
        AuthFormComponent,
        AuthMessageComponent,
        AuthRememberComponent,
        CustomPipesComponent,
        ChangeDetectionComponent,
        DirectivesComponent,
        Example1Component,
        Example2Component,
        ExampleOneComponent,
        ExampleTwoComponent,
        ExampleThreeComponent,
        FilesizePipe,
        MyForDirective,
        NgForm,
        TemplateContainerComponent,
        TooltipDirective,
        ViewEncapsulationComponent
      ],
      providers: [FilesizePipe]
    }).compileComponents();
    jest.spyOn(console, "log").mockImplementation(() => {});
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-pro'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.title).toEqual("angular-pro");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector("advanced-components").textContent).toMatch(/Static Components.*/);
  });
});
