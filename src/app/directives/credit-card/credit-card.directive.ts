import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[credit-card]"
})
export class CreditCardDirective {
  @HostBinding("style.border")
  border: string;

  constructor() {}

  @HostListener("input", ["$event"])
  onKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    // better regex: /\D+/g
    let trimmed = input.value.replace(/\s+/g, "");
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }
    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }
    input.value = numbers.join(" ");

    this.border = "";
    if (/[\D]+/.test(trimmed)) {
      this.border = "5px solid red";
    }
  }
}
