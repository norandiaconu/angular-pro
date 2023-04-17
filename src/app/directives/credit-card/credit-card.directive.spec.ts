import { CreditCardDirective } from "./credit-card.directive";

describe("CreditCardDirective", () => {
  let directive: CreditCardDirective;

  beforeEach(() => {
    directive = new CreditCardDirective();
  });

  it("should create an instance", () => {
    expect(directive).toBeTruthy();
  });

  it("should onKeyDown numbers", () => {
    let event = { target: { value: "12345678901234567" } } as unknown as KeyboardEvent;
    directive.onKeyDown(event);
    expect(directive.border).toBe("");
  });

  it("should onKeyDown letters", () => {
    let event = { target: { value: "abc" } } as unknown as KeyboardEvent;
    directive.onKeyDown(event);
    expect(directive.border).toBe("5px solid red");
  });  
});
