import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[tooltip]",
  exportAs: "tooltip"
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement("div");
  visible = false;

  @Input()
  set tooltip(value: string) {
    this.tooltipElement.textContent = value;
  }

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.tooltipElement.className = "tooltip";
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add("tooltip-container");
  }

  hide(): void {
    this.tooltipElement.classList.remove("tooltip--active");
    this.visible = false;
  }

  show(): void {
    this.tooltipElement.classList.add("tooltip--active");
    this.visible = true;
  }

  getVisible(): boolean {
    return this.visible;
  }
}
