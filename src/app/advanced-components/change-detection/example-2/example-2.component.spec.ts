import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { Example2Component } from "./example-2.component";

describe("Example2Component", () => {
  let component: Example2Component;
  let fixture: ComponentFixture<Example2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Example2Component]
    }).compileComponents();
    fixture = TestBed.createComponent(Example2Component);
    component = fixture.componentInstance;
    component.user = {
      email: "",
      password: ""
    };
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
