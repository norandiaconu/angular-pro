import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "template-container",
  templateUrl: "./template-container.component.html",
  styleUrls: ["./template-container.component.scss"]
})
export class TemplateContainerComponent implements AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef, static: true }) entry: ViewContainerRef;
  @ViewChild("template", { static: true }) template: TemplateRef<any>;

  context = {
    $implicit: "Noran Diaconu",
    location: "North Carolina"
  };

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.template, {
      $implicit: "Noran",
      location: "North Carolina"
    });
  }
}
