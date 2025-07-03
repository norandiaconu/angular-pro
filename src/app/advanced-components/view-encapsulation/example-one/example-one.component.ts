import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "example-one",
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: "./example-one.component.html",
    styleUrls: ["./example-one.component.scss"],
    standalone: true
})
export class ExampleOneComponent {
  constructor() {}
}
