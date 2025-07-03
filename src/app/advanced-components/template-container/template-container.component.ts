import { AfterContentInit, Component, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component({
    selector: "template-container",
    templateUrl: "./template-container.component.html",
    styleUrls: ["./template-container.component.scss"],
    standalone: true,
    imports: [NgTemplateOutlet]
})
export class TemplateContainerComponent implements AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef, static: true }) entry!: ViewContainerRef;
  @ViewChild("template", { static: true }) template!: TemplateRef<any>;

  context = {
    $implicit: "Noran Diaconu",
    location: "North Carolina"
  };

  constructor() {}

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.template, {
      $implicit: "Noran",
      location: "North Carolina"
    });
  }
}
