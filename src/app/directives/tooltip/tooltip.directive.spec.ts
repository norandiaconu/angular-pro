import { TooltipDirective } from "./tooltip.directive";

describe("TooltipDirective", () => {
  const element = {
    nativeElement: document.createElement("div")
  };
  const directive = new TooltipDirective(element);

  it("should create an instance", () => {
    expect(directive).toBeTruthy();
  });

  it("should show", () => {
    directive.show();
    expect(directive.tooltipElement.classList.contains("tooltip--active")).toBeTruthy();
    expect(directive.visible).toBeTruthy();
  });

  it("should hide", () => {
    directive.hide();
    expect(directive.tooltipElement.classList.contains("tooltip--active")).toBeFalsy();
    expect(directive.visible).toBeFalsy();
  });
});
