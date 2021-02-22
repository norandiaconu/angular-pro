import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "template-container",
  templateUrl: "./template-container.component.html",
  styleUrls: ["./template-container.component.scss"]
})
export class TemplateContainerComponent implements OnInit, AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild("template") template: TemplateRef<any>;

  context = {
    $implicit: "Noran Diaconu",
    location: "North Carolina"
  };

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.template, {
      $implicit: "Noran",
      location: "North Carolina"
    });
  }
}
