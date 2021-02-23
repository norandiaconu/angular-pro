import { TooltipDirective } from "./tooltip.directive";

describe("TooltipDirective", () => {
  it("should create an instance", () => {
    const element = {
      nativeElement: document.createElement("div")
    };
    const directive = new TooltipDirective(element);
    expect(directive).toBeTruthy();
  });
});
