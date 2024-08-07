import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { Example1Component } from "./example-1.component";

describe("Example1Component", () => {
  let component: Example1Component;
  let fixture: ComponentFixture<Example1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Example1Component]
    }).compileComponents();
    fixture = TestBed.createComponent(Example1Component);
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
