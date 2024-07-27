import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { User } from "src/app/advanced-components/advanced-components.interface";

@Directive({
  selector: "[myFor][myForOf]"
})
export class MyForDirective {
  @Input()
  set myForOf(collection: any) {
    this.view.clear();
    collection.forEach((item: User, index: number) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
  }

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {}
}
