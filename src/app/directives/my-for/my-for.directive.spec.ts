import { TemplateRef, ViewContainerRef } from "@angular/core";
import { MyForDirective } from "./my-for.directive";

describe("MyForDirective", () => {
  it("should create an instance", () => {
    let view!: ViewContainerRef;
    let template!: TemplateRef<any>;
    const directive = new MyForDirective(view, template);
    expect(directive).toBeTruthy();
  });
});
